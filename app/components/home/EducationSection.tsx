// app/components/home/EducationSection.tsx
'use client';

import { useLanguage } from '../../(core)/i18n/context';
import SectionTitle from '../common/SectionTitle';
import EducationCard from './education/EducationCard';
import { getEducationData } from './education/educationData';

export default function EducationSection() {
  const { language } = useLanguage();
  const educations = getEducationData();

  return (
    <div className="py-10 bg-gradient-to-b from-gray-50 via-slate-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle className="text-gray-800 dark:text-amber-300">
          {language === 'en' ? 'Education' : language === 'pt' ? 'Educação' : 'Bildung'}
        </SectionTitle>

        <div className="space-y-8 mt-12">
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} currentLanguage={language} />
          ))}
        </div>
      </div>
    </div>
  );
}
