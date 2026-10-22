'use client';

import { ReactNode } from 'react';
import { useLanguage } from '../../(core)/i18n/context';
import RetroSidebar from './RetroSidebar';
import RetroFooter from './RetroFooter';
import './retro.css';

export default function RetroChrome({ children }: { children: ReactNode }) {
  const { t } = useLanguage();

  return (
    <div className="retro retro-page" id="top">
      <header>
        <h1 className="retro-title">
          <span className="retro-sparkle" aria-hidden="true">
            ✦{' '}
          </span>
          {t('retro.siteTitle')}
          <span className="retro-sparkle" aria-hidden="true">
            {' '}
            ✦
          </span>
        </h1>
        <div className="retro-marquee">
          <span>{t('retro.marquee')}</span>
        </div>
      </header>

      <hr className="retro-hr" />

      <div className="retro-columns">
        <RetroSidebar />
        <main className="retro-stack min-w-0">{children}</main>
      </div>

      <RetroFooter />
    </div>
  );
}
