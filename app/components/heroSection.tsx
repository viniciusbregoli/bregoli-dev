'use client';

import Image from 'next/image';
import myImage from '@/../public/IMG-6403.jpg';
import { useLanguage } from '../i18n/context';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="bg-blue-50 dark:bg-black">
      <div className="flex px-24 py-10 justify-center items-center">
        <div className="mr-10">
          <Image
            className="rounded-2xl w-full h-auto md:w-auto md:h-auto shadow-lg"
            src={myImage}
            width={1000}
            alt="me :)"
          />
        </div>
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <h1 className="text-blue-800 dark:text-white font-bold text-5xl mb-4">
            {t('hero.greeting')} <br />
            {t('hero.name')}
          </h1>
          <p className="text-gray-700 dark:text-white text-xl w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
            {t('hero.description')}
          </p>
        </div>
      </div>
    </div>
  );
}
