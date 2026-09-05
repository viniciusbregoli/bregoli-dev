'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSelector from './LanguageSelector';
import ViewModeToggle from './ViewModeToggle';
import { useLanguage } from '../../(core)/i18n/context';

export default function ClassicHeader() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.contact'), href: '/contact' },
    { name: t('nav.chat'), href: '/chat' },
  ];
  return (
    <header className="studio-container">
      <div className="studio-header">
        <Link className="studio-wordmark" href="/" aria-label="bregoli.dev">
          bregoli<span>.dev</span>
        </Link>
        <nav className="studio-nav" aria-label={t('studio.portfolio')}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={(pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`))) ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="studio-header-controls">
          <ViewModeToggle />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
