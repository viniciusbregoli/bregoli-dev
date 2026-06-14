'use client';

import { FiUser, FiTerminal } from 'react-icons/fi';
import { useViewMode } from '../../(core)/view/context';
import { cn } from '../../(core)/utils/cn';

export default function ViewModeToggle() {
  const { mode, setMode } = useViewMode();

  return (
    <div className="flex items-center rounded-full border border-line overflow-hidden">
      <button
        onClick={() => setMode('classic')}
        title="Recruiter view"
        aria-label="Switch to recruiter view"
        className={cn(
          'flex items-center justify-center h-9 w-9 transition-colors',
          mode === 'classic' ? 'bg-primary/15 text-primary' : 'text-muted hover:text-foreground',
        )}
      >
        <FiUser size={16} />
      </button>
      <button
        onClick={() => setMode('terminal')}
        title="Developer / terminal view"
        aria-label="Switch to terminal view"
        className={cn(
          'flex items-center justify-center h-9 w-9 transition-colors',
          mode === 'terminal' ? 'bg-primary/15 text-primary' : 'text-muted hover:text-foreground',
        )}
      >
        <FiTerminal size={16} />
      </button>
    </div>
  );
}
