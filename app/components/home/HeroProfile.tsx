'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../(core)/i18n/context';
import { FiDownload } from 'react-icons/fi';

export default function HeroSection() {
  const { t, language } = useLanguage();

  const handleDownloadCV = () => {
    const cvPaths: Record<string, string> = {
      en: '/CV - English.pdf',
      pt: '/CV - Portugues.pdf',
      de: '/CV - Deutsch.pdf',
      es: '/CV - Espanol.pdf',
      zh: '/CV - Chinese.pdf',
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
    <section className="relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 py-10">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="mono-label">{t('hero.greeting')}</p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground">
            {t('hero.name')}
          </h1>

          <p className="text-2xl md:text-3xl text-foreground/90 font-medium leading-relaxed max-w-2xl">
            {t('hero.professionalClaim')}
          </p>

          <p className="text-lg text-muted leading-relaxed max-w-2xl">{t('hero.description')}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={handleDownloadCV}
              className="group inline-flex items-center gap-2 px-6 py-3 font-mono text-sm rounded-lg border border-primary/40 bg-primary/15 text-primary font-semibold backdrop-blur-sm hover:bg-primary/25 hover:border-primary/60 transition-colors"
            >
              <FiDownload className="transition-transform group-hover:-translate-y-0.5" />
              {t('hero.cta')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
