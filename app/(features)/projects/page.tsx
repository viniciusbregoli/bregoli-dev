'use client';

import { useViewMode } from '../../(core)/view/context';
import TerminalProjectList from '../../components/projects/TerminalProjectList';
import ClassicProjectList from '../../components/projects/ClassicProjectList';
import RetroProjects from '../../components/retro/RetroProjects';

export default function Projects() {
  const { mode } = useViewMode();
  if (mode === 'terminal') return <TerminalProjectList />;
  if (mode === 'retro') return <RetroProjects />;
  return <ClassicProjectList />;
}
