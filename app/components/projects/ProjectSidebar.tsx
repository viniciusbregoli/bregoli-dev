'use client';

import { FiCalendar, FiGithub, FiExternalLink } from 'react-icons/fi';
import { Project } from '../../(features)/projects/projectData';
import { Language } from '../../(core)/i18n/translations';

interface ProjectSidebarProps {
  project: Project;
  language: Language;
}

export default function ProjectSidebar({ project, language }: ProjectSidebarProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
        {language === 'en'
          ? 'Project Information'
          : language === 'pt'
            ? 'Informações do Projeto'
            : 'Projektinformationen'}
      </h3>

      {/* Project Type */}
      {project.projectType && (
        <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h4 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">
            {language === 'en'
              ? 'Project Type'
              : language === 'pt'
                ? 'Tipo de Projeto'
                : 'Projekttyp'}
          </h4>
          <p className="text-gray-800 dark:text-gray-200">
            {project.projectType[language] || project.projectType.en}
          </p>
        </div>
      )}

      {/* Timeline */}
      {(project.startDate || project.endDate) && (
        <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h4 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">
            {language === 'en' ? 'Timeline' : language === 'pt' ? 'Período' : 'Zeitraum'}
          </h4>
          <div className="flex items-center text-gray-800 dark:text-gray-200">
            <FiCalendar className="mr-2 text-blue-600 dark:text-blue-400" />
            <span>
              {project.startDate}
              {project.endDate && project.endDate !== project.startDate
                ? ` - ${
                    project.endDate === 'Present'
                      ? language === 'en'
                        ? 'Present'
                        : language === 'pt'
                          ? 'Presente'
                          : 'Aktuell'
                      : project.endDate
                  }`
                : ''}
            </span>
          </div>
        </div>
      )}

      {/* Technologies */}
      <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
        <h4 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">
          {language === 'en' ? 'Technologies' : language === 'pt' ? 'Tecnologias' : 'Technologien'}
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
            >
              {tech[language] || tech.en}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      {project.links && Object.keys(project.links).length > 0 && (
        <div>
          <h4 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">
            {language === 'en' ? 'Links' : language === 'pt' ? 'Links' : 'Links'}
          </h4>
          <div className="space-y-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <FiGithub className="mr-2" />
                {language === 'en'
                  ? 'View on GitHub'
                  : language === 'pt'
                    ? 'Ver no GitHub'
                    : 'Auf GitHub ansehen'}
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <FiExternalLink className="mr-2" />
                {language === 'en' ? 'Live Demo' : language === 'pt' ? 'Demo ao Vivo' : 'Live-Demo'}
              </a>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <FiExternalLink className="mr-2" />
                {language === 'en'
                  ? 'Visit Website'
                  : language === 'pt'
                    ? 'Visitar Website'
                    : 'Website besuchen'}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
