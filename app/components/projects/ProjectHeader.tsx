'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';
import { Project } from '../../(features)/projects/projectData';
import { Language, translations } from '../../(core)/i18n/translations';

interface ProjectHeaderProps {
  project: Project;
  language: Language;
}

export default function ProjectHeader({ project, language }: ProjectHeaderProps) {
  return (
    <div className="relative bg-grid pt-12 pb-16 overflow-hidden">
      <div className="absolute top-0 right-[15%] w-96 h-96 glow-accent blur-3xl opacity-30 -z-10" />

      <div className="relative max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-primary transition-colors"
          >
            <FiChevronLeft className="group-hover:-translate-x-1 transition-transform" />
            {translations['projects.backToProjects'][language] || translations['projects.backToProjects'].en}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="mono-label mb-4">
            {`// ${translations['projects.project'][language] || translations['projects.project'].en}`}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {project.title[language] || project.title.en}
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-3xl leading-relaxed">
            {project.description[language] || project.description.en}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
