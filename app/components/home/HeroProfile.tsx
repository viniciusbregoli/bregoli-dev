'use client';

import Image from 'next/image';
import myImage from '@/../public/images/me.jpg';
import { useLanguage } from '../../(core)/i18n/context';

export default function HeroSection() {
  const { t, language } = useLanguage();

  const handleDownloadCV = () => {
    const cvPaths = {
      en: '/CV - English.pdf',
      pt: '/CV - Portugues.pdf',
      de: '/CV - Deutsch.pdf',
    };

    // Get the appropriate CV path based on the current language
    const cvPath = cvPaths[language] || cvPaths.en; // Default to English if language not available

    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = cvPath;
    link.setAttribute('download', `Vinicius_Bregoli_CV_${language.toUpperCase()}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-blue-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image container - centered on mobile, left-aligned on desktop */}
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <Image
              className="rounded-2xl w-64 h-auto sm:w-72 md:w-80 lg:w-96 shadow-lg border-2 border-transparent dark:border-blue-500"
              src={myImage}
              width={1000}
              alt="me :)"
              priority
            />
          </div>

          {/* Text content - centered on mobile, right-aligned on desktop */}
          <div className="w-full md:flex-1 text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-blue-800 dark:text-blue-300 font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              {t('hero.greeting')} <br />
              {t('hero.name')}
            </h1>
            <p className="text-gray-700 dark:text-gray-200 text-lg sm:text-xl mb-8 mx-auto md:mx-0 max-w-xl">
              {t('hero.description')}
            </p>
            <button
              onClick={handleDownloadCV}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition duration-300 shadow-md"
            >
              {t('hero.cta')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
