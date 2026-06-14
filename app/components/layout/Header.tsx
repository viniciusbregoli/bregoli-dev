'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggleButton';
import ViewModeToggle from './ViewModeToggle';
import { useLanguage } from '../../(core)/i18n/context';
import { cn } from '../../(core)/utils/cn';

export default function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/', path: '~' },
    { name: t('nav.projects'), href: '/projects', path: '~/projects' },
    { name: t('nav.contact'), href: '/contact', path: '~/contact' },
  ];

  const active = navigation.find((item) => item.href === pathname) ?? navigation[0];

  return (
    <header className="term-titlebar flex-col sm:flex-row gap-3 sm:gap-4">
      <div className="flex items-center gap-2 self-start sm:self-auto">
        <span className="term-dot red" />
        <span className="term-dot yellow" />
        <span className="term-dot green" />
      </div>

      <span className="text-muted text-xs hidden md:block">
        vinicius@bregoli-dev: {active.path}
      </span>

      <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar sm:ml-auto">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'rounded-md px-3 py-1 text-sm transition-colors whitespace-nowrap',
              item.href === pathname
                ? 'bg-primary/15 text-primary'
                : 'text-muted hover:text-foreground hover:bg-foreground/5',
            )}
          >
            {item.path}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-1 border-l border-line pl-2 sm:pl-3">
        <ViewModeToggle />
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </header>
  );
}
