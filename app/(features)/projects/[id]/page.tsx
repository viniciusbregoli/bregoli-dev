// app/(features)/projects/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Project, getProjectById } from '../projectData';
import { useViewMode } from '../../../(core)/view/context';
import ProjectNotFound from '../../../components/projects/ProjectNotFound';
import ProjectLoading from '../../../components/projects/ProjectLoading';
import TerminalProjectDetail from '../../../components/projects/TerminalProjectDetail';
import ClassicProjectDetail from '../../../components/projects/ClassicProjectDetail';
import RetroProjectDetail from '../../../components/retro/RetroProjectDetail';

export default function ProjectDetailPage() {
  const params = useParams();
  const { mode } = useViewMode();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const projectId = Array.isArray(params.id) ? params.id[0] : params.id;
      const projectData = getProjectById(projectId);
      if (projectData) setProject(projectData);
      setLoading(false);
    }
  }, [params.id]);

  if (loading) return <ProjectLoading />;
  if (!project) return <ProjectNotFound />;

  if (mode === 'terminal') return <TerminalProjectDetail project={project} />;
  if (mode === 'retro') return <RetroProjectDetail project={project} />;
  return <ClassicProjectDetail project={project} />;
}
