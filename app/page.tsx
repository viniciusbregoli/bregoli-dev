import HeroSection from './(core)/components/home/heroSection';
import SkillsSection from './(core)/components/home/skillsSection';
import EducationSection from './(core)/components/home/educationSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
}
