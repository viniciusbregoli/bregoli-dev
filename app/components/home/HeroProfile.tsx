'use client';

import { motion } from 'framer-motion';
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

    const cvPath = cvPaths[language] || cvPaths.en;

    const link = document.createElement('a');
    link.href = cvPath;
    link.setAttribute('download', `Vinicius_Bregoli_CV_${language.toUpperCase()}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[10%] right-[10%] w-[30rem] h-[30rem] bg-primary/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[25rem] h-[25rem] bg-secondary/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-accent/10 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm tracking-wide uppercase"
                >
                  {t('hero.greeting')}
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <span className="block">{t('hero.name')}</span>

                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-xl"
              >
                {t('hero.professionalClaim')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl"
              >
                {t('hero.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <button
                  onClick={handleDownloadCV}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-primary rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-xl shadow-primary/20"
                >
                  <FaDownload className="mr-3 transition-transform group-hover:-translate-y-1" />
                  {t('hero.cta')}
                </button>

                <a
                  href="#experience"
                  className="inline-flex items-center justify-center px-8 py-4 font-bold text-gray-700 dark:text-white transition-all duration-200 bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl hover:bg-white dark:hover:bg-white/20 focus:outline-none"
                >
                  View Experience
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Animated glowing border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              <div className="relative glass-morphism p-3 rounded-[2.5rem] overflow-hidden">
                <Image
                  className="rounded-[2rem] shadow-2xl object-cover hover:scale-105 transition-transform duration-700"
                  src={myImage}
                  width={600}
                  height={600}
                  alt="Vinícius Bregoli"
                  priority
                />
              </div>


            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
