'use client';

import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';
import { Project } from '../../(features)/projects/projectData';
import { Language } from '../../(core)/i18n/translations';

interface ProjectHeaderProps {
  project: Project;
  language: Language;
  gradient: {
    from: string;
    to: string;
    darkFrom: string;
    darkTo: string;
  };
}

export default function ProjectHeader({ project, language, gradient }: ProjectHeaderProps) {
  return (
    <div
      className={`bg-gradient-to-r ${gradient.from} ${gradient.to} ${gradient.darkFrom} ${gradient.darkTo}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-4">
          <Link
            href="/projects"
            className="inline-flex items-center text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md font-medium transition"
          >
            <FiChevronLeft className="mr-2" />
            {language === 'en'
              ? 'Back to Projects'
              : language === 'pt'
                ? 'Voltar para Projetos'
                : 'Zurück zu Projekten'}
          </Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
        <p className="text-white/90 text-xl max-w-3xl">
          {project.description[language] || project.description.en}
        </p>
      </div>
    </div>
  );
}
