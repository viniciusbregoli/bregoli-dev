'use client';

import { useLanguage } from '../i18n/context';

export default function Page() {
  const { t } = useLanguage();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{t('about.title')}</h1>
      {/* Add more translated content here */}
    </div>
  );
}
