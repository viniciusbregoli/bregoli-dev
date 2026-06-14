'use client';

import { ReactNode } from 'react';
import { useViewMode } from '../../(core)/view/context';
import TerminalChrome from './TerminalChrome';
import ClassicChrome from './ClassicChrome';
import ViewSplash from './ViewSplash';

export default function AppChrome({ children }: { children: ReactNode }) {
  const { mode, mounted, chosen } = useViewMode();

  return (
    <>
      {mode === 'terminal' ? (
        <TerminalChrome>{children}</TerminalChrome>
      ) : (
        <ClassicChrome>{children}</ClassicChrome>
      )}
      {mounted && !chosen && <ViewSplash />}
    </>
  );
}
