import HeroSection from './HeroProfile';
import GoalsSection from './GoalsSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsGrid';
import EducationSection from './EducationSection';
import RevealSection from '../common/RevealSection';

const sections = [HeroSection, GoalsSection, ExperienceSection, SkillsSection, EducationSection];

export default function ClassicHome() {
  return (
    <div>
      {sections.map((Section, index) => (
        <RevealSection key={index}>
          <Section />
        </RevealSection>
      ))}
    </div>
  );
}
