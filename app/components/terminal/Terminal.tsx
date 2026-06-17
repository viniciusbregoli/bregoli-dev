'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../(core)/i18n/context';
import { Language } from '../../(core)/i18n/translations';
import { COMMAND_NAMES, CommandContext, resolveCommand, withTokens } from './commands';
import Cursor from './Cursor';

// Command auto-typed on first load, like a shell running its startup line.
const BOOT_COMMAND = 'whoami';

type Entry = { id: number; command: string; render: (ctx: CommandContext) => ReactNode };

// Tab-completion cycling state: the frozen suggestion list, the highlighted
// index, and the prefix the user originally typed (kept bold while cycling).
type Cycle = { list: string[]; index: number; prefix: string };

// Tappable starter commands — discoverability on desktop, no-typing nav on mobile.
const QUICK = ['help', 'ask', 'projects', 'skills', 'contact', 'cv'];

const Prompt = () => (
  <span className="text-secondary shrink-0">
    vinicius@bregoli-dev<span className="text-muted">:</span>
    <span className="text-primary">~</span>
    <span className="text-muted">$</span>
  </span>
);

export default function Terminal() {
  const { t, language, setLanguage } = useLanguage();

  const downloadCV = () => {
    const cvPaths: Partial<Record<Language, string>> = {
      en: '/CV - English.pdf',
      pt: '/CV - Portugues.pdf',
      de: '/CV - Deutsch.pdf',
      es: '/CV - Espanol.pdf',
      zh: '/CV - Chinese.pdf',
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
    downloadCV,
  };

  const idRef = useRef(1);
  // entries start empty; the boot sequence types `whoami` then commits its output.
  const [entries, setEntries] = useState<Entry[]>([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [histCursor, setHistCursor] = useState<number | null>(null);
  const [cycle, setCycle] = useState<Cycle | null>(null);

  // Boot animation: type out BOOT_COMMAND char-by-char, then run it.
  const [booting, setBooting] = useState(true);
  const [bootText, setBootText] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const trimmed = input.trim().toLowerCase();
  // After "command " we complete arguments (cat <file>, ls <folder>, man <cmd>);
  // otherwise we complete command names. Every command is completable now.
  const segments = input.replace(/^\s+/, '').split(/\s+/);
  const suggestions: string[] =
    segments.length > 1
      ? (() => {
          const cmdName = segments[0].toLowerCase();
          const cmd = resolveCommand(cmdName);
          if (!cmd?.complete) return [];
          const partial = segments[segments.length - 1].toLowerCase();
          return cmd
            .complete()
            .filter((o) => o.toLowerCase().startsWith(partial))
            .map((o) => `${cmdName} ${o}`)
            .filter((s) => s !== trimmed)
            .slice(0, 6);
        })()
      : trimmed
        ? COMMAND_NAMES.filter((n) => n.startsWith(trimmed) && n !== trimmed).slice(0, 6)
        : [];

  // Only auto-focus on devices with a fine pointer (mouse). On touch this would
  // pop the on-screen keyboard on load and after every command.
  const focusInput = () => {
    if (window.matchMedia('(pointer: fine)').matches) {
      inputRef.current?.focus({ preventScroll: true });
    }
  };

  // Run the startup typing animation once on mount.
  const commitBoot = () => {
    setEntries([
      { id: 0, command: BOOT_COMMAND, render: (c) => resolveCommand(BOOT_COMMAND)!.run(c, []) },
    ]);
    setBooting(false);
    setBootText('');
  };

  useEffect(() => {
    // Respect reduced-motion (and SSR safety): skip the animation, show output.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      commitBoot();
      return;
    }
    let i = 0;
    let runTimeout = 0;
    const tick = () => {
      i += 1;
      setBootText(BOOT_COMMAND.slice(0, i));
      if (i >= BOOT_COMMAND.length) {
        clearInterval(id);
        // Brief beat after typing, as if hitting Enter, then run it.
        runTimeout = window.setTimeout(commitBoot, 450);
      }
    };
    // The whole view (frame + content) fades in together via the CSS .view-fade,
    // so typing can start right away — it's never "outside" the window.
    const id = window.setInterval(tick, 95);
    return () => {
      clearInterval(id);
      clearTimeout(runTimeout);
    };
  }, []);

  useEffect(() => {
    if (booting) return;
    focusInput();
    // After a command runs, follow the output to the bottom so the fresh prompt
    // is always in view. rAF lets the new output lay out before we measure.
    requestAnimationFrame(() => {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    });
  }, [entries, booting]);

  const dispatch = (raw: string) => {
    const value = raw.trim();
    setInput('');
    setHistCursor(null);
    setCycle(null);
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
      if (cycle) {
        // Step the highlight through the open menu (Shift+Tab goes back).
        const dir = e.shiftKey ? -1 : 1;
        const index = (cycle.index + dir + cycle.list.length) % cycle.list.length;
        setCycle({ ...cycle, index });
        setInput(cycle.list[index]);
      } else if (suggestions.length > 0) {
        // Open the menu, highlight the first (or last with Shift+Tab).
        const index = e.shiftKey ? suggestions.length - 1 : 0;
        setCycle({ list: suggestions, index, prefix: trimmed });
        setInput(suggestions[index]);
      }
    } else if (e.key === 'Escape') {
      setCycle(null);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCycle(null);
      if (history.length === 0) return;
      const next = histCursor === null ? history.length - 1 : Math.max(0, histCursor - 1);
      setHistCursor(next);
      setInput(history[next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCycle(null);
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
    <div className="space-y-6 leading-relaxed min-h-[60vh]" onClick={focusInput}>
      <p className="text-muted text-sm">
        {t('terminal.welcome')} {withTokens(t('terminal.helpHint'))}
      </p>

      {entries.map((entry) => {
        const output = entry.render(ctx);
        return (
          <div key={entry.id} className="term-entry">
            <p className="flex flex-wrap items-baseline gap-x-2">
              <Prompt />
              <span className="text-foreground">{entry.command}</span>
            </p>
            {output && <div className="mt-3">{output}</div>}
          </div>
        );
      })}

      {/* Boot typing line — shown only while the startup command types itself. */}
      {booting && (
        <p className="flex flex-wrap items-baseline gap-x-2">
          <Prompt />
          <span className="text-foreground">{bootText}</span>
          <Cursor />
        </p>
      )}

      {/* Live prompt */}
      <div className={booting ? 'hidden' : undefined}>
        <div className="flex items-baseline gap-x-2">
          <Prompt />
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setCycle(null);
              setInput(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            aria-label="terminal input"
            className="flex-1 bg-transparent outline-none text-foreground caret-primary"
          />
        </div>

        {(cycle ? cycle.list : suggestions).length > 0 && (
          <div className="mt-2 space-y-0.5">
            {(cycle ? cycle.list : suggestions).map((name, i) => {
              const cmd = resolveCommand(name);
              const boldLen = cycle ? cycle.prefix.length : trimmed.length;
              const selected = cycle?.index === i;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => dispatch(name)}
                  className={`flex w-full items-baseline gap-3 rounded px-1 py-0.5 text-left text-sm transition-colors ${
                    selected ? 'bg-primary/20' : 'hover:bg-primary/10'
                  }`}
                >
                  <span className="w-36 shrink-0">
                    <span className="font-semibold text-foreground">{name.slice(0, boldLen)}</span>
                    <span className="text-muted">{name.slice(boldLen)}</span>
                  </span>
                  {cmd?.descriptionKey && (
                    <span className="italic" style={{ color: 'var(--dot-yellow)' }}>
                      ({t(cmd.descriptionKey)})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {!trimmed && (
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-muted">try:</span>
            {QUICK.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => dispatch(name)}
                className="px-2.5 py-1 rounded-md border border-line text-primary hover:bg-primary/10 transition-colors"
              >
                {name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div ref={bottomRef} />
    </div>
  );
}
