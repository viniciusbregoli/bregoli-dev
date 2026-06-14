'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../(core)/i18n/context';

export default function ClassicFooter() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {currentYear} Vinícius Bregoli — {t('footer.rights')}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/viniciusbregoli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-primary transition-colors"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/viniciusbregoli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-primary transition-colors"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
