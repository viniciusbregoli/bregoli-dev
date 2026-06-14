// app/components/home/experience/TechnologyBadges.tsx
import { Language } from '../../../(core)/i18n/translations';

interface TechnologyBadgesProps {
  technologies: {
    en: string;
    pt: string;
    de: string;
  }[];
  currentLanguage: Language;
}

const labels: Record<Language, string> = {
  en: 'Technologies',
  pt: 'Tecnologias',
  de: 'Technologien',
};

export default function TechnologyBadges({ technologies, currentLanguage }: TechnologyBadgesProps) {
  return (
    <div>
      <p className="mono-label text-muted mb-3">{labels[currentLanguage]}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="font-mono text-xs px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/80 border border-line"
          >
            {tech[currentLanguage] || tech.en}
          </span>
        ))}
      </div>
    </div>
  );
}
