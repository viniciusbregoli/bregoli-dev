'use client';

import { useLanguage } from '../../../(core)/i18n/context';

const levelWidth: Record<string, string> = {
  Native: '100%',
  Fluent: '95%',
  Advanced: '80%',
  Intermediate: '60%',
};

export default function LanguageSkills() {
  const { t } = useLanguage();

  const languages = [
    { name: 'English', level: 'Fluent', flag: '🇺🇸' },
    { name: 'Portuguese', level: 'Native', flag: '🇧🇷' },
    { name: 'Spanish', level: 'Advanced', flag: '🇪🇸' },
    { name: 'German', level: 'Intermediate', flag: '🇩🇪' },
  ];

  return (
    <div className="panel p-8">
      <h3 className="mono-label mb-8">{t('skills.languages')}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {languages.map((language, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{language.flag}</span>
              <div>
                <div className="font-semibold text-foreground">{language.name}</div>
                <div className="mono-label text-muted">{language.level}</div>
              </div>
            </div>
            <div className="w-full h-1 bg-foreground/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: levelWidth[language.level] }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
