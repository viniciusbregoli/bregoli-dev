// app/components/home/experience/TechnologyBadges.tsx
'use client';

import { Language } from '../../../(core)/i18n/translations';

interface TechnologyBadgesProps {
  technologies: {
    en: string;
    pt: string;
    de: string;
  }[];
  currentLanguage: Language;
}

export default function TechnologyBadges({ technologies, currentLanguage }: TechnologyBadgesProps) {
  return (
    <div>
      <h5 className="text-gray-700 dark:text-gray-200 font-medium mb-3">
        {currentLanguage === 'en'
          ? 'Technologies'
          : currentLanguage === 'pt'
            ? 'Tecnologias'
            : 'Technologien'}
        :
      </h5>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
          >
            {tech[currentLanguage] || tech.en}
          </span>
        ))}
      </div>
    </div>
  );
}
