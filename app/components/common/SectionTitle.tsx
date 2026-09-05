'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  /** Monospace eyebrow rendered above the title, e.g. "experience". */
  eyebrow?: string;
  className?: string;
}

export default function SectionTitle({ children, eyebrow, className = '' }: SectionTitleProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div className={className}
      initial={{ opacity: 1, y: 0 }}
      whileInView={reduced ? { y: 0 } : { y: [18, 0] }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.4 }}
      animate={reduced ? { opacity: 1, y: 0 } : undefined}
    >
      {eyebrow && <p className="mono-label mb-3">{eyebrow}</p>}
      <h2 className="studio-section-title">{children}</h2>
    </motion.div>
  );
}
