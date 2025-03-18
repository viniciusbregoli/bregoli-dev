import HeroSection from './components/home/HeroProfile';
import ExperienceSection from './components/home/ExperienceSection';
import SkillsSection from './components/home/SkillsGrid';
import EducationSection from './components/home/EducationSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
}
