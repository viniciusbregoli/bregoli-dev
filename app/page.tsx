'use client';

import { useViewMode } from './(core)/view/context';
import Terminal from './components/terminal/Terminal';
import ClassicHome from './components/home/ClassicHome';
import RetroHome from './components/retro/RetroHome';

export default function Home() {
  const { mode } = useViewMode();
  if (mode === 'terminal') return <Terminal />;
  if (mode === 'retro') return <RetroHome />;
  return <ClassicHome />;
}
