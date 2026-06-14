// Single source of truth for the Skills section, shared by the classic view
// (TechnicalSkills / SoftSkills / LanguageSkills) and the terminal `skills`
// command, so both stay identical.
import { TranslationKey } from '../../../(core)/i18n/translations';

export const technicalSkills: { category: string; skills: string[] }[] = [
  { category: 'Programming', skills: ['Python', 'Java', 'JavaScript', 'Next.js', 'C', 'PHP'] },
  { category: 'Infrastructure & Databases', skills: ['SQL', 'PostgreSQL', 'Windows', 'Linux', 'Docker', 'AWS'] },
  { category: 'Tools', skills: ['Git', 'VS Code', 'IntelliJ', 'Postman', 'YouTrack', 'Jira'] },
];

export const softSkillGroups: { categoryKey: TranslationKey; skillKeys: TranslationKey[] }[] = [
  {
    categoryKey: 'skills.soft.communication',
    skillKeys: [
      'skills.soft.teamCollaboration',
      'skills.soft.clientCommunication',
      'skills.soft.problemSolving',
    ],
  },
  {
    categoryKey: 'skills.soft.leadership',
    skillKeys: ['skills.soft.projectManagement', 'skills.soft.teamLeadership', 'skills.soft.strategicPlanning'],
  },
  {
    categoryKey: 'skills.soft.innovation',
    skillKeys: ['skills.soft.creativeThinking', 'skills.soft.processOptimization', 'skills.soft.technicalInnovation'],
  },
  {
    categoryKey: 'skills.soft.professional',
    skillKeys: ['skills.soft.agileMethodologies', 'skills.soft.riskManagement', 'skills.soft.qualityAssurance'],
  },
];

export const spokenLanguages: { name: string; level: string; flag: string }[] = [
  { name: 'English', level: 'Fluent', flag: '🇺🇸' },
  { name: 'Portuguese', level: 'Native', flag: '🇧🇷' },
  { name: 'Spanish', level: 'Advanced', flag: '🇪🇸' },
  { name: 'German', level: 'Intermediate', flag: '🇩🇪' },
  { name: 'Mandarin', level: 'Basic', flag: '🇨🇳' },
];

export const levelWidth: Record<string, string> = {
  Native: '100%',
  Fluent: '95%',
  Advanced: '80%',
  Intermediate: '60%',
  Basic: '35%',
};
