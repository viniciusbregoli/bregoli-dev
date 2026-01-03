'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../(core)/i18n/context';
import SectionTitle from '../common/SectionTitle';
import EducationCard from './education/EducationCard';
import { getEducationData } from './education/educationData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function EducationSection() {
  const { language, t } = useLanguage();
  const educations = getEducationData();

  const title = t('education.title');

  return (
    <div id="education" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle className="text-gray-900 dark:text-white mb-20">
          <span className="text-gradient-rose">{title}</span>
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {educations.map((education, index) => (
            <motion.div key={index} variants={itemVariants}>
              <EducationCard education={education} currentLanguage={language} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
