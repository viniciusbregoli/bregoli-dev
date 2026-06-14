'use client';

import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../../(core)/i18n/context';
import ExperienceCard from './experience/ExperienceCard';
import { getExperienceData } from './experience/experienceData';
import SectionTitle from '../common/SectionTitle';

// Transform only (no opacity) so the cards' `backdrop-filter` stays active
// during the staggered reveal.
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20 },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function ExperienceSection() {
  const { t, language } = useLanguage();
  const experiences = getExperienceData();

  return (
    <section id="experience" className="py-8">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle eyebrow="experience" className="mb-12">
          {t('experience.title')}
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative border-l border-line pl-8 md:pl-12 space-y-10"
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              {/* Timeline node */}
              <span className="absolute -left-[2.6rem] md:-left-[3.6rem] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
              <ExperienceCard experience={experience} currentLanguage={language} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
