'use client';

import { useLanguage } from '../../(core)/i18n/context';
import TechnicalSkills from './skills/TechnicalSkills';
import SoftSkills from './skills/SoftSkills';
import LanguageSkills from './skills/LanguageSkills';
import SectionTitle from '../common/SectionTitle';

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <div className="py-10 bg-gradient-to-b from-gray-50 via-slate-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
