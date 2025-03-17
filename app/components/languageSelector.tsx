'use client';

import { useState, useRef, useEffect, JSX } from 'react';
import { useLanguage } from '../i18n/context';
import { Language } from '../i18n/translations';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; flag: JSX.Element }[] = [
    {
      code: 'en',
      label: 'EN',
      flag: <span className="mr-2 text-lg">🇺🇸</span>,
    },
    {
      code: 'de',
      label: 'DE',
      flag: <span className="mr-2 text-lg">🇩🇪</span>,
    },
    {
      code: 'pt',
      label: 'PT',
      flag: <span className="mr-2 text-lg">🇧🇷</span>,
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Determine the current language label and flag
  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-blue-100 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-gray-600 text-blue-800 dark:text-white rounded-md px-3 py-2 transition-colors"
      >
        <div className="flex items-center">
          {currentLanguage?.flag}
          <span className="text-sm font-medium">{currentLanguage?.label}</span>
        </div>
        <svg
          className="w-5 h-5 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  language === lang.code
                    ? 'bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-white'
                } flex items-center`}
              >
                {lang.flag}
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
