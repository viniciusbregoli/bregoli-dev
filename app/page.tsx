import HeroSection from './components/home/HeroProfile';
import GoalsSection from './components/home/GoalsSection';
import ExperienceSection from './components/home/ExperienceSection';
import SkillsSection from './components/home/SkillsGrid';
import EducationSection from './components/home/EducationSection';
import RevealSection from './components/common/RevealSection';

const sections = [HeroSection, GoalsSection, ExperienceSection, SkillsSection, EducationSection];

export default function Home() {
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
