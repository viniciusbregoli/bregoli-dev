'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import myImage from '@/../public/images/me.jpg';
import { useLanguage } from '../../(core)/i18n/context';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

export default function HeroSection() {
  const { t, language } = useLanguage();

  const handleDownloadCV = () => {
    const cvPaths: Record<string, string> = {
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
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Technical grid + single accent glow */}
      <div className="absolute inset-0 bg-grid -z-10" />
      <div className="absolute top-1/3 right-[12%] w-[28rem] h-[28rem] glow-accent blur-3xl opacity-40 -z-10" />

      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-2 lg:order-1 space-y-6"
          >
            <p className="mono-label">{t('hero.greeting')}</p>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              {t('hero.name')}
            </h1>

            <p className="text-xl md:text-2xl text-foreground/90 font-medium leading-relaxed max-w-xl">
              {t('hero.professionalClaim')}
            </p>

            <p className="text-base text-muted leading-relaxed max-w-xl">{t('hero.description')}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={handleDownloadCV}
                className="group inline-flex items-center gap-2 px-6 py-3 font-mono text-sm rounded-lg bg-primary text-background font-semibold hover:opacity-90 transition-opacity"
              >
                <FiDownload className="transition-transform group-hover:-translate-y-0.5" />
                {t('hero.cta')}
              </button>

              <a
                href="#experience"
                className="group inline-flex items-center gap-2 px-6 py-3 font-mono text-sm rounded-lg panel text-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                {t('hero.viewExperience')}
                <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-3 glow-accent blur-2xl opacity-50" />
              <div className="relative panel p-2 overflow-hidden">
                <Image
                  className="rounded-xl object-cover"
                  src={myImage}
                  width={420}
                  height={420}
                  alt="Vinícius Bregoli"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
