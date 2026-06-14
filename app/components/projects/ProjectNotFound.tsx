'use client';

import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';
import { useLanguage } from '../../(core)/i18n/context';
import CommandLine from '../terminal/CommandLine';

export default function ProjectNotFound() {
  const { t } = useLanguage();

  return (
    <div className="space-y-4 leading-relaxed">
      <CommandLine command="cat projects/unknown.md">
        <div className="space-y-1">
          <p className="text-primary">{t('projects.notFound')}</p>
          <p className="text-muted">{t('projects.notFoundDesc')}</p>
        </div>
      </CommandLine>
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
      >
        <FiChevronLeft /> cd ../
      </Link>
    </div>
  );
}
