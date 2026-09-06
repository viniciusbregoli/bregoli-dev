import { Language } from '../../(core)/i18n/translations';

export type ChatMessage = { role: 'user' | 'assistant'; content: string };

type StreamChatOptions = {
  messages: ChatMessage[];
  language: Language;
  /** Called with the full accumulated text each time more arrives. */
  onToken: (full: string) => void;
  signal?: AbortSignal;
};

/**
 * POSTs a conversation to /api/chat and streams the reply back token-by-token.
 * Resolves with the final text. Throws on a non-OK response or missing body.
 */
export async function streamChat({
  messages,
  language,
  onToken,
  signal,
}: StreamChatOptions): Promise<string> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, language }),
    signal,
  });

  if (!res.ok || !res.body) {
    throw new Error('assistant_unavailable');
  }


  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let full = '';

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    full += decoder.decode(value, { stream: true });
    onToken(full);
  }

  return full;
}
