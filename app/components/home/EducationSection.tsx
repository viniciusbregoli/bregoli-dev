'use client';

import Image from 'next/image';
import { useLanguage } from '../../(core)/i18n/context';

export default function EducationSection() {
  const { language } = useLanguage();

  const educations = [
    {
      institution: 'Technische Hochschule Ingolstadt',
      program: {
        en: 'Computer Science and AI (Exchange Program)',
        pt: 'Ciência da Computação e IA (Programa de Intercâmbio)',
        de: 'Informatik und KI (Austauschprogramm)',
      },
      period: {
        en: '10/2024 - Present',
        pt: '10/2024 - Presente',
        de: '10/2024 - Aktuell',
      },
      location: 'Ingolstadt, Bavaria, Germany',
      logo: '/images/thi-logo.png',
    },
    {
      institution: 'Pontifical Catholic University of Paraná',
      program: {
        en: 'Computer Engineering',
        pt: 'Engenharia da Computação',
        de: 'Technische Informatik',
      },
      period: {
        en: '2020 - Present',
        pt: '2020 - Presente',
        de: '2020 - Aktuell',
      },
      location: 'Curitiba, Brazil',
      logo: '/images/pucpr-logo.png',
    },
  ];

  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-800 dark:text-white">
          {language === 'en' ? 'Education' : language === 'pt' ? 'Educação' : 'Bildung'}
        </h2>

        <div className="space-y-8">
          {educations.map((education, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <div className="flex-shrink-0 flex justify-center mb-4 md:mb-0 md:mr-6">
                <div className="w-20 h-20 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-sm p-2">
                  <div className="relative w-full h-full">
                    <Image
                      src={education.logo}
                      alt={education.institution}
                      fill
                      style={{ objectFit: 'contain' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/api/placeholder/80/80';
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                  {education.institution}
                </h3>
                <p className="text-gray-800 dark:text-white font-medium mt-1">
                  {education.program[language as 'en' | 'pt' | 'de'] || education.program.en}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {education.period[language as 'en' | 'pt' | 'de'] || education.period.en}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-1">{education.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
