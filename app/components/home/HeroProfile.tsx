'use client';

import Image from 'next/image';
import myImage from '@/../public/images/me.jpg';
import { useLanguage } from '../../(core)/i18n/context';
import { FaDownload } from 'react-icons/fa';

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
    <div className="relative bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative flex flex-col px-4 py-6 md:flex-row md:px-24 md:py-12 justify-center items-center">
        <div className="mb-8 md:mb-0 md:mr-12 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-gray-500 dark:from-blue-500 dark:to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <Image
                className="rounded-2xl shadow-lg border-2 border-transparent dark:border-blue-500 transform transition duration-500 group-hover:scale-105"
                src={myImage}
                width={700}
                alt="me :)"
              />
            </div>
          </div>
        </div>
        <div className="w-auto max-w-2xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-gray-800 dark:text-blue-300 font-bold text-5xl md:text-6xl">
                {t('hero.greeting')}
              </h1>
              <h2 className="text-gray-700 dark:text-blue-400 font-bold text-4xl md:text-5xl">
                {t('hero.name')}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-blue-300 text-xl md:text-2xl font-medium">
              {t('hero.professionalClaim')}
            </p>
            <p className="text-gray-600 dark:text-gray-200 text-lg md:text-xl leading-relaxed">
              {t('hero.description')}
            </p>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white rounded-lg font-medium transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <FaDownload className="mr-2" />
              {t('hero.cta')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
