'use client';

import { useViewMode } from '../../(core)/view/context';
import TerminalProjectList from '../../components/projects/TerminalProjectList';
import ClassicProjectList from '../../components/projects/ClassicProjectList';

export default function Projects() {
  const { mode } = useViewMode();
  return mode === 'terminal' ? <TerminalProjectList /> : <ClassicProjectList />;
}
