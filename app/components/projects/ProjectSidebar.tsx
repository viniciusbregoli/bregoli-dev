import { FiCalendar, FiGithub, FiExternalLink } from 'react-icons/fi';
import { Project } from '../../(features)/projects/projectData';
import { Language } from '../../(core)/i18n/translations';

interface ProjectSidebarProps {
  project: Project;
  language: Language;
}

const text = {
  info: { en: 'Project Info', pt: 'Info do Projeto', de: 'Projektinfo', es: 'Info del Proyecto', zh: '项目信息' },
  type: { en: 'Project Type', pt: 'Tipo de Projeto', de: 'Projekttyp', es: 'Tipo de Proyecto', zh: '项目类型' },
  timeline: { en: 'Timeline', pt: 'Período', de: 'Zeitraum', es: 'Cronología', zh: '时间线' },
  present: { en: 'Present', pt: 'Presente', de: 'Aktuell', es: 'Actual', zh: '至今' },
  stack: { en: 'Stack', pt: 'Stack', de: 'Stack', es: 'Stack', zh: '技术栈' },
  source: { en: 'Source Code', pt: 'Código Fonte', de: 'Quellcode', es: 'Código Fuente', zh: '源代码' },
  live: { en: 'Live Preview', pt: 'Ver ao Vivo', de: 'Live-Vorschau', es: 'Vista en Vivo', zh: '在线预览' },
} as const;

export default function ProjectSidebar({ project, language }: ProjectSidebarProps) {
  return (
    <div className="panel p-8 md:sticky md:top-28">
      <h3 className="mono-label mb-8">{text.info[language]}</h3>

      <div className="space-y-7">
        {/* Project Type */}
        {project.projectType && (
          <div>
            <h4 className="mono-label text-muted mb-2">{text.type[language]}</h4>
            <p className="font-medium text-foreground">
              {project.projectType[language] || project.projectType.en}
            </p>
          </div>
        )}

        {/* Timeline */}
        {(project.startDate || project.endDate) && (
          <div>
            <h4 className="mono-label text-muted mb-2">{text.timeline[language]}</h4>
            <div className="flex items-center gap-2 font-medium text-foreground">
              <FiCalendar className="text-primary" />
              <span>
                {project.startDate}
                {project.endDate && project.endDate !== project.startDate
                  ? ` – ${project.endDate === 'Present' ? text.present[language] : project.endDate}`
                  : ''}
              </span>
            </div>
          </div>
        )}

        {/* Technologies */}
        <div>
          <h4 className="mono-label text-muted mb-3">{text.stack[language]}</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/80 border border-line"
              >
                {tech[language] || tech.en}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {project.links && Object.keys(project.links).length > 0 && (
          <div className="pt-6 border-t border-line flex flex-col gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg panel font-mono text-sm text-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                <FiGithub />
                {text.source[language]}
              </a>
            )}
            {(project.links.demo || project.links.website) && (
              <a
                href={project.links.demo || project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-background font-mono text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <FiExternalLink />
                {text.live[language]}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
