'use client';

import Image from 'next/image';
import myImage from '@/../public/images/me.jpg';
import { useLanguage } from '../../i18n/context';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="bg-blue-50 dark:bg-gray-800">
      {' '}
      {/* Changed from dark:bg-black to dark:bg-gray-800 */}
      <div className="flex px-24 py-10 justify-center items-center">
        <div className="mr-10">
          <Image
            className="rounded-2xl w-full h-auto md:w-auto md:h-auto shadow-lg border-2 border-transparent dark:border-blue-500" /* Added subtle border in dark mode */
            src={myImage}
            width={1000}
            alt="me :)"
          />
        </div>
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <h1 className="text-blue-800 dark:text-blue-300 font-bold text-5xl mb-4">
            {' '}
            {/* Changed from dark:text-white to dark:text-blue-300 */}
            {t('hero.greeting')} <br />
            {t('hero.name')}
          </h1>
          <p className="text-gray-700 dark:text-gray-200 text-xl w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
            {' '}
            {/* Changed from dark:text-white to dark:text-gray-200 */}
            {t('hero.description')}
          </p>
          {/* Optional: Add a CTA button */}
          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition duration-300 shadow-md">
            {t('hero.cta') || 'Download Resume'}
          </button>
        </div>
      </div>
    </div>
  );
}
