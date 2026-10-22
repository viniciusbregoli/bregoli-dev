'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '../../(core)/i18n/context';
import { SUGGESTIONS, useAssistantChat } from '../chat/useAssistantChat';
import RetroWindow from './RetroWindow';

/** The assistant as an AIM / MSN Messenger conversation window. */
export default function RetroChat() {
  const { t } = useLanguage();
  const { messages, input, setInput, busy, error, send, started } = useAssistantChat();
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, busy]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <RetroWindow title={t('retro.imTitle')} sunken={false}>
      <p className="mb-2" style={{ fontSize: 13 }}>
        <span style={{ color: '#00aa00' }} aria-hidden="true">
          ●
        </span>{' '}
        {t('retro.buddyOnline')}
      </p>

      <div ref={logRef} className="retro-sunken retro-im-log" aria-live="polite">
        {!started && (
          <>
            <p>
              <span className="retro-im-buddy">viniGPT:</span> {t('assistant.greeting')}
            </p>
            <p className="flex flex-wrap gap-2 mt-2">
              {SUGGESTIONS.map((key) => (
                <button
                  key={key}
                  type="button"
                  className="retro-btn retro-chip"
                  onClick={() => send(t(key))}
                >
                  {t(key)}
                </button>
              ))}
            </p>
          </>
        )}

        {messages.map((m, i) => (
          <p key={i}>
            {m.role === 'user' ? (
              <span className="retro-im-me">{t('retro.guest')}:</span>
            ) : (
              <span className="retro-im-buddy">viniGPT:</span>
            )}{' '}
            {m.content}
            {busy && m.role === 'assistant' && i === messages.length - 1 && (
              <span className="retro-blink" aria-hidden="true">
                ▌
              </span>
            )}
          </p>
        ))}

        {error && (
          <p className="retro-field-error" role="alert">
            {t('assistant.error')}
          </p>
        )}
      </div>

      <div className="mt-2 flex gap-2 items-stretch">
        <textarea
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={t('assistant.placeholder')}
          aria-label={t('assistant.placeholder')}
          className="retro-input flex-1 resize-none"
        />
        <button
          type="button"
          className="retro-btn"
          onClick={() => send()}
          disabled={!input.trim() || busy}
        >
          {t('assistant.send')}
        </button>
      </div>
      <p className="mt-1 text-center" style={{ fontSize: 11, color: '#404040' }}>
        {t('assistant.disclaimer')}
      </p>
    </RetroWindow>
  );
}
