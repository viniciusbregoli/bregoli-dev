// app/(features)/projects/projectCard.tsx
'use client';

import { FiCode, FiBookOpen } from 'react-icons/fi';
import { Language } from '../../(core)/i18n/translations';

interface ProjectCardProps {
  title: string;
  description: {
    en: string;
    pt: string;
    de: string;
  };
  technologies: string[];
  currentLanguage: Language;
  color: string; // Add color prop for customizing each card
  icon: 'code' | 'research'; // Either a code or research project
}

export default function ProjectCard({
  title,
  description,
  technologies,
  currentLanguage,
  color,
  icon,
}: ProjectCardProps) {
  // Determine the gradient based on the color prop
  const gradients: Record<string, { from: string; to: string; darkFrom: string; darkTo: string }> =
    {
      blue: {
        from: 'from-blue-400',
        to: 'to-blue-600',
        darkFrom: 'dark:from-blue-600',
        darkTo: 'dark:to-blue-800',
      },
      purple: {
        from: 'from-purple-400',
        to: 'to-purple-600',
        darkFrom: 'dark:from-purple-600',
        darkTo: 'dark:to-purple-800',
      },
      green: {
        from: 'from-green-400',
        to: 'to-green-600',
        darkFrom: 'dark:from-green-600',
        darkTo: 'dark:to-green-800',
      },
      orange: {
        from: 'from-orange-400',
        to: 'to-orange-600',
        darkFrom: 'dark:from-orange-600',
        darkTo: 'dark:to-orange-800',
      },
    };

  const gradient = gradients[color] || gradients.blue;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 h-full flex flex-col">
      {/* Visual header area with gradient and icon */}
      <div
        className={`h-48 bg-gradient-to-r ${gradient.from} ${gradient.to} ${gradient.darkFrom} ${gradient.darkTo} flex items-center justify-center`}
      >
        {icon === 'code' ? (
          <FiCode className="text-white w-20 h-20 opacity-80" />
        ) : (
          <FiBookOpen className="text-white w-20 h-20 opacity-80" />
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {description[currentLanguage] || description.en}
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
