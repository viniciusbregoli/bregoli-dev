import { EducationType } from './educationData';
import { Language } from '../../../(core)/i18n/translations';
import EducationLogo from './EducationLogo';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

interface EducationCardProps {
  education: EducationType;
  currentLanguage: Language;
}

export default function EducationCard({ education, currentLanguage }: EducationCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-5 panel p-6 hover:border-primary/40 transition-colors duration-300">
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
    </div>
  );
}
