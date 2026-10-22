'use client';

import Image from 'next/image';
import { useLanguage } from '../../(core)/i18n/context';
import { Language } from '../../(core)/i18n/translations';
import { cvFileName, cvPath } from '../../(core)/cv';
import { getExperienceData } from '../home/experience/experienceData';
import { getEducationData } from '../home/education/educationData';
import {
  levelWidth,
  softSkillGroups,
  spokenLanguages,
  technicalSkills,
} from '../home/skills/skillsData';
import { pick } from './pick';
import RetroWindow from './RetroWindow';

export default function RetroHome() {
  const { t, language } = useLanguage();
  const experiences = getExperienceData();
  const educations = getEducationData();
  const current = experiences[0];

  return (
    <>
      <RetroWindow title="welcome.html">
        <h2>
          {t('hero.greeting')} {t('hero.name')}
        </h2>
        <p>
          <b>{t('hero.professionalClaim')}</b>
        </p>
        <p>{t('hero.description')}</p>
        <p>
          <i>{t('retro.nowDoing')}:</i> {pick(current.position, language)} @{' '}
          <b>{current.company}</b>
        </p>
        <p className="mt-3 flex flex-wrap items-center gap-3">
          <a className="retro-btn" href={cvPath(language)} download={cvFileName(language)}>
            💾 {t('hero.cta')}
          </a>
          <span className="retro-new retro-blink">{t('retro.new')}</span>
        </p>
      </RetroWindow>

      <RetroWindow title="mission.txt">
        <h2>{t('goals.title')}</h2>
        <h3>🎯 {t('goals.shortTerm')}</h3>
        <p>{t('goals.shortTermDesc')}</p>
        <h3>🧭 {t('goals.longTerm')}</h3>
        <p>{t('goals.longTermDesc')}</p>
      </RetroWindow>

      <RetroWindow title="experience.xls" id="experience">
        <h2>{t('experience.title')}</h2>
        <div className="overflow-x-auto">
          <table className="retro-table">
            <tbody>
              {experiences.map((exp) => (
                <ExperienceRows key={exp.company} exp={exp} language={language} />
              ))}
            </tbody>
          </table>
        </div>
      </RetroWindow>

      <RetroWindow title="skills.doc" id="skills">
        <h2>{t('skills.title')}</h2>

        <h3>{t('skills.technical')}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
          {technicalSkills.map((group) => (
            <div key={group.category}>
              <p>
                <u>{group.category}</u>
              </p>
              <ul className="retro-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3>{t('skills.soft')}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          {softSkillGroups.map((group) => (
            <div key={group.categoryKey}>
              <p>
                <u>{t(group.categoryKey)}</u>
              </p>
              <ul className="retro-list">
                {group.skillKeys.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3>{t('skills.languages')}</h3>
        <table className="w-full">
          <tbody>
            {spokenLanguages.map((lang) => (
              <tr key={lang.name}>
                <td className="py-1 pr-3 whitespace-nowrap">
                  {lang.flag} {lang.name}
                </td>
                <td className="py-1 w-full">
                  <div className="retro-progress" title={lang.level}>
                    <span style={{ width: levelWidth[lang.level] }} />
                  </div>
                </td>
                <td className="py-1 pl-3 whitespace-nowrap" style={{ fontSize: 12 }}>
                  {lang.level}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </RetroWindow>

      <RetroWindow title="education.txt" id="education">
        <h2>{t('education.title')}</h2>
        {educations.map((edu) => (
          <div key={edu.institution} className="flex items-start gap-3 mt-3">
            <Image
              src={edu.logo}
              alt=""
              width={48}
              height={48}
              className="retro-frame shrink-0 object-contain"
              style={{ width: 48, height: 48 }}
            />
            <p>
              <b>{edu.institution}</b>
              <br />
              {pick(edu.program, language)}
              <br />
              <small>
                {pick(edu.period, language)} · {edu.location}
              </small>
            </p>
          </div>
        ))}
      </RetroWindow>
    </>
  );
}

function ExperienceRows({
  exp,
  language,
}: {
  exp: ReturnType<typeof getExperienceData>[number];
  language: Language;
}) {
  return (
    <>
      <tr>
        <th scope="row" className="whitespace-nowrap">
          {pick(exp.period, language)}
        </th>
        <td>
          <b>{exp.company}</b>
          <br />
          <small>{exp.location}</small>
        </td>
        <td>
          <i>{pick(exp.position, language)}</i>
        </td>
      </tr>
      <tr className="retro-table-detail">
        <td colSpan={3}>
          {pick(exp.description, language)}
          <br />
          <small>
            <b>Tech:</b> {exp.technologies.map((tech) => pick(tech, language)).join(' · ')}
          </small>
        </td>
      </tr>
    </>
  );
}
