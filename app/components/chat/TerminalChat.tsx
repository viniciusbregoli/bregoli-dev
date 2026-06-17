'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '../../(core)/i18n/context';
import { MODELS } from '../../(core)/assistant/models';
import { SUGGESTIONS, useAssistantChat } from './useAssistantChat';

// Distinct accent colors for the starter words (à la OpenCode's colored options).
const STARTER_COLORS = ['var(--primary)', 'var(--secondary)', 'var(--dot-yellow)', 'var(--foreground)'];

export default function TerminalChat() {
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
  }, [started]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="flex flex-1 min-h-[62vh] flex-col text-sm">
      {/* Hero wordmark (empty) OR the REPL-style conversation */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        {started ? (
          <div className="space-y-5 pb-6">
            {messages.map((m, i) =>
              m.role === 'user' ? (
                <p key={i} className="flex gap-2">
                  <span className="text-primary">❯</span>
                  <span className="whitespace-pre-wrap text-foreground">{m.content}</span>
                </p>
              ) : (
                <p key={i} className="whitespace-pre-wrap pl-4 text-foreground/90">
                  {m.content}
                  {busy && i === messages.length - 1 && (
                    <span className="ml-0.5 inline-block animate-pulse text-primary">▋</span>
                  )}
                </p>
              ),
            )}
            {error && (
              <p className="pl-4" style={{ color: 'var(--dot-red)' }}>
                {t('assistant.error')}
              </p>
            )}
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-8 py-10 text-center">
            <h1
              aria-label="viniGPT"
              className="select-none text-3xl leading-none tracking-tight text-foreground sm:text-5xl md:text-6xl"
              style={{
                fontFamily: 'var(--font-pixel)',
                textShadow: '0.09em 0.09em 0 var(--background)',
              }}
            >
              viniGPT
            </h1>
            <p className="max-w-md text-muted">{t('assistant.greeting')}</p>
          </div>
        )}
      </div>

      {/* Bottom dock: starters + meta on top, input box pinned at the very bottom. */}
      <div className="mt-4 space-y-3">
        {/* Starter suggestions (hero only) on the left, model selector on the right. */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          {!started && (
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {SUGGESTIONS.map((key, idx) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => send(t(key))}
                  className="transition-opacity hover:opacity-70"
                  style={{ color: STARTER_COLORS[idx % STARTER_COLORS.length] }}
                >
                  {t(key)}
                </button>
              ))}
            </div>
          )}

          <label
            className="ml-auto flex items-center gap-2 text-sm text-muted"
            title={t('assistant.modelHint')}
          >
            <span className="text-secondary">{t('assistant.model').toLowerCase()}:</span>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="cursor-pointer rounded-md border border-line bg-surface/40 px-3 py-2 text-foreground outline-none transition-colors hover:border-primary/50 focus:border-primary"
            >
              {MODELS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.id}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Input box — OpenCode-style left accent bar, at the very bottom */}
        <div className="flex items-center gap-3 rounded-md border border-line border-l-2 border-l-primary bg-surface/30 px-4 py-3">
          <span className="text-primary">❯</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={t('assistant.terminalPlaceholder')}
            aria-label={t('assistant.placeholder')}
            spellCheck={false}
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent text-foreground caret-primary outline-none placeholder:text-muted"
          />
        </div>
      </div>
    </div>
  );
}
