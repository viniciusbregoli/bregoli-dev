'use client';

import { Project } from '../../(features)/projects/projectData';
import { Language } from '../../(core)/i18n/translations';

interface ProjectAboutProps {
  project: Project;
  language: Language;
}

export default function ProjectAbout({ project, language }: ProjectAboutProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-300">
        {language === 'en'
          ? 'About this Project'
          : language === 'pt'
            ? 'Sobre este Projeto'
            : 'Über dieses Projekt'}
      </h2>
      <div className="prose dark:prose-invert max-w-none">
        {project.detailedDescription ? (
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {project.detailedDescription[language] || project.detailedDescription.en}
          </p>
        ) : (
          <p className="text-gray-700 dark:text-gray-300">
            {project.description[language] || project.description.en}
          </p>
        )}
      </div>
    </div>
  );
}
