'use client';

import { useLanguage } from '../../(core)/i18n/context';
import { projects } from '../../(features)/projects/projectData';
import SectionTitle from '../common/SectionTitle';
import StudioProjectList from './StudioProjectList';

export default function ClassicProjectList() {
  const { t } = useLanguage();
  return (
    <section className="studio-container studio-section min-h-[65vh]">
      <SectionTitle eyebrow={t('nav.projects')} className="mb-12">
        {t('projects.title')}
      </SectionTitle>
      <StudioProjectList projects={projects} />
    </section>
  );
}
