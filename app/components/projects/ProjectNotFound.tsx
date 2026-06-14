'use client';

import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';
import { useLanguage } from '../../(core)/i18n/context';

export default function ProjectNotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="mono-label mb-4">{'// 404'}</p>
        <h1 className="text-3xl font-bold mb-3 text-foreground">{t('projects.notFound')}</h1>
        <p className="text-muted mb-8">{t('projects.notFoundDesc')}</p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-background font-mono text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <FiChevronLeft />
          {t('projects.backToProjects')}
        </Link>
      </div>
    </div>
  );
}
