'use client';

import { useEffect, useState } from 'react';
import { Language } from '../../(core)/i18n/translations';
import { DEFAULT_MODEL } from '../../(core)/assistant/models';
import { streamChat } from '../assistant/streamChat';

/**
 * One-shot answer for the terminal `ask` command. Fires the request on mount
 * and streams the reply into its own state — `ask` is an action command, so
 * the terminal renders this element once and React keeps it mounted, letting
 * the stream run to completion. (No fire-once ref: that breaks React Strict
 * Mode's mount/unmount/mount; the abort on cleanup handles the dev double-run.)
 */
export default function ChatAnswer({
  question,
  language,
  errorText,
}: {
  question: string;
  language: Language;
  errorText: string;
}) {
  const [text, setText] = useState('');
  const [status, setStatus] = useState<'streaming' | 'done' | 'error'>('streaming');

  useEffect(() => {
    const controller = new AbortController();
    streamChat({
      messages: [{ role: 'user', content: question }],
      language,
      model: DEFAULT_MODEL,
      onToken: setText,
      signal: controller.signal,
    })
      .then(() => setStatus('done'))
      .catch((err) => {
        if (err?.name !== 'AbortError') setStatus('error');
      });
    return () => controller.abort();
  }, [question, language]);

  if (status === 'error') {
    return <p style={{ color: 'var(--dot-red)' }}>{errorText}</p>;
  }

  return (
    <p className="text-foreground/90 whitespace-pre-wrap">
      {text}
      {status === 'streaming' && <span className="text-primary animate-pulse">▋</span>}
    </p>
  );
}
