// app/components/home/education/EducationDetails.tsx

interface EducationDetailsProps {
  institution: string;
  program: string;
  period: string;
  location: string;
}

export default function EducationDetails({
  institution,
  program,
  period,
  location,
}: EducationDetailsProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">{institution}</h3>
      <p className="text-gray-800 dark:text-white font-medium mt-1">{program}</p>
      <p className="text-gray-600 dark:text-gray-300 mt-1">{period}</p>
      <p className="text-gray-500 dark:text-gray-400 mt-1">{location}</p>
    </div>
  );
}
