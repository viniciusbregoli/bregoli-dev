'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../(core)/i18n/context';
import { useTheme } from '../../(core)/theme/context';
import { Language } from '../../(core)/i18n/translations';
import { COMMAND_NAMES, CommandContext, resolveCommand, withTokens } from './commands';

type Entry = { id: number; command: string; render: (ctx: CommandContext) => ReactNode };

function commonPrefix(values: string[]): string {
  if (values.length === 0) return '';
  return values.reduce((prefix, value) => {
    let i = 0;
    while (i < prefix.length && i < value.length && prefix[i] === value[i]) i++;
    return prefix.slice(0, i);
  });
}

const Prompt = () => (
  <span className="text-secondary shrink-0">
    vinicius@bregoli-dev<span className="text-muted">:</span>
    <span className="text-primary">~</span>
    <span className="text-muted">$</span>
  </span>
);

export default function Terminal() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const downloadCV = () => {
    const cvPaths: Partial<Record<Language, string>> = {
      en: '/CV - English.pdf',
      pt: '/CV - Portugues.pdf',
      de: '/CV - Deutsch.pdf',
    };
    const link = document.createElement('a');
    link.href = cvPaths[language] || cvPaths.en || '';
    link.setAttribute('download', `Vinicius_Bregoli_CV_${language.toUpperCase()}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const ctx: CommandContext = {
    t,
    language,
    setLanguage,
    theme,
    setTheme: (next) => {
      if (next !== theme) toggleTheme();
    },
    downloadCV,
  };

  const idRef = useRef(1);
  // Auto-print whoami on first load so there's content + the help hint.
  const [entries, setEntries] = useState<Entry[]>(() => [
    { id: 0, command: 'whoami', render: (c) => resolveCommand('whoami')!.run(c, []) },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [histCursor, setHistCursor] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const trimmed = input.trim().toLowerCase();
  const suggestions = trimmed
    ? COMMAND_NAMES.filter((n) => n.startsWith(trimmed) && n !== trimmed).slice(0, 6)
    : [];

  useEffect(() => {
    inputRef.current?.focus({ preventScroll: true });
    // After a command runs, follow the output to the bottom so the fresh prompt
    // is always in view. rAF lets the new output lay out before we measure.
    requestAnimationFrame(() => {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    });
  }, [entries]);

  const dispatch = (raw: string) => {
    const value = raw.trim();
    setInput('');
    setHistCursor(null);
    if (!value) {
      setEntries((e) => [...e, { id: idRef.current++, command: '', render: () => null }]);
      return;
    }
    setHistory((h) => [...h, value]);

    // Resolve the whole string first (handles multi-word aliases like "ls projects").
    let cmd = resolveCommand(value);
    let args: string[] = [];
    if (!cmd) {
      const parts = value.split(/\s+/);
      cmd = resolveCommand(parts[0]);
      args = parts.slice(1);
    }

    if (cmd?.name === 'clear') {
      setEntries([]);
      return;
    }

    let render: (c: CommandContext) => ReactNode;
    if (!cmd) {
      const notFound = (
        <p className="text-muted">
          command not found: <span className="text-foreground">{value.split(/\s+/)[0]}</span> — type{' '}
          <span className="text-primary">help</span>
        </p>
      );
      render = () => notFound;
    } else if (cmd.pure) {
      // Re-run on every render so the output follows the current language/theme.
      const pureCmd = cmd;
      render = (rc) => pureCmd.run(rc, args);
    } else {
      // Action command: run once now (the side effect), then show its result.
      const node = cmd.run(ctx, args);
      render = () => node;
    }

    setEntries((e) => [...e, { id: idRef.current++, command: value, render }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(input);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length === 1) setInput(suggestions[0]);
      else if (suggestions.length > 1) setInput(commonPrefix(suggestions));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const next = histCursor === null ? history.length - 1 : Math.max(0, histCursor - 1);
      setHistCursor(next);
      setInput(history[next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histCursor === null) return;
      const next = histCursor + 1;
      if (next >= history.length) {
        setHistCursor(null);
        setInput('');
      } else {
        setHistCursor(next);
        setInput(history[next]);
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setEntries([]);
    }
  };

  return (
    <div
      className="space-y-6 leading-relaxed min-h-[60vh]"
      onClick={() => inputRef.current?.focus()}
    >
      <p className="text-muted text-sm">
        {t('terminal.welcome')} {withTokens(t('terminal.helpHint'))}
      </p>

      {entries.map((entry) => {
        const output = entry.render(ctx);
        return (
          <div key={entry.id}>
            <p className="flex flex-wrap items-baseline gap-x-2">
              <Prompt />
              <span className="text-foreground">{entry.command}</span>
            </p>
            {output && <div className="mt-3">{output}</div>}
          </div>
        );
      })}

      {/* Live prompt */}
      <div>
        <div className="flex items-baseline gap-x-2">
          <Prompt />
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            aria-label="terminal input"
            className="flex-1 bg-transparent outline-none text-foreground caret-primary"
          />
        </div>

        {suggestions.length > 0 && (
          <div className="mt-2 term-box bg-surface inline-block min-w-[16rem] py-1">
            {suggestions.map((name) => {
              const cmd = resolveCommand(name);
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => dispatch(name)}
                  className="flex w-full gap-3 px-3 py-1 text-left text-sm hover:bg-primary/10 transition-colors"
                >
                  <span className="text-primary w-28 shrink-0">{name}</span>
                  <span className="text-muted">{cmd?.description}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div ref={bottomRef} />
    </div>
  );
}
