import HeroSection from './components/home/HeroSection';
import ExperienceSection from './components/home/EducationCards';
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
