// app/api/chat/route.ts
// Server-side proxy to OpenRouter (OpenAI-compatible). The API key lives here and
// NEVER reaches the browser — the client only ever talks to this route. Guardrails:
// model allowlist, bounded history, capped message length, capped output tokens.
// For verifiability, the actual model OpenRouter used is read off the first stream
// chunk and returned in the `X-Model` response header (and surfaced per-message in
// the UI) — so a visitor can confirm their model choice really took effect.
import { NextRequest } from 'next/server';
import OpenAI from 'openai';
import { buildSystemPrompt } from '../../(core)/assistant/knowledge';
import { DEFAULT_MODEL, isAllowedModel } from '../../(core)/assistant/models';
import { Language } from '../../(core)/i18n/translations';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SUPPORTED: Language[] = ['en', 'pt', 'de', 'es', 'zh'];
const MAX_MESSAGE_LENGTH = 800; // chars per message — keeps prompt cost bounded
const MAX_HISTORY = 10; // most recent turns sent to the model
const MAX_TOKENS = 500; // hard ceiling on each reply

type ChatMessage = { role: 'user' | 'assistant'; content: string };

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: NextRequest) {
  if (!process.env.OPENROUTER_API_KEY) {
    return json({ error: 'The assistant is not configured.' }, 503);
  }

  // ── Future seam: add per-IP rate limiting here (e.g. Upstash Redis) before
  // calling the model. Read request.headers.get('x-forwarded-for') for the IP.

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body.' }, 400);
  }

  const { messages, language, model } = (body ?? {}) as {
    messages?: ChatMessage[];
    language?: string;
    model?: string;
  };

  if (!Array.isArray(messages) || messages.length === 0) {
    return json({ error: 'No messages provided.' }, 400);
  }

  const recent = messages
    .slice(-MAX_HISTORY)
    .filter(
      (m) =>
        m &&
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string' &&
        m.content.trim().length > 0,
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }));

  if (recent.length === 0) {
    return json({ error: 'No valid messages provided.' }, 400);
  }

  const lang: Language = SUPPORTED.includes(language as Language) ? (language as Language) : 'en';
  // Only allowlisted models — anything else falls back to the default.
  const requestedModel = isAllowedModel(model) ? model : DEFAULT_MODEL;

  const client = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: 'https://openrouter.ai/api/v1',
    defaultHeaders: {
      'HTTP-Referer': 'https://viniciusbregoli.dev',
      'X-Title': 'bregoli_dev',
    },
  });

  try {
    const completion = await client.chat.completions.create({
      model: requestedModel,
      temperature: 0.7,
      max_tokens: MAX_TOKENS,
      stream: true,
      messages: [{ role: 'system', content: buildSystemPrompt(lang) }, ...recent],
    });

    // Pull the first chunk up front so we can report the model OpenRouter actually
    // resolved (it's echoed on every chunk) in the response header.
    const iterator = completion[Symbol.asyncIterator]();
    const first = await iterator.next();
    const usedModel =
      (!first.done && first.value?.model) || requestedModel;

    const encoder = new TextEncoder();
    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          if (!first.done) {
            const token = first.value.choices[0]?.delta?.content;
            if (token) controller.enqueue(encoder.encode(token));
          }
          while (true) {
            const { value, done } = await iterator.next();
            if (done) break;
            const token = value.choices[0]?.delta?.content;
            if (token) controller.enqueue(encoder.encode(token));
          }
        } catch (err) {
          console.error('Chat stream error:', err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Model': usedModel,
      },
    });
  } catch (err) {
    console.error('Chat error:', err);
    return json({ error: 'Failed to reach the assistant.' }, 500);
  }
}
