'use client';

import { Project } from '../../(features)/projects/projectData';
import { Language } from '../../(core)/i18n/translations';
import { useLanguage } from '../../(core)/i18n/context';

interface ProjectAboutProps {
  project: Project;
  language: Language;
}

export default function ProjectAbout({ project, language }: ProjectAboutProps) {
  const { t } = useLanguage();

  return (
    <div className="glass-morphism rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-white/20 dark:border-white/10 transition-all duration-500 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <h2 className="text-9xl font-black select-none">ABOUT</h2>
      </div>

      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
        <span className="text-gradient-rose">{t('projects.aboutProject')}</span>
      </h2>

      <div className="prose dark:prose-invert max-w-none relative z-10">
        {project.detailedDescription ? (
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed text-xl font-medium">
            {project.detailedDescription[language] || project.detailedDescription.en}
          </p>
        ) : (
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xl font-medium">
            {project.description[language] || project.description.en}
          </p>
        )}
      </div>
    </div>
  );
}
