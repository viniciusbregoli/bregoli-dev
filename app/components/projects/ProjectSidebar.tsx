'use client';

import { FiCalendar, FiGithub, FiExternalLink } from 'react-icons/fi';
import { Project } from '../../(features)/projects/projectData';
import { Language } from '../../(core)/i18n/translations';
import { useLanguage } from '../../(core)/i18n/context';

interface ProjectSidebarProps {
  project: Project;
  language: Language;
}

export default function ProjectSidebar({ project, language }: ProjectSidebarProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
        {t('projects.projectInfo')}
      </h3>

      {/* Project Type */}
      {project.projectType && (
        <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h4 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">
            {t('projects.projectType')}
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
            {t('projects.timeline')}
          </h4>
          <div className="flex items-center text-gray-800 dark:text-gray-200">
            <FiCalendar className="mr-2 text-blue-600 dark:text-blue-400" />
            <span>
              {project.startDate}
              {project.endDate && project.endDate !== project.startDate
                ? ` - ${project.endDate === 'Present' ? t('time.present') : project.endDate}`
                : ''}
            </span>
          </div>
        </div>
      )}

      {/* Technologies */}
      <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
        <h4 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">
          {t('projects.technologies')}
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      {project.links && Object.keys(project.links).length > 0 && (
        <div>
          <h4 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">
            {t('projects.links')}
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
                {t('projects.viewOnGithub')}
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
                {t('projects.liveDemo')}
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
                {t('projects.visitWebsite')}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
