'use client';

import { useLanguage } from '../../(core)/i18n/context';
import TechnicalSkills from './skills/TechnicalSkills';
import SoftSkills from './skills/SoftSkills';
import LanguageSkills from './skills/LanguageSkills';
import SectionTitle from '../common/SectionTitle';

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>{t('skills.title')}</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <TechnicalSkills />
          <SoftSkills />
          <LanguageSkills />
        </div>
      </div>
    </div>
  );
}
