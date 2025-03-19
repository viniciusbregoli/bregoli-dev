'use client';

import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';
import { Language } from '../../(core)/i18n/translations';

interface ProjectNotFoundProps {
  language: Language;
}

export default function ProjectNotFound({ language }: ProjectNotFoundProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-600 dark:text-red-400">
          {language === 'en'
            ? 'Project Not Found'
            : language === 'pt'
              ? 'Projeto Não Encontrado'
              : 'Projekt Nicht Gefunden'}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {language === 'en'
            ? 'The project you are looking for does not exist.'
            : language === 'pt'
              ? 'O projeto que você está procurando não existe.'
              : 'Das gesuchte Projekt existiert nicht.'}
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
        >
          <FiChevronLeft className="mr-2" />
          {language === 'en'
            ? 'Back to Projects'
            : language === 'pt'
              ? 'Voltar para Projetos'
              : 'Zurück zu Projekten'}
        </Link>
      </div>
    </div>
  );
}