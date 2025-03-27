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
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-blue-300">
        {t('projects.aboutProject')}
      </h2>
      <div className="prose dark:prose-invert max-w-none">
        {project.detailedDescription ? (
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
            {project.detailedDescription[language] || project.detailedDescription.en}
          </p>
        ) : (
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.description[language] || project.description.en}
          </p>
        )}
      </div>
    </div>
  );
}
