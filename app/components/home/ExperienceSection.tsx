// app/components/home/EducationSection.tsx (updated)
'use client';

import { useLanguage } from '../../(core)/i18n/context';
import EducationCard from './education/EducationCard';
import { getEducationData } from './education/educationData';
import SectionTitle from '../common/SectionTitle';

export default function EducationSection() {
  const { t, language } = useLanguage();
  const educations = getEducationData();

  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>{t('education.title')}</SectionTitle>

        <div className="space-y-8">
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} currentLanguage={language} />
          ))}
        </div>
      </div>
    </div>
  );
}
