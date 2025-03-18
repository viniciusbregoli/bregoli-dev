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
      <div className="flex px-24 py-12 justify-center items-center">
        <div className="mr-10">
          <Image
            className="rounded-2xl w-full h-auto md:w-auto md:h-auto shadow-lg border-2 border-transparent dark:border-blue-500"
            src={myImage}
            width={1000}
            alt="me :)"
          />
        </div>
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <h1 className="text-blue-800 dark:text-blue-300 font-bold text-5xl mb-4">
            {t('hero.greeting')} <br />
            {t('hero.name')}
          </h1>
          <p className="text-gray-700 dark:text-gray-200 text-xl w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
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
  );
}
