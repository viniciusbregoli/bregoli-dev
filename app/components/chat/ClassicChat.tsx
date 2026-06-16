'use client';

import { useEffect, useRef } from 'react';
import { FiSend } from 'react-icons/fi';
import { useLanguage } from '../../(core)/i18n/context';
import { MODELS } from '../../(core)/assistant/models';
import { SUGGESTIONS, useAssistantChat } from './useAssistantChat';

export default function ClassicChat() {
  const { t } = useLanguage();
  const { messages, input, setInput, model, setModel, busy, error, send, started } =
    useAssistantChat();

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, busy]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="mx-auto max-w-[1600px] px-4 sm:px-6 pb-10">
      <div className="panel flex h-[calc(100dvh-9rem)] min-h-[26rem] flex-col overflow-hidden">
        {/* Header */}
        <div className="term-titlebar flex items-center gap-2 px-5 py-3">
          <span className="h-2 w-2 rounded-full bg-secondary" />
          <span className="text-sm font-semibold text-foreground">{t('assistant.title')}</span>
          <label className="ml-auto flex items-center gap-2 text-xs text-muted" title={t('assistant.modelHint')}>
            <span className="hidden sm:inline">{t('assistant.model')}</span>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="rounded-md border border-line bg-surface/60 px-2 py-1 text-foreground outline-none focus:border-primary/50"
            >
              {MODELS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-6">
          {!started && (
            <div className="space-y-4">
              <p className="text-muted">{t('assistant.greeting')}</p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => send(t(key))}
                    className="rounded-full border border-line bg-surface/40 px-3 py-1.5 text-sm text-primary transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    {t(key)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) =>
            m.role === 'user' ? (
              <div key={i} className="flex justify-end">
                <span className="max-w-[46rem] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-primary/20 px-4 py-2.5 text-foreground">
                  {m.content}
                </span>
              </div>
            ) : (
              <div key={i} className="flex flex-col items-start">
                <span className="max-w-[46rem] whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-surface/60 px-4 py-2.5 text-foreground/90">
                  {m.content}
                  {busy && i === messages.length - 1 && (
                    <span className="ml-0.5 inline-block animate-pulse text-primary">▋</span>
                  )}
                </span>
                {m.model && (
                  <span className="mt-1 pl-1 text-[0.65rem] text-muted">
                    {t('assistant.via')} {m.model}
                  </span>
                )}
              </div>
            ),
          )}

          {error && <p style={{ color: 'var(--dot-red)' }}>{t('assistant.error')}</p>}
        </div>

        {/* Input */}
        <div className="border-t border-line/60 p-4">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder={t('assistant.placeholder')}
              aria-label={t('assistant.placeholder')}
              className="min-w-0 flex-1 rounded-lg border border-line bg-surface/40 px-4 py-2.5 text-sm text-foreground caret-primary outline-none placeholder:text-muted focus:border-primary/50"
            />
            <button
              type="button"
              onClick={() => send()}
              disabled={!input.trim() || busy}
              aria-label={t('assistant.send')}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/15 text-primary transition-colors hover:bg-primary/25 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FiSend size={16} />
            </button>
          </div>
          <p className="mt-2 text-center text-[0.65rem] text-muted">{t('assistant.disclaimer')}</p>
        </div>
      </div>
    </div>
  );
}
