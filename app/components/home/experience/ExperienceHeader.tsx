// app/components/home/experience/ExperienceHeader.tsx

interface ExperienceHeaderProps {
  company: string;
  position: string;
}

export default function ExperienceHeader({ company, position }: ExperienceHeaderProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{company}</h3>
      <h4 className="text-lg text-blue-600 dark:text-blue-400 mt-1 font-medium">{position}</h4>
    </div>
  );
}
