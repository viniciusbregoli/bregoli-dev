'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { useLanguage } from '../../(core)/i18n/context';
import { TranslationKey } from '../../(core)/i18n/translations';
import { DEFAULT_MODEL } from '../../(core)/assistant/models';
import { ChatMessage, streamChat } from '../assistant/streamChat';

const MAX_INPUT = 500;

/** Starter prompts that surface the personal / off-the-page stuff. */
export const SUGGESTIONS: TranslationKey[] = [
  'assistant.suggest.fun',
  'assistant.suggest.from',
  'assistant.suggest.setup',
  'assistant.suggest.work',
];

type AssistantChat = {
  messages: ChatMessage[];
  input: string;
  setInput: (value: string) => void;
  model: string;
  setModel: (id: string) => void;
  busy: boolean;
  error: boolean;
  send: (override?: string) => Promise<void>;
  started: boolean;
};

const AssistantChatContext = createContext<AssistantChat | undefined>(undefined);

/**
 * Holds the conversation ABOVE the view switch (mounted in the root providers),
 * so the chat survives switching between the HR and terminal views and any
 * route navigation. Both chat UIs read this single shared state. No persistence
 * across reloads (intentionally no chat history).
 */
export function AssistantChatProvider({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [model, setModel] = useState<string>(DEFAULT_MODEL);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);

  const setInputCapped = (value: string) => setInput(value.slice(0, MAX_INPUT));

  // Patch only the trailing (assistant) message, preserving its other fields.
  const patchLast = (patch: Partial<ChatMessage>) =>
    setMessages((cur) => {
      const copy = cur.slice();
      copy[copy.length - 1] = { ...copy[copy.length - 1], ...patch };
      return copy;
    });

  const send = async (override?: string) => {
    const question = (override ?? input).trim();
    if (!question || busy) return;

    setError(false);
    setInput('');
    const base: ChatMessage[] = [...messages, { role: 'user', content: question }];
    setMessages([...base, { role: 'assistant', content: '' }]);
    setBusy(true);

    try {
      await streamChat({
        messages: base,
        language,
        model,
        onToken: (full) => patchLast({ content: full }),
        onModel: (used) => patchLast({ model: used }),
      });
    } catch {
      setError(true);
      // Drop the empty assistant bubble if nothing streamed in.
      setMessages((cur) => (cur[cur.length - 1]?.content ? cur : cur.slice(0, -1)));
    } finally {
      setBusy(false);
    }
  };

  const value: AssistantChat = {
    messages,
    input,
    setInput: setInputCapped,
    model,
    setModel,
    busy,
    error,
    send,
    started: messages.length > 0,
  };

  return <AssistantChatContext.Provider value={value}>{children}</AssistantChatContext.Provider>;
}

export function useAssistantChat() {
  const ctx = useContext(AssistantChatContext);
  if (ctx === undefined) {
    throw new Error('useAssistantChat must be used within an AssistantChatProvider');
  }
  return ctx;
}
