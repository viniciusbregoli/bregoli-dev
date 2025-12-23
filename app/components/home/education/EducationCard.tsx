'use client';

import { motion } from 'framer-motion';
import { EducationType } from './educationData';
import { Language } from '../../../(core)/i18n/translations';
import EducationLogo from './EducationLogo';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

interface EducationCardProps {
  education: EducationType;
  currentLanguage: Language;
}

export default function EducationCard({ education, currentLanguage }: EducationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col md:flex-row items-center gap-8 glass-morphism rounded-[2.5rem] p-8 shadow-2xl border border-white/20 dark:border-white/10 transition-all duration-500 overflow-hidden relative group"
    >
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />

      <div className="relative z-10">
        <EducationLogo logo={education.logo} institution={education.institution} />
      </div>

      <div className="flex-grow space-y-4 relative z-10 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
            {education.institution}
          </h3>
          <p className="text-xl font-semibold text-gradient-rose mt-1 inline-block">
            {education.program[currentLanguage] || education.program.en || ''}
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-bold uppercase tracking-wider">
          <div className="flex items-center px-4 py-2 rounded-full bg-primary/5 text-primary border border-primary/10">
            <FiCalendar className="mr-2" />
            {education.period[currentLanguage] || education.period.en || ''}
          </div>
          <div className="flex items-center px-4 py-2 rounded-full bg-secondary/5 text-secondary border border-secondary/10">
            <FiMapPin className="mr-2" />
            {education.location}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
