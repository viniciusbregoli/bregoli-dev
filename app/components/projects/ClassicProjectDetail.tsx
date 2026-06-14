'use client';

import { Project } from '../../(features)/projects/projectData';
import { useLanguage } from '../../(core)/i18n/context';
import ProjectHeader from './ProjectHeader';
import ProjectAbout from './ProjectAbout';
import ProjectGallery from './ProjectGallery';
import ProjectSidebar from './ProjectSidebar';

export default function ClassicProjectDetail({ project }: { project: Project }) {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      <ProjectHeader project={project} language={language} />
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <ProjectAbout project={project} language={language} />
            {project.gallery && project.gallery.length > 0 && (
              <ProjectGallery gallery={project.gallery} projectTitle={project.title} language={language} />
            )}
          </div>
          <div className="space-y-6">
            <ProjectSidebar project={project} language={language} />
          </div>
        </div>
      </div>
    </div>
  );
}
