import { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  children: ReactNode;
}

export default function SkillCard({ title, children }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-semibold mb-8 text-blue-700 dark:text-blue-300">{title}</h3>
      {children}
    </div>
  );
}
