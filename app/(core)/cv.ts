import { Language } from './i18n/translations';

const CV_PATHS: Record<Language, string> = {
  en: '/CV - English.pdf',
  pt: '/CV - Portugues.pdf',
  de: '/CV - Deutsch.pdf',
  es: '/CV - Espanol.pdf',
  zh: '/CV - Chinese.pdf',
};

export function cvPath(language: Language): string {
  return CV_PATHS[language] || CV_PATHS.en;
}

export function cvFileName(language: Language): string {
  return `Vinicius_Bregoli_CV_${language.toUpperCase()}.pdf`;
}

/** Triggers a download of the CV in the given language (English fallback). */
export function downloadCV(language: Language) {
  const link = document.createElement('a');
  link.href = cvPath(language);
  link.setAttribute('download', cvFileName(language));
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
