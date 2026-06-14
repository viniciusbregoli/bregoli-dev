'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, TranslationKey, translations } from './translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const SUPPORTED: Language[] = ['en', 'pt', 'de', 'es', 'zh'];
const STORAGE_KEY = 'language';

function resolveInitialLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && SUPPORTED.includes(stored)) return stored;

  const browser = navigator.language.slice(0, 2) as Language;
  return SUPPORTED.includes(browser) ? browser : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to 'en' on the server / first render to keep markup consistent,
  // then resolve the saved/browser language after hydration.
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    setLanguageState(resolveInitialLanguage());
  }, []);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  // Keys are type-checked against the translation table, so a missing key is a
  // compile error rather than a runtime warning. The fallback chain still
  // guards against an entry that lacks the active language.
  const t = (key: TranslationKey): string => {
    const entry = translations[key];
    return entry[language] || entry.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
