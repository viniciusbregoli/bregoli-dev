'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';
import { Project } from '../../(features)/projects/projectData';
import { Language, translations } from '../../(core)/i18n/translations';

interface ProjectHeaderProps {
  project: Project;
  language: Language;
  gradient: {
    from: string;
    to: string;
    darkFrom: string;
    darkTo: string;
  };
}

export default function ProjectHeader({ project, language, gradient }: ProjectHeaderProps) {
  return (
    <div className={`relative min-h-[50vh] flex items-center bg-gradient-to-br ${gradient.from} ${gradient.to} pt-24 overflow-hidden`}>
      {/* Dynamic background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-white/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-black/5 rounded-full blur-[80px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center text-white bg-white/10 backdrop-blur-md hover:bg-white/20 px-6 py-3 rounded-2xl font-bold transition-all duration-300 border border-white/20 shadow-xl"
          >
            <FiChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {translations['projects.backToProjects'][language] || translations['projects.backToProjects'].en}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-black uppercase tracking-widest mb-6">
            {translations['projects.project'][language] || translations['projects.project'].en}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            {project.title[language] || project.title.en}
          </h1>
          <p className="text-white/80 text-xl md:text-2xl max-w-4xl leading-relaxed font-medium">
            {project.description[language] || project.description.en}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
