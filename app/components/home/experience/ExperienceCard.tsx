// app/components/home/experience/ExperienceCard.tsx
import { FiCalendar, FiMapPin, FiBriefcase, FiCode, FiServer, FiCpu } from 'react-icons/fi';
import { Language } from '../../../(core)/i18n/translations';
import { ExperienceType } from './experienceData';
import TechnologyBadges from './TechnologyBadges';
import ExperienceHeader from './ExperienceHeader';
import WindowCard from '../../common/WindowCard';

interface ExperienceCardProps {
  experience: ExperienceType;
  currentLanguage: Language;
}

export default function ExperienceCard({ experience, currentLanguage }: ExperienceCardProps) {
  const getIcon = () => {
    switch (experience.icon) {
      case 'robot':
        return <FiCpu className="w-5 h-5 text-primary" />;
      case 'code':
        return <FiCode className="w-5 h-5 text-primary" />;
      case 'server':
        return <FiServer className="w-5 h-5 text-primary" />;
      default:
        return <FiBriefcase className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <WindowCard title={`~/experience/${experience.company.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
              {getIcon()}
            </div>
            <ExperienceHeader
              company={experience.company}
              position={experience.position[currentLanguage] || experience.position.en || ''}
            />
          </div>

          <div className="flex flex-wrap gap-2 font-mono text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <FiCalendar />
              {experience.period[currentLanguage] || experience.period.en}
            </span>
            <span className="flex items-center gap-1.5">
              <FiMapPin />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted leading-relaxed">
          {experience.description[currentLanguage] || experience.description.en}
        </p>

        {/* Technologies */}
        <div className="pt-4 border-t border-line">
          <TechnologyBadges technologies={experience.technologies} currentLanguage={currentLanguage} />
        </div>
      </div>
    </WindowCard>
  );
}
