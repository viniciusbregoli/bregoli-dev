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

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} currentLanguage={language} />
          ))}
        </div>
      </div>
    </div>
  );
}
