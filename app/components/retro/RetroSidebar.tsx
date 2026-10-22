'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../(core)/i18n/context';
import { Language, TranslationKey } from '../../(core)/i18n/translations';
import { ViewMode, useViewMode } from '../../(core)/view/context';
import RetroWindow from './RetroWindow';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'zh', label: '中文' },
];

const LOOKS: { mode: ViewMode; key: TranslationKey }[] = [
  { mode: 'classic', key: 'studio.portfolio' },
  { mode: 'terminal', key: 'retro.look.terminal' },
  { mode: 'retro', key: 'retro.look.retro' },
];

const VISITS_KEY = 'retroVisits';
const SESSION_KEY = 'retroVisitCounted';

/** Counts this browser's visits (once per session). Honest, unlike the old ones. */
function useVisitCount() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    let count = Number(localStorage.getItem(VISITS_KEY)) || 0;
    if (!sessionStorage.getItem(SESSION_KEY)) {
      count += 1;
      localStorage.setItem(VISITS_KEY, String(count));
      sessionStorage.setItem(SESSION_KEY, '1');
    }
    setVisits(count);
  }, []);

  return visits;
}

export default function RetroSidebar() {
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();
  const { mode, setMode } = useViewMode();
  const visits = useVisitCount();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('retro.guestbook'), href: '/contact' },
    { name: t('nav.chat'), href: '/chat' },
  ];

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <aside className="retro-stack retro-sidebar">
      <RetroWindow title={t('retro.navigation')}>
        <nav aria-label={t('retro.navigation')}>
          <ul className="retro-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
                  {isActive(item.href) ? <b>{item.name}</b> : item.name}
                </Link>
                {isActive(item.href) && (
                  <span className="retro-blink" aria-hidden="true">
                    {' '}
                    ◄
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </RetroWindow>

      <RetroWindow title={t('retro.look')}>
        <fieldset>
          <legend className="sr-only">{t('retro.look')}</legend>
          {LOOKS.map((look) => (
            <label key={look.mode} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="retro-look"
                checked={mode === look.mode}
                onChange={() => setMode(look.mode)}
              />
              {t(look.key)}
            </label>
          ))}
        </fieldset>
      </RetroWindow>

      <RetroWindow title={t('retro.language')}>
        <select
          className="retro-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          aria-label={t('retro.language')}
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </RetroWindow>

      <RetroWindow title={t('retro.links')}>
        <ul className="retro-list">
          <li>
            <a href="https://github.com/viniciusbregoli" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/viniciusbregoli"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:me@viniciusbregoli.dev">E-mail</a>
          </li>
        </ul>
      </RetroWindow>

      <RetroWindow title={t('retro.visits')}>
        <div className="text-center">
          <span className="retro-counter" aria-label={visits === null ? undefined : String(visits)}>
            {String(visits ?? 0)
              .padStart(7, '0')
              .split('')
              .map((digit, i) => (
                <span key={i} aria-hidden="true">
                  {digit}
                </span>
              ))}
          </span>
        </div>
      </RetroWindow>
    </aside>
  );
}
