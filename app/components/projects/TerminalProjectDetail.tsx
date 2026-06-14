'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiChevronLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import { Project } from '../../(features)/projects/projectData';
import { useLanguage } from '../../(core)/i18n/context';
import CommandLine from '../terminal/CommandLine';

export default function TerminalProjectDetail({ project }: { project: Project }) {
  const { language, t } = useLanguage();
  const body = project.detailedDescription || project.description;
  const links = project.links ?? {};
  const liveUrl = links.demo || links.website;

  return (
    <div className="leading-relaxed space-y-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
      >
        <FiChevronLeft /> cd ../
      </Link>

      <CommandLine command={`cat projects/${project.id}.md`}>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl text-primary font-semibold">
              <span className="text-muted"># </span>
              {project.title[language] || project.title.en}
            </h1>
            <p className="text-muted mt-1">{project.description[language] || project.description.en}</p>
          </div>

          <div>
            <p className="text-secondary mb-1">## {t('projects.aboutProject')}</p>
            <p className="text-foreground/90 whitespace-pre-line">{body[language] || body.en}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {project.projectType && (
              <p className="text-muted">
                <span className="text-secondary">type</span> ={' '}
                <span className="text-foreground/90">{project.projectType[language] || project.projectType.en}</span>
              </p>
            )}
            {(project.startDate || project.endDate) && (
              <p className="text-muted">
                <span className="text-secondary">timeline</span> ={' '}
                <span className="text-foreground/90">
                  {project.startDate}
                  {project.endDate && project.endDate !== project.startDate ? ` – ${project.endDate}` : ''}
                </span>
              </p>
            )}
          </div>

          <div>
            <p className="text-secondary mb-1">## stack</p>
            <p className="flex flex-wrap gap-x-2 text-foreground/80">
              {project.technologies.map((tech, i) => (
                <span key={i}>
                  {tech[language] || tech.en}
                  {i < project.technologies.length - 1 && <span className="text-muted"> ·</span>}
                </span>
              ))}
            </p>
          </div>

          {(links.github || liveUrl) && (
            <div className="flex flex-wrap gap-3">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm term-box px-4 py-2 text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <FiGithub /> source
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-primary text-background font-semibold hover:opacity-90 transition-opacity"
                >
                  <FiExternalLink /> live
                </a>
              )}
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div>
              <p className="text-secondary mb-2">## gallery</p>
              <div className={`grid gap-4 ${project.gallery.length > 1 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                {project.gallery.map((image, i) => (
                  <div key={i} className="term-box overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title[language] || project.title.en} ${i + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CommandLine>
    </div>
  );
}
