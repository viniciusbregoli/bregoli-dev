'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiCode, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import { Project } from '../../(features)/projects/projectData';
import { Language, translations } from '../../(core)/i18n/translations';

interface ProjectCardProps {
  project: Project;
  language: Language;
}

export default function ProjectCard({ project, language }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group panel overflow-hidden flex flex-col h-full hover:border-primary/40 transition-colors duration-300"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden border-b border-line">
        {project.gallery && project.gallery.length > 0 && (
          <Image
            src={project.gallery[0]}
            alt={project.title[language] || project.title.en || ''}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-lg panel bg-surface/80 backdrop-blur-sm text-primary">
          {project.icon === 'code' ? <FiCode className="w-5 h-5" /> : <FiBookOpen className="w-5 h-5" />}
        </div>
        <h3 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-foreground">
          {project.title[language] || project.title.en}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-muted leading-relaxed line-clamp-3 mb-5">
          {project.description[language] || project.description.en}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/80 border border-line"
            >
              {tech[language] || tech.en}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="font-mono text-xs px-2.5 py-1 rounded-md text-muted">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 font-mono text-sm text-primary">
          {translations['projects.viewProject'][language] || translations['projects.viewProject'].en}
          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
