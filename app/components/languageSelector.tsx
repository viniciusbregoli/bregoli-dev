'use client';

import { useLanguage } from '../i18n/context';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          language === 'en' ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700'
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('de')}
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          language === 'de' ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700'
        }`}
        aria-label="German"
      >
        DE
      </button>
      <button
        onClick={() => setLanguage('pt')}
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          language === 'pt' ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700'
        }`}
        aria-label="Portuguese"
      >
        PT
      </button>
    </div>
  );
}
