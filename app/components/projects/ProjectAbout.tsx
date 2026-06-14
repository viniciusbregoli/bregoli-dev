'use client';

import { Project } from '../../(features)/projects/projectData';
import { Language } from '../../(core)/i18n/translations';
import { useLanguage } from '../../(core)/i18n/context';

interface ProjectAboutProps {
  project: Project;
  language: Language;
}

export default function ProjectAbout({ project, language }: ProjectAboutProps) {
  const { t } = useLanguage();
  const body = project.detailedDescription || project.description;

  return (
    <div className="panel p-8 md:p-10">
      <h2 className="mono-label mb-6">{t('projects.aboutProject')}</h2>
      <p className="text-foreground/90 whitespace-pre-line leading-relaxed text-lg">
        {body[language] || body.en}
      </p>
    </div>
  );
}
