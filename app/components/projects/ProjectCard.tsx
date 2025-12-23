'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiCode, FiBookOpen, FiArrowRight } from 'react-icons/fi';
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
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group block relative glass-morphism rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20 dark:border-white/10 transition-all duration-500 h-full flex flex-col"
      >
        {/* Header/Image Section */}
        <div className="relative h-64 overflow-hidden">
          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-10`}
          />

          {/* Decorative shapes */}
          <div className="absolute inset-0 z-20 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          </div>

          {/* Project Image */}
          {project.gallery && project.gallery.length > 0 && (
            <Image
              src={project.gallery[0]}
              alt={project.title[language] || project.title.en}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}

          {/* Project Type Icon */}
          <div className="absolute top-6 right-6 z-30">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 shadow-xl group-hover:rotate-12 transition-transform duration-500">
              {project.icon === 'code' ? (
                <FiCode className="w-6 h-6 text-white" />
              ) : (
                <FiBookOpen className="w-6 h-6 text-white" />
              )}
            </div>
          </div>

          {/* Title on Image Overlay */}
          <div className="absolute bottom-6 left-8 z-30">
            <h3 className="text-3xl font-bold text-white drop-shadow-lg">
              {project.title[language] || project.title.en}
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col flex-grow">
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3 text-lg">
            {project.description[language] || project.description.en}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="bg-primary/5 dark:bg-white/5 backdrop-blur-sm border border-primary/10 dark:border-white/10 text-primary dark:text-gray-300 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full"
              >
                {tech[language] || tech.en}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-xs font-bold px-4 py-2 rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Action Link */}
          <div className="flex items-center text-primary font-bold text-lg group/link">
            <span className="mr-3">
              {language === 'en'
                ? 'View Case Study'
                : language === 'pt'
                  ? 'Ver Detalhes'
                  : 'Details ansehen'}
            </span>
            <div className="bg-primary/10 p-2 rounded-full group-hover/link:bg-primary group-hover/link:text-white transition-all duration-300">
              <FiArrowRight />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
