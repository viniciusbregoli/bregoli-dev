'use client';

import { ReactNode } from 'react';
import { useViewMode } from '../../(core)/view/context';
import TerminalChrome from './TerminalChrome';
import ClassicChrome from './ClassicChrome';
import RetroChrome from '../retro/RetroChrome';
import ParticleDrift from '../ui/particle-drift';

export default function AppChrome({ children }: { children: ReactNode }) {
  const { mode } = useViewMode();

  return (
    <div className="studio-app relative isolate min-h-screen">
      {mode === 'retro' ? (
        <div className="retro-bg fixed inset-0 -z-20" aria-hidden="true" />
      ) : (
        <ParticleDrift className="studio-particles fixed inset-0" speed={0.7} density={2.5} size={1.5} length={1.8} />
      )}
      <div key={mode} className="relative view-fade">
        {mode === 'terminal' ? (
          <TerminalChrome>{children}</TerminalChrome>
        ) : mode === 'retro' ? (
          <RetroChrome>{children}</RetroChrome>
        ) : (
          <ClassicChrome>{children}</ClassicChrome>
        )}
      </div>
    </div>
  );
}
