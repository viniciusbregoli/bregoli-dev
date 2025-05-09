'use client';

import { motion } from 'framer-motion';
import HeroSection from './components/home/HeroProfile';
import GoalsSection from './components/home/GoalsSection';
import ExperienceSection from './components/home/ExperienceSection';
import SkillsSection from './components/home/SkillsGrid';
import EducationSection from './components/home/EducationSection';

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const sectionTransition = {
  duration: 0.5,
  ease: "easeOut",
};

export default function Home() {
  return (
    <div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <GoalsSection />
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <ExperienceSection />
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <SkillsSection />
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <EducationSection />
      </motion.div>
    </div>
  );
}
