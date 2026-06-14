'use client';

import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../../(core)/i18n/context';
import SectionTitle from '../common/SectionTitle';
import EducationCard from './education/EducationCard';
import { getEducationData } from './education/educationData';

// Transform only (no opacity) so the cards' `backdrop-filter` stays active
// during the staggered reveal.
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30 },
  visible: {
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
    <section id="education" className="py-8">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle eyebrow="education" className="mb-10">
          {title}
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {educations.map((education, index) => (
            <motion.div key={index} variants={itemVariants}>
              <EducationCard education={education} currentLanguage={language} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
