'use client';

import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';
import { useLanguage } from '../../(core)/i18n/context';


export default function ProjectNotFound() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-600 dark:text-red-400">
          {t('projects.notFound')}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{t('projects.notFoundDesc')}</p>
        <Link
          href="/projects"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
        >
          <FiChevronLeft className="mr-2" />
          {t('projects.backToProjects')}
        </Link>
      </div>
    </div>
  );
}
