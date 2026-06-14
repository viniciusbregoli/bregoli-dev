import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  /** Monospace eyebrow rendered above the title, e.g. "experience". */
  eyebrow?: string;
  className?: string;
}

export default function SectionTitle({ children, eyebrow, className = '' }: SectionTitleProps) {
  return (
    <div className={className}>
      {eyebrow && <p className="mono-label mb-3">{`// ${eyebrow}`}</p>}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{children}</h2>
    </div>
  );
}
