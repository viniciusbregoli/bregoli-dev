'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '../../(core)/i18n/context';
import { projects } from '../../(features)/projects/projectData';
import HeroSection from './HeroProfile';
import StudioProjectList from '../projects/StudioProjectList';
import SectionTitle from '../common/SectionTitle';
import { getEducationData } from './education/educationData';
import { getExperienceData } from './experience/experienceData';
import { technicalSkills, softSkillGroups, spokenLanguages } from './skills/skillsData';

export default function ClassicHome() {
  const [openJobs, setOpenJobs] = useState<Set<number>>(() => new Set());
  const reduced = useReducedMotion();
  const { t, language } = useLanguage();
  const education = [...getEducationData()].reverse();
  const experiences = getExperienceData();
  const selected = [...projects]
    .sort((a, b) => Number(a.id === 'bregoli-dev') - Number(b.id === 'bregoli-dev'))
    .slice(0, 3);

  return (
    <>
      <HeroSection />
      <div className="studio-container">
        <section id="work" className="studio-section">
          <div className="studio-section-heading">
            <SectionTitle eyebrow={`01 / ${t('studio.selected')}`}>
              {t('studio.curiosity')}
            </SectionTitle>
            <Link className="studio-text-link" href="/projects">
              {t('nav.projects')} <FiArrowUpRight aria-hidden />
            </Link>
          </div>
          <StudioProjectList projects={selected} />
        </section>

        <section id="education" className="studio-section">
          <SectionTitle eyebrow={`02 / ${t('education.title')}`}>
            {t('studio.foundation')}
          </SectionTitle>
          <div className="studio-background-grid">
            <p className="studio-background-copy">{t('studio.foundationBody')}</p>
            <div>
              {education.map((item) => (
                <article key={item.institution} className="studio-record">
                  <p className="mono-label">{item.period[language] || item.period.en}</p>
                  <h3>{item.program[language] || item.program.en}</h3>
                  <p>{item.institution}</p>
                  <p className="studio-record-meta">{item.location}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="studio-section">
          <SectionTitle eyebrow={`03 / ${t('experience.title')}`}>
            {t('studio.background')}
          </SectionTitle>
          <div className="studio-experience">
            {experiences.map((item, index) => (
              <article className="studio-job" key={item.company}>
                <button
                  type="button"
                  className="studio-job-trigger"
                  aria-expanded={openJobs.has(index)}
                  aria-controls={`experience-${index}`}
                  onClick={() => setOpenJobs((previous) => {
                    const next = new Set(previous);
                    if (next.has(index)) next.delete(index);
                    else next.add(index);
                    return next;
                  })}
                >
                  <span className="studio-record-meta">
                    {item.period[language] || item.period.en}
                  </span>
                  <span>
                    <strong>{item.company}</strong>
                    <span className="studio-job-position">
                      {item.position[language] || item.position.en}
                    </span>
                  </span>
                  <FiChevronDown aria-hidden />
                </button>
                <motion.div
                  id={`experience-${index}`}
                  initial={false}
                  animate={{ height: openJobs.has(index) ? 'auto' : 0, opacity: openJobs.has(index) ? 1 : 0 }}
                  transition={{ duration: reduced ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden={!openJobs.has(index)}
                  inert={!openJobs.has(index)}
                  className="studio-job-content"
                >
                <div className="studio-job-body">
                  <p>{item.description[language] || item.description.en}</p>
                  <div className="studio-tags">
                    {item.technologies.map((tech, i) => (
                      <span key={i}>{tech[language] || tech.en}</span>
                    ))}
                  </div>
                </div>
                </motion.div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="studio-section">
          <SectionTitle eyebrow={`04 / ${t('skills.title')}`}>{t('studio.skills')}</SectionTitle>
          <div className="studio-skill-grid">
            {technicalSkills.map((group) => (
              <div key={group.category}>
                <h3>{group.category}</h3>
                <div className="studio-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <details className="studio-skills-more">
            <summary>
              {t('skills.soft')} / {t('skills.languages')} <FiChevronDown aria-hidden />
            </summary>
            <div className="studio-skill-grid">
              {softSkillGroups.map((group) => (
                <div key={group.categoryKey}>
                  <h3>{t(group.categoryKey)}</h3>
                  <ul className="text-muted space-y-2">
                    {group.skillKeys.map((key) => (
                      <li key={key}>{t(key)}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h3>{t('skills.languages')}</h3>
                <ul className="text-muted space-y-2">
                  {spokenLanguages.map((item) => (
                    <li key={item.name}>
                      {item.name} / {item.level}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        </section>

        <section id="contact" className="studio-section studio-contact">
          <p className="mono-label">05 / {t('nav.contact')}</p>
          <h2>{t('studio.contact')}</h2>
          <div className="studio-actions">
            <Link className="studio-button" href="/contact">
              {t('contact.getInTouch')} <FiArrowUpRight aria-hidden />
            </Link>
            <a
              className="studio-text-link"
              href="https://github.com/viniciusbregoli"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FiArrowUpRight aria-hidden />
            </a>
            <a
              className="studio-text-link"
              href="https://linkedin.com/in/viniciusbregoli"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FiArrowUpRight aria-hidden />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
