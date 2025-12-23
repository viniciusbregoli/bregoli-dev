'use client';

import { useLanguage } from '../../(core)/i18n/context';
import TechnicalSkills from './skills/TechnicalSkills';
import SoftSkills from './skills/SoftSkills';
import LanguageSkills from './skills/LanguageSkills';
import SectionTitle from '../common/SectionTitle';

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <div id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle className="text-gray-800 dark:text-rose-300">
          {t('skills.title')}
        </SectionTitle>

        <div className="space-y-10 mt-12">
          <TechnicalSkills />
          <SoftSkills />
          <LanguageSkills />
        </div>
      </div>
    </div>
  );
}
