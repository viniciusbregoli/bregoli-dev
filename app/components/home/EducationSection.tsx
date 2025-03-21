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
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>
          {language === 'en' ? 'Education' : language === 'pt' ? 'Educação' : 'Bildung'}
        </SectionTitle>

        <div className="space-y-8">
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} currentLanguage={language} />
          ))}
        </div>
      </div>
    </div>
  );
}
