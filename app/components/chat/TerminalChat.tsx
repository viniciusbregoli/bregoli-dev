'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '../../(core)/i18n/context';
import { MODELS } from '../../(core)/assistant/models';
import { SUGGESTIONS, useAssistantChat } from './useAssistantChat';

// "viniGPT" wordmark (ANSI Shadow figlet), OpenCode-style hero logo.
const WORDMARK = `██╗   ██╗██╗███╗   ██╗██╗ ██████╗ ██████╗ ████████╗
██║   ██║██║████╗  ██║██║██╔════╝ ██╔══██╗╚══██╔══╝
██║   ██║██║██╔██╗ ██║██║██║  ███╗██████╔╝   ██║
╚██╗ ██╔╝██║██║╚██╗██║██║██║   ██║██╔═══╝    ██║
 ╚████╔╝ ██║██║ ╚████║██║╚██████╔╝██║        ██║
  ╚═══╝  ╚═╝╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚═╝        ╚═╝`;

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
    <div className="flex min-h-[62vh] flex-col text-sm">
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
                <div key={i}>
                  <p className="whitespace-pre-wrap pl-4 text-foreground/90">
                    {m.content}
                    {busy && i === messages.length - 1 && (
                      <span className="ml-0.5 inline-block animate-pulse text-primary">▋</span>
                    )}
                  </p>
                  {m.model && (
                    <p className="pl-4 text-[0.7rem] text-muted">
                      {t('assistant.via')} {m.model}
                    </p>
                  )}
                </div>
              ),
            )}
            {error && (
              <p className="pl-4" style={{ color: 'var(--dot-red)' }}>
                {t('assistant.error')}
              </p>
            )}
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-6 py-10 text-center">
            <pre
              aria-hidden="true"
              className="max-w-full overflow-x-auto leading-none text-[0.5rem] sm:text-xs md:text-sm"
              style={{
                backgroundImage: 'linear-gradient(90deg, var(--muted), var(--foreground))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {WORDMARK}
            </pre>
            <p className="max-w-md text-muted">{t('assistant.greeting')}</p>
          </div>
        )}
      </div>

      {/* Input box — OpenCode-style left accent bar */}
      <div className="mt-4">
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

        {/* Colored starter suggestions (hero only) */}
        {!started && (
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
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

        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs text-muted">
          <span>{t('assistant.terminalHint')}</span>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-1.5" title={t('assistant.modelHint')}>
              <span className="text-secondary">{t('assistant.model').toLowerCase()}:</span>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="border-b border-line bg-transparent text-foreground outline-none focus:border-primary"
              >
                {MODELS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.id}
                  </option>
                ))}
              </select>
            </label>
            <span>bregoli-sh v1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
