'use client';

import { useLanguage } from '../../(core)/i18n/context';

interface SuccessMessageProps {
  message: string;
}

export default function SuccessMessage({ message }: SuccessMessageProps) {
  const { language } = useLanguage();

  const title = language === 'en' ? 'Thank you!' : language === 'pt' ? 'Obrigado!' : 'Vielen Dank!';

  return (
    <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-300 px-6 py-5 rounded-lg">
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p>{message}</p>
    </div>
  );
}
