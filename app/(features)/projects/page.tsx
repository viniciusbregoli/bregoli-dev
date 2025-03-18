// app/(features)/projects/page.tsx
'use client';

import { Language } from '@/(core)/i18n/translations';
import { useLanguage } from '../../(core)/i18n/context';
import ProjectCard from '../../components/projects/projectCard';
import { projects } from './projectData';

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-2 text-blue-800 dark:text-white">
        {t('projects.title')}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-10">{t('projects.subtitle')}</p>

      <div className="grid grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            currentLanguage={language as Language}
            color={project.color}
            icon={project.icon as 'code' | 'research'}
          />
        ))}
      </div>
    </div>
  );
}
