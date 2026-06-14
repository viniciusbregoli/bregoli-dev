'use client';

import { motion, type Variants, type Transition } from 'framer-motion';
import { ReactNode } from 'react';

// Transform only (no opacity): an animated opacity on these wrappers would
// disable `backdrop-filter` on the glass panels inside them mid-reveal.
const variants: Variants = {
  initial: { y: 24 },
  animate: { y: 0 },
};

const transition: Transition = {
  duration: 0.5,
  ease: 'easeOut',
};

type RevealSectionProps = {
  children: ReactNode;
  /** Delay before the reveal animation starts, in seconds. */
  delay?: number;
  className?: string;
};

/**
 * Fades and slides its children into view once, when scrolled into the
 * viewport. Replaces the repeated motion.div wrappers across pages.
 */
export default function RevealSection({ children, delay = 0, className }: RevealSectionProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
