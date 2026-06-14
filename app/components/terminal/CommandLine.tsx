import { ReactNode } from 'react';

interface CommandLineProps {
  /** The command typed after the prompt, e.g. "cat experience.md". */
  command: string;
  /** Rendered output below the command. */
  children?: ReactNode;
  /** Shorten the prompt to just "$" (used in nested contexts). */
  compact?: boolean;
  className?: string;
}

/**
 * Renders a shell prompt line — `user@host:~$ command` — followed by its
 * output. The building block of the terminal-styled pages.
 */
export default function CommandLine({ command, children, compact, className }: CommandLineProps) {
  return (
    <div className={className}>
      <p className="flex flex-wrap items-baseline gap-x-2">
        {!compact && (
          <span className="text-secondary">
            vinicius@bregoli-dev<span className="text-muted">:</span>
            <span className="text-primary">~</span>
          </span>
        )}
        <span className="text-muted">$</span>
        <span className="text-foreground">{command}</span>
      </p>
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
