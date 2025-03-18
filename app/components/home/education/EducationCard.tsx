// app/components/home/education/EducationCard.tsx
'use client';

import { EducationType } from './educationData';
import { Language } from '../../../(core)/i18n/translations';
import EducationLogo from './EducationLogo';
import EducationDetails from './EducationDetails';

interface EducationCardProps {
  education: EducationType;
  currentLanguage: Language;
}

export default function EducationCard({ education, currentLanguage }: EducationCardProps) {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <EducationLogo logo={education.logo} institution={education.institution} />
      <EducationDetails
        institution={education.institution}
        program={education.program[currentLanguage] || education.program.en || ''}
        period={education.period[currentLanguage] || education.period.en || ''}
        location={education.location}
      />
    </div>
  );
}
