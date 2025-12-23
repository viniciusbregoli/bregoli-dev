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
    <div className="glass-morphism rounded-[2.5rem] p-10 shadow-2xl border border-white/20 dark:border-white/10 transition-all duration-500 md:sticky md:top-32">
      <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
        <span className="text-gradient-rose">
          {language === 'en'
            ? 'Project Info'
            : language === 'pt'
              ? 'Info do Projeto'
              : 'Projektinfo'}
        </span>
      </h3>

      <div className="space-y-8">
        {/* Project Type */}
        {project.projectType && (
          <div className="group">
            <h4 className="text-xs uppercase font-black tracking-widest text-gray-400 dark:text-gray-500 mb-3 group-hover:text-primary transition-colors">
              {language === 'en'
                ? 'Project Type'
                : language === 'pt'
                  ? 'Tipo de Projeto'
                  : 'Projekttyp'}
            </h4>
            <p className="text-lg font-bold text-gray-800 dark:text-gray-100 italic">
              {project.projectType[language] || project.projectType.en}
            </p>
          </div>
        )}

        {/* Timeline */}
        {(project.startDate || project.endDate) && (
          <div className="group">
            <h4 className="text-xs uppercase font-black tracking-widest text-gray-400 dark:text-gray-500 mb-3 group-hover:text-secondary transition-colors">
              {language === 'en' ? 'Timeline' : language === 'pt' ? 'Período' : 'Zeitraum'}
            </h4>
            <div className="flex items-center text-lg font-bold text-gray-800 dark:text-gray-100 italic">
              <FiCalendar className="mr-3 text-secondary" />
              <span>
                {project.startDate}
                {project.endDate && project.endDate !== project.startDate
                  ? ` - ${project.endDate === 'Present'
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
        <div className="group">
          <h4 className="text-xs uppercase font-black tracking-widest text-gray-400 dark:text-gray-500 mb-4 group-hover:text-accent transition-colors">
            {language === 'en' ? 'Stack' : language === 'pt' ? 'Stack' : 'Stack'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 text-primary dark:text-gray-300 text-xs font-black tracking-wider px-4 py-2 rounded-xl"
              >
                {tech[language] || tech.en}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {project.links && Object.keys(project.links).length > 0 && (
          <div className="pt-8 border-t border-gray-100 dark:border-white/5">
            <div className="flex flex-col gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl active:scale-95"
                >
                  <FiGithub className="text-lg" />
                  {language === 'en'
                    ? 'Source Code'
                    : language === 'pt'
                      ? 'Código Fonte'
                      : 'Quellcode'}
                </a>
              )}
              {(project.links.demo || project.links.website) && (
                <a
                  href={project.links.demo || project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl active:scale-95"
                >
                  <FiExternalLink className="text-lg" />
                  {language === 'en' ? 'Live Preview' : language === 'pt' ? 'Ver ao Vivo' : 'Live-Vorschau'}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
