'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ViewMode = 'classic' | 'terminal';

type ViewModeContextType = {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  /** Whether the visitor has explicitly chosen a mode (controls the first-visit splash). */
  chosen: boolean;
  /** False during SSR / first paint; gate mode-dependent layout on this to avoid hydration mismatch. */
  mounted: boolean;
};

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

const STORAGE_KEY = 'viewMode';

export function ViewModeProvider({ children }: { children: ReactNode }) {
  // Default to the HR-friendly classic view; this is also what SSR renders.
  const [mode, setModeState] = useState<ViewMode>('classic');
  const [chosen, setChosen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'classic' || stored === 'terminal') {
      setModeState(stored);
      setChosen(true);
    }
    setMounted(true);
  }, []);

  const setMode = (next: ViewMode) => {
    setModeState(next);
    setChosen(true);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <ViewModeContext.Provider value={{ mode, setMode, chosen, mounted }}>
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const context = useContext(ViewModeContext);
  if (context === undefined) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
}
