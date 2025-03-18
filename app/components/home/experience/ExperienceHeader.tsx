// app/components/home/experience/ExperienceHeader.tsx

interface ExperienceHeaderProps {
  company: string;
  position: string;
}

export default function ExperienceHeader({ company, position }: ExperienceHeaderProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">{company}</h3>
      <h4 className="text-xl text-gray-800 dark:text-white mt-1">{position}</h4>
    </div>
  );
}
