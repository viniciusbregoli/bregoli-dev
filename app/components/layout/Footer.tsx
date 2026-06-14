'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../(core)/i18n/context';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-5 sm:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
      <p className="text-muted">
        <span className="text-secondary">●</span> {currentYear} Vinícius Bregoli — {t('footer.rights')}
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/viniciusbregoli"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted hover:text-primary transition-colors"
        >
          <FaGithub /> github
        </a>
        <a
          href="https://linkedin.com/in/viniciusbregoli"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted hover:text-primary transition-colors"
        >
          <FaLinkedin /> linkedin
        </a>
      </div>
    </footer>
  );
}
