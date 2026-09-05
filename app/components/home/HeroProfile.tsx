'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiDownload, FiTerminal } from 'react-icons/fi';
import { useLanguage } from '../../(core)/i18n/context';
import { useViewMode } from '../../(core)/view/context';
import { getExperienceData } from './experience/experienceData';

export default function HeroSection() {
  const reduced = useReducedMotion();
  const { t, language } = useLanguage();
  const { setMode } = useViewMode();
  const current = getExperienceData()[0];
  const cvPaths = {
    en: '/CV - English.pdf',
    pt: '/CV - Portugues.pdf',
    de: '/CV - Deutsch.pdf',
    es: '/CV - Espanol.pdf',
    zh: '/CV - Chinese.pdf',
  };

  return (
    <section className="studio-container" aria-labelledby="hero-title">
      <div className="studio-hero">
        <div className="studio-hero-copy">
          <p className="mono-label">{t('studio.discipline')}</p>
          <motion.h1 id="hero-title" className="studio-name"
            initial={false}
            animate={reduced ? { y: 0 } : { y: [24, 0] }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Vinícius <em>Bregoli.</em>
          </motion.h1>
          <p className="studio-role">{t('studio.role')}</p>
          <p className="studio-intro">{t('studio.intro')}</p>
          <div className="studio-actions">
            <a className="studio-button" href="#work">
              {t('studio.work')} <FiArrowUpRight aria-hidden />
            </a>
            <button className="studio-text-link" onClick={() => setMode('terminal')}>
              {t('studio.terminal')} <FiTerminal aria-hidden />
            </button>
          </div>
        </div>
        <aside className="studio-hero-aside">
          <p className="mono-label">{t('studio.focus')}</p>
          <p className="text-foreground mt-4">
            {current.position[language] || current.position.en}
          </p>
          <p className="text-muted">Kinebot / {current.location}</p>
          <div className="studio-degree">
            <p className="text-foreground">{t('studio.degree')}</p>
            <p>PUCPR / 2025</p>
          </div>
          <a
            className="studio-text-link"
            href={cvPaths[language]}
            download={`Vinicius_Bregoli_CV_${language.toUpperCase()}.pdf`}
          >
            <FiDownload aria-hidden />
            {t('hero.cta')}
          </a>
        </aside>
      </div>
      <div className="studio-hero-rule">
        <span>{t('studio.systems')}</span>
        <span>01 / 05</span>
      </div>
    </section>
  );
}
