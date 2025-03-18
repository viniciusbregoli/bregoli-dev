'use client';

import { useLanguage } from '../../(core)/i18n/context';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Vinícius Bregoli. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
