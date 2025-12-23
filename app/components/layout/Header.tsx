'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggleButton';
import { useLanguage } from '../../(core)/i18n/context';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

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
      <nav className="max-w-7xl mx-auto glass-morphism rounded-2xl md:rounded-full px-6 py-2 md:h-16 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg shadow-black/5">
        {/* Navigation */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={classNames(
                router === item.href
                  ? 'bg-primary/10 text-primary dark:bg-primary/20'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5',
                'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300',
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Actions & Socials */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 border-r border-gray-200 dark:border-white/10 pr-6">
            <ThemeToggle />
            <LanguageSelector />
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/viniciusbregoli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/viniciusbregoli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
