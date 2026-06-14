'use client';

import { useState, useRef, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '../../(core)/i18n/context';
import { Language } from '../../(core)/i18n/translations';
import { cn } from '../../(core)/utils/cn';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'pt', label: 'PT' },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 h-9 px-3 rounded-full font-mono text-sm text-muted hover:text-foreground hover:bg-foreground/5 transition-colors"
        aria-label="Select language"
      >
        <span>{currentLanguage?.label}</span>
        <FiChevronDown className={cn('transition-transform', isOpen && 'rotate-180')} size={14} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-20 term-box bg-surface overflow-hidden shadow-lg shadow-black/20 z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={cn(
                'block w-full px-4 py-2 text-center font-mono text-sm transition-colors',
                language === lang.code
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted hover:text-foreground hover:bg-foreground/5',
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
