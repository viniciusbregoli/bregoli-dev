'use client';

import { motion } from 'framer-motion';
import { Language } from '@/(core)/i18n/translations';
import { useLanguage } from '../../(core)/i18n/context';
import ProjectCard from '../../components/projects/ProjectCard';
import { projects } from './projectData';
import SectionTitle from '../../components/common/SectionTitle';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10 animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle className="text-gray-900 dark:text-white mb-20 text-center">
          <span className="text-gradient-rose font-black text-5xl md:text-7xl">
            {t('projects.title')}
          </span>
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} language={language as Language} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
