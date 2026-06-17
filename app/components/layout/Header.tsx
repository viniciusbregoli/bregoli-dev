'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector';
import ViewModeToggle from './ViewModeToggle';
import TrafficLights from './TrafficLights';
import { useLanguage } from '../../(core)/i18n/context';
import { cn } from '../../(core)/utils/cn';

export default function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/', path: '~' },
    { name: t('nav.projects'), href: '/projects', path: '~/projects' },
    { name: t('nav.contact'), href: '/contact', path: '~/contact' },
    { name: t('nav.chat'), href: '/chat', path: '~/chat' },
  ];

  return (
    <header className="term-titlebar flex-col items-start sm:flex-row sm:items-center gap-3 sm:gap-4">
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
        <TrafficLights />
        <nav className="flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-md px-3 py-1.5 text-sm transition-colors whitespace-nowrap',
                item.href === pathname
                  ? 'bg-primary/15 text-primary'
                  : 'text-muted hover:text-foreground hover:bg-foreground/5',
              )}
            >
              {item.path}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3 sm:ml-auto">
        <ViewModeToggle />
        <div className="flex items-center border-l border-line pl-3">
          <LanguageSelector />
        </div>
        <div className="flex items-center gap-3 border-l border-line pl-3">
          <a
            href="https://github.com/viniciusbregoli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-primary transition-colors"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/viniciusbregoli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-primary transition-colors"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
