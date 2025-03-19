// app/(features)/projects/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Project, getProjectById } from '../projectData';
import { useLanguage } from '../../../(core)/i18n/context';
import ProjectHeader from '../../../components/projects/ProjectHeader';
import ProjectAbout from '../../../components/projects/ProjectAbout';
import ProjectGallery from '../../../components/projects/ProjectGallery';
import ProjectSidebar from '../../../components/projects/ProjectSidebar';
import ProjectNotFound from '../../../components/projects/ProjectNotFound';
import ProjectLoading from '../../../components/projects/ProjectLoading';
import { getGradientByColor } from '../../../components/projects/GradientUtils';

export default function ProjectDetailPage() {
  const params = useParams();
  const { language } = useLanguage();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const projectId = Array.isArray(params.id) ? params.id[0] : params.id;
      const projectData = getProjectById(projectId);

      if (projectData) {
        setProject(projectData);
      }
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return <ProjectLoading />;
  }

  if (!project) {
    return <ProjectNotFound language={language} />;
  }

  // Get gradient for header based on project color
  const gradient = getGradientByColor(project.color);

  return (
    <div>
      <ProjectHeader project={project} language={language} gradient={gradient} />
      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <ProjectAbout project={project} language={language} />

            {/* Image Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <ProjectGallery
                gallery={project.gallery}
                projectTitle={project.title}
                language={language}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <ProjectSidebar project={project} language={language} />
          </div>
        </div>
      </div>
    </div>
  );
}
