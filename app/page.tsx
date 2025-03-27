import HeroSection from './components/home/HeroProfile';
import GoalsSection from './components/home/GoalsSection';
import ExperienceSection from './components/home/ExperienceSection';
import SkillsSection from './components/home/SkillsGrid';
import EducationSection from './components/home/EducationSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <GoalsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
}
