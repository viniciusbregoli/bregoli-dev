'use client';

import { FiUser, FiTerminal } from 'react-icons/fi';
import { useViewMode } from '../../(core)/view/context';

export default function ViewSplash() {
  const { setMode } = useViewMode();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-6">
      <div className="panel max-w-lg w-full p-8 text-center">
        <p className="mono-label mb-3">{'// welcome'}</p>
        <h2 className="text-2xl font-bold text-foreground mb-2">How would you like to browse?</h2>
        <p className="text-muted mb-8">Pick a view — you can switch anytime from the header.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => setMode('classic')}
            className="group panel p-6 text-left hover:border-primary/50 transition-colors"
          >
            <FiUser className="w-7 h-7 text-primary mb-3" />
            <div className="font-semibold text-foreground">Recruiter</div>
            <div className="text-sm text-muted mt-1">A clean, readable portfolio.</div>
          </button>
          <button
            onClick={() => setMode('terminal')}
            className="group panel p-6 text-left hover:border-primary/50 transition-colors"
          >
            <FiTerminal className="w-7 h-7 text-primary mb-3" />
            <div className="font-semibold text-foreground">Developer</div>
            <div className="text-sm text-muted mt-1">An interactive terminal.</div>
          </button>
        </div>
      </div>
    </div>
  );
}
