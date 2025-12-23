'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../(core)/i18n/context';
import SectionTitle from '../common/SectionTitle';
import { FaLightbulb, FaHandshake } from 'react-icons/fa';

export default function GoalsSection() {
  const { t } = useLanguage();

  return (
    <div id="goals" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle className="text-gray-900 dark:text-white">
          <span className="text-gradient-rose">{t('goals.title')}</span>
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative glass-morphism rounded-[2.5rem] p-10 shadow-2xl transition-all duration-500 border border-white/20 dark:border-white/10"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 mb-8 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
              <FaLightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t('goals.shortTerm')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
              {t('goals.shortTermDesc')}
            </p>
            <div className="mt-8 h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative glass-morphism rounded-[2.5rem] p-10 shadow-2xl transition-all duration-500 border border-white/20 dark:border-white/10"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20 mb-8 transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
              <FaHandshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t('goals.longTerm')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
              {t('goals.longTermDesc')}
            </p>
            <div className="mt-8 h-1.5 w-24 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
