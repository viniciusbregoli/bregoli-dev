'use client';

import { motion, type Variants } from 'framer-motion';
import { Language } from '@/(core)/i18n/translations';
import { useLanguage } from '../../(core)/i18n/context';
import ProjectCard from '../../components/projects/ProjectCard';
import { projects } from './projectData';
import SectionTitle from '../../components/common/SectionTitle';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <section className="min-h-screen pt-12 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle eyebrow="projects" className="mb-12">
          {t('projects.title')}
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} language={language as Language} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
