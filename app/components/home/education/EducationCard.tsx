import { EducationType } from './educationData';
import { Language } from '../../../(core)/i18n/translations';
import EducationLogo from './EducationLogo';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import WindowCard from '../../common/WindowCard';

interface EducationCardProps {
  education: EducationType;
  currentLanguage: Language;
}

export default function EducationCard({ education, currentLanguage }: EducationCardProps) {
  return (
    <WindowCard
      title={`~/education/${education.institution.toLowerCase().replace(/\s+/g, '-')}`}
      bodyClassName="p-6 flex flex-col sm:flex-row items-start gap-5"
    >
      <EducationLogo logo={education.logo} institution={education.institution} />

      <div className="flex-grow space-y-3">
        <div>
          <h3 className="text-lg font-bold text-foreground">{education.institution}</h3>
          <p className="text-primary font-medium mt-0.5">
            {education.program[currentLanguage] || education.program.en || ''}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <FiCalendar />
            {education.period[currentLanguage] || education.period.en || ''}
          </span>
          <span className="flex items-center gap-1.5">
            <FiMapPin />
            {education.location}
          </span>
        </div>
      </div>
    </WindowCard>
  );
}
