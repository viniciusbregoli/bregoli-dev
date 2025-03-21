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
    { name: t('nav.contact'), href: '/contact' },
    { name: t('nav.projects'), href: '/projects' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-md">
      <nav className="flex flex-col sm:flex-row items-center h-auto min-h-20 bg-blue-50 dark:bg-gray-900 py-3 sm:py-0">
        {/* Navigation */}
        <div className="flex w-full px-4 sm:ml-4 md:ml-8 lg:ml-24 gap-2 overflow-x-auto whitespace-nowrap mb-3 sm:mb-0">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={router === item.href ? 'page' : undefined}
              className={classNames(
                router === item.href
                  ? 'bg-blue-100 dark:bg-gray-800 text-blue-800 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-white',
                'rounded-md px-3 py-2 text-sm sm:text-base md:text-xl font-medium flex-shrink-0',
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Theme, Language and Socials in one container on mobile */}
        <div className="flex items-center gap-2 px-4 sm:px-0">
          {/* Theme & Language Controls */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSelector />
          </div>

          {/* Socials */}
          <div className="flex">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/viniciusbregoli"
              className="text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-white
                        rounded-md px-2 sm:px-3 py-2 text-lg sm:text-xl font-medium"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/viniciusbregoli/"
              className="text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-white
                        rounded-md px-2 sm:px-3 py-2 text-lg sm:text-xl font-medium"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
