'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggleButton';
import { useLanguage } from '../../(core)/i18n/context';
import { cn } from '../../(core)/utils/cn';

export default function Header() {
  const router = usePathname();
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="max-w-5xl mx-auto panel rounded-full px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-3 backdrop-blur-sm bg-surface/80">
        {/* Navigation */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-4 py-1.5 font-mono text-sm transition-colors duration-200',
                router === item.href
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted hover:text-foreground hover:bg-foreground/5',
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Actions & Socials */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-line pr-4">
            <ThemeToggle />
            <LanguageSelector />
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/viniciusbregoli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-primary transition-colors duration-200"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/viniciusbregoli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-primary transition-colors duration-200"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
