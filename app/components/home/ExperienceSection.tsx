'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../../(core)/i18n/context';
import ExperienceCard from './experience/ExperienceCard';
import { getExperienceData } from './experience/experienceData';
import SectionTitle from '../common/SectionTitle';

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

export default function ExperienceSection() {
  const { t, language } = useLanguage();
  const experiences = getExperienceData();

  return (
    <div id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle className="text-gray-900 dark:text-white mb-24">
          <span className="text-gradient-rose">{t('experience.title')}</span>
        </SectionTitle>

        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-6 md:left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-20 dark:opacity-30 rounded-full -translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-24"
          >
            {experiences.map((experience, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-[50%] top-12 -translate-x-1/2 z-20">
                  <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                  <div className="absolute -inset-2 bg-primary/20 rounded-full animate-ping" />
                </div>

                <div className={`md:flex items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Card Content */}
                  <div className="md:w-1/2 pl-16 md:pl-0">
                    <ExperienceCard experience={experience} currentLanguage={language} />
                  </div>

                  {/* Visual/Image part (Optional but kept for balance) */}
                  <div className="hidden md:block md:w-1/2">
                    {experience.image && (
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                        className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl glass-morphism p-2"
                      >
                        <Image
                          src={experience.image}
                          alt={`${experience.company} illustration`}
                          fill
                          className="object-cover rounded-2xl transition-all duration-700"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
