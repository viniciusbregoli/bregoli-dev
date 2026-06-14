'use client';

import { useLanguage } from './(core)/i18n/context';
import { getExperienceData } from './components/home/experience/experienceData';
import { getEducationData } from './components/home/education/educationData';
import CommandLine from './components/terminal/CommandLine';
import Cursor from './components/terminal/Cursor';
import { FiDownload } from 'react-icons/fi';

const technicalSkills = [
  { category: 'languages', skills: ['Python', 'Java', 'JavaScript', 'C', 'PHP'] },
  { category: 'frameworks', skills: ['Next.js', 'React', 'Vue.js', 'NodeJS'] },
  { category: 'infra', skills: ['PostgreSQL', 'Docker', 'AWS', 'Linux'] },
  { category: 'tools', skills: ['Git', 'VS Code', 'IntelliJ', 'Postman'] },
];

const spokenLanguages = [
  { name: 'Portuguese', level: 'native' },
  { name: 'English', level: 'fluent' },
  { name: 'Spanish', level: 'advanced' },
  { name: 'German', level: 'intermediate' },
  { name: 'Mandarin', level: 'basic' },
];

export default function Home() {
  const { t, language } = useLanguage();
  const experiences = getExperienceData();
  const educations = getEducationData();

  const handleDownloadCV = () => {
    const cvPaths = { en: '/CV - English.pdf', pt: '/CV - Portugues.pdf', de: '/CV - Deutsch.pdf' };
    const link = document.createElement('a');
    link.href = cvPaths[language] || cvPaths.en;
    link.setAttribute('download', `Vinicius_Bregoli_CV_${language.toUpperCase()}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-10 leading-relaxed">
      {/* whoami */}
      <div>
        <CommandLine command="whoami">
          <div className="space-y-2">
            <p className="text-xl text-primary font-semibold">{t('hero.name')}</p>
            <p className="text-foreground">{t('hero.professionalClaim')}</p>
            <p className="text-muted max-w-2xl">{t('hero.description')}</p>
            <button
              onClick={handleDownloadCV}
              className="mt-2 inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
            >
              <FiDownload /> ./{t('hero.cta').toLowerCase().replace(/\s+/g, '-')}.pdf
            </button>
          </div>
        </CommandLine>
      </div>

      {/* goals */}
      <div>
        <CommandLine command="cat goals.txt">
          <div className="space-y-3 text-muted">
            <p>
              <span className="text-secondary">short_term</span> ={' '}
              <span className="text-foreground">{t('goals.shortTermDesc')}</span>
            </p>
            <p>
              <span className="text-secondary">long_term</span> ={' '}
              <span className="text-foreground">{t('goals.longTermDesc')}</span>
            </p>
          </div>
        </CommandLine>
      </div>

      {/* experience */}
      <div>
        <CommandLine command="git log --oneline experience/">
          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const hash = (0xc0ffee + i * 0x1d4a7).toString(16).slice(0, 7);
              return (
                <div key={i}>
                  <p className="flex flex-wrap items-baseline gap-2">
                    <span className="text-primary">{hash}</span>
                    <span className="text-foreground font-semibold">{exp.company}</span>
                    <span className="text-muted">
                      — {exp.position[language] || exp.position.en}
                    </span>
                  </p>
                  <div className="pl-4 border-l border-line ml-1 mt-1 space-y-1 text-sm">
                    <p className="text-muted">
                      <span className="text-secondary">├</span>{' '}
                      {exp.period[language] || exp.period.en} · {exp.location}
                    </p>
                    <p className="text-muted">
                      <span className="text-secondary">├</span>{' '}
                      {exp.description[language] || exp.description.en}
                    </p>
                    <p className="text-muted flex flex-wrap gap-x-2 gap-y-1">
                      <span className="text-secondary">└</span>
                      {exp.technologies.map((tech, ti) => (
                        <span key={ti} className="text-foreground/80">
                          {tech[language] || tech.en}
                          {ti < exp.technologies.length - 1 && (
                            <span className="text-muted"> ·</span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CommandLine>
      </div>

      {/* skills */}
      <div>
        <CommandLine command="ls -R skills/">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {technicalSkills.map((cat) => (
              <div key={cat.category}>
                <p className="text-secondary">{cat.category}/</p>
                <div className="pl-4">
                  {cat.skills.map((skill) => (
                    <p key={skill} className="text-muted">
                      <span className="text-line">└─</span>{' '}
                      <span className="text-foreground/90">{skill}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <div className="sm:col-span-2">
              <p className="text-secondary">spoken/</p>
              <div className="pl-4 flex flex-wrap gap-x-6">
                {spokenLanguages.map((l) => (
                  <p key={l.name} className="text-muted">
                    <span className="text-foreground/90">{l.name}</span>{' '}
                    <span className="text-primary">[{l.level}]</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </CommandLine>
      </div>

      {/* education */}
      <div>
        <CommandLine command="cat education.md">
          <div className="space-y-3">
            {educations.map((edu, i) => (
              <div key={i}>
                <p className="text-foreground">
                  <span className="text-primary">#</span> {edu.institution}
                </p>
                <p className="pl-4 text-muted text-sm">
                  {edu.program[language] || edu.program.en} ·{' '}
                  {edu.period[language] || edu.period.en} · {edu.location}
                </p>
              </div>
            ))}
          </div>
        </CommandLine>
      </div>

      {/* prompt */}
      <div>
        <p className="flex items-center gap-2">
          <span className="text-secondary">
            vinicius@bregoli-dev<span className="text-muted">:</span>
            <span className="text-primary">~</span>
          </span>
          <span className="text-muted">$</span>
          <Cursor />
        </p>
      </div>
    </div>
  );
}
