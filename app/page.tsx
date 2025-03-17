import HeroSection from './(core)/components/home/heroSection';
import ExperienceSection from './(core)/components/home/experienceSection';
import SkillsSection from './(core)/components/home/skillsSection';
import EducationSection from './(core)/components/home/educationSection';

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
