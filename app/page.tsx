'use client';

import { useViewMode } from './(core)/view/context';
import Terminal from './components/terminal/Terminal';
import ClassicHome from './components/home/ClassicHome';

export default function Home() {
  const { mode } = useViewMode();
  return mode === 'terminal' ? <Terminal /> : <ClassicHome />;
}
