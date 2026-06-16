// Curated model menu for the assistant, served via OpenRouter (OpenAI-compatible).
// Shared by the API route (allowlist validation) and the chat UIs (the picker),
// so the two never drift. The allowlist is the cost/abuse guard — visitors can
// only pick from here, not request arbitrary (expensive) models.

export type ModelOption = { id: string; label: string };

// Deliberately a cheap-only menu — these are public, visitor-selectable, and
// uncapped beyond max_tokens, so keep the per-token cost low.
export const MODELS: ModelOption[] = [
  { id: 'openai/gpt-4o-mini', label: 'GPT-4o mini' },
  { id: 'google/gemini-2.5-flash', label: 'Gemini 2.5 Flash' },
  { id: 'google/gemini-2.5-flash-lite', label: 'Gemini 2.5 Flash Lite' },
  { id: 'meta-llama/llama-3.3-70b-instruct', label: 'Llama 3.3 70B' },
  { id: 'deepseek/deepseek-chat', label: 'DeepSeek V3' },
];

export const DEFAULT_MODEL = 'openai/gpt-4o-mini';

const MODEL_IDS = new Set(MODELS.map((m) => m.id));

export function isAllowedModel(id: unknown): id is string {
  return typeof id === 'string' && MODEL_IDS.has(id);
}
