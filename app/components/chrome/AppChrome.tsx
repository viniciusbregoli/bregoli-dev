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
      {/* Persistent wallpaper — stays put while only the foreground swaps. */}
      <div className="bg-aurora fixed inset-0 -z-20" aria-hidden="true" />
      <div className="bg-grid fixed inset-0 -z-10" aria-hidden="true" />

      {/* The `key` remounts the view on switch so the CSS fade replays. CSS (not
          JS) so the opacity:0 start paints on the first frame — no flash of
          settled content before it animates. */}
      <div key={mode} className="view-fade">
        {mode === 'terminal' ? (
          <TerminalChrome>{children}</TerminalChrome>
        ) : (
          <ClassicChrome>{children}</ClassicChrome>
        )}
      </div>

      {mounted && !chosen && <ViewSplash />}
    </>
  );
}
