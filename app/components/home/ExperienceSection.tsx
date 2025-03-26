'use client';

import { useLanguage } from '../../(core)/i18n/context';
import ExperienceCard from './experience/ExperienceCard';
import { getExperienceData } from './experience/experienceData';
import SectionTitle from '../common/SectionTitle';

export default function ExperienceSection() {
  const { t, language } = useLanguage();
  const experiences = getExperienceData();

  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>{t('experience.title')}</SectionTitle>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
          
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
              
              {/* Experience card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <ExperienceCard experience={experience} currentLanguage={language} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
