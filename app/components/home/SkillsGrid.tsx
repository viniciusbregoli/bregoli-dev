'use client';

import { useLanguage } from '../../(core)/i18n/context';
import TechnicalSkills from './skills/TechnicalSkills';
import SoftSkills from './skills/SoftSkills';
import LanguageSkills from './skills/LanguageSkills';
import SectionTitle from '../common/SectionTitle';

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-8">
      <div className="max-w-[1600px] mx-auto px-6">
        <SectionTitle eyebrow="skills" className="mb-10">
          {t('skills.title')}
        </SectionTitle>

        <div className="space-y-6">
          <TechnicalSkills />
          <SoftSkills />
          <LanguageSkills />
        </div>
      </div>
    </section>
  );
}
