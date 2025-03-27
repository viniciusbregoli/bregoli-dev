// app/(features)/projects/page.tsx
'use client';

import { Language } from '@/(core)/i18n/translations';
import { useLanguage } from '../../(core)/i18n/context';
import ProjectCard from '../../components/projects/ProjectCard';
import { projects } from './projectData';
import SectionTitle from '../../components/common/SectionTitle';

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <div className="py-14 bg-gradient-to-b from-gray-50 via-slate-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle className="text-gray-800 dark:text-blue-300">
          {t('projects.title')}
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} language={language as Language} />
          ))}
        </div>
      </div>
    </div>
  );
}
