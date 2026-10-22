import { Language, LocalizedText } from '../../(core)/i18n/translations';

/** Localized text in the active language, falling back to English. */
export const pick = (text: LocalizedText, language: Language) => text[language] || text.en || '';
