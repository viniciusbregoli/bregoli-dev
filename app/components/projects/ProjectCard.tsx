// app/(features)/projects/projectCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiCode, FiBookOpen } from 'react-icons/fi';
import { Project } from '../../(features)/projects/projectData';
import { Language } from '../../(core)/i18n/translations';
import { getGradientByColor } from './GradientUtils';

interface ProjectCardProps {
  project: Project;
  language: Language;
}

export default function ProjectCard({ project, language }: ProjectCardProps) {
  const gradient = getGradientByColor(project.color);

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
    >
      {/* Header with gradient background */}
      <div
        className={`relative h-48 bg-gradient-to-r ${gradient.from} ${gradient.to} ${gradient.darkFrom} ${gradient.darkTo} overflow-hidden`}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-black/10"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        {/* Project Type Icon */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg transform transition-transform duration-300 group-hover:scale-110">
            {project.icon === 'code' ? (
              <FiCode className="w-6 h-6 text-white" />
            ) : (
              <FiBookOpen className="w-6 h-6 text-white" />
            )}
          </div>
        </div>

        {/* Project Image */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="absolute inset-0">
            <Image
              src={project.gallery[0]}
              alt={project.title[language] || project.title.en}
              fill
              className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {project.title[language] || project.title.en}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description[language] || project.description.en}
        </p>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full"
            >
              {tech[language] || tech.en}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* View Project Link */}
        <div className="mt-auto flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
          <span className="mr-2">
            {language === 'en'
              ? 'View Project'
              : language === 'pt'
                ? 'Ver Projeto'
                : 'Projekt ansehen'}
          </span>
          <FiExternalLink className="transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
