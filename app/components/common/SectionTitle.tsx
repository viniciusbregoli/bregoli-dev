import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2
      className={`text-3xl font-bold mb-10 text-center text-slate-800 dark:text-white ${className}`}
    >
      {children}
    </h2>
  );
}
