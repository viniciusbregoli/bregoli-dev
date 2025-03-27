'use client';

import { useLanguage } from '../../(core)/i18n/context';
import SectionTitle from '../common/SectionTitle';
import { FaLightbulb, FaHandshake } from 'react-icons/fa';

export default function GoalsSection() {
  const { t } = useLanguage();

  return (
    <div className="py-10 bg-gradient-to-b from-gray-50 via-slate-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle className="text-gray-800 dark:text-purple-300">
          {t('goals.title')}
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-500 dark:bg-purple-500 rounded-full flex items-center justify-center">
              <FaLightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-purple-300 mb-6 mt-4">
              {t('goals.shortTerm')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t('goals.shortTermDesc')}
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slate-400 to-gray-500 dark:from-purple-500 dark:to-indigo-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-500 dark:bg-indigo-500 rounded-full flex items-center justify-center">
              <FaHandshake className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-purple-300 mb-6 mt-4">
              {t('goals.longTerm')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t('goals.longTermDesc')}
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-slate-400 dark:from-indigo-500 dark:to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
