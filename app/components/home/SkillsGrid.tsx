'use client';

import { useLanguage } from '../../(core)/i18n/context';
import TechnicalSkills from './skills/TechnicalSkills';
import SoftSkills from './skills/SoftSkills';
import LanguageSkills from './skills/LanguageSkills';

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-800 dark:text-white">
          {t('skills.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <TechnicalSkills />
          <SoftSkills />
          <LanguageSkills />
        </div>
      </div>
    </div>
  );
}