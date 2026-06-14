'use client';

import Link from 'next/link';
import { useLanguage } from '../../(core)/i18n/context';
import { projects } from './projectData';
import CommandLine from '../../components/terminal/CommandLine';

export default function Projects() {
  const { language } = useLanguage();

  return (
    <div className="leading-relaxed">
      <CommandLine command="ls -l projects/">
        <div className="space-y-4 mt-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block term-box p-4 hover:border-primary/50 transition-colors"
            >
              <p className="flex flex-wrap items-baseline gap-2">
                <span className="text-muted text-xs">drwxr-xr-x</span>
                <span className="text-secondary group-hover:text-primary transition-colors">
                  ./{project.id}/
                </span>
                <span className="text-foreground font-semibold">
                  {project.title[language] || project.title.en}
                </span>
                <span className="ml-auto text-muted group-hover:text-primary transition-colors">
                  →
                </span>
              </p>
              <p className="text-muted text-sm mt-2">
                {project.description[language] || project.description.en}
              </p>
              <p className="mt-2 flex flex-wrap gap-x-2 text-xs text-foreground/70">
                {project.technologies.slice(0, 5).map((tech, ti) => (
                  <span key={ti}>
                    {tech[language] || tech.en}
                    {ti < Math.min(4, project.technologies.length - 1) && (
                      <span className="text-muted"> ·</span>
                    )}
                  </span>
                ))}
              </p>
            </Link>
          ))}
        </div>
      </CommandLine>
    </div>
  );
}
