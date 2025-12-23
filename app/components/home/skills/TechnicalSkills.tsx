'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../../(core)/i18n/context';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function TechnicalSkills() {
  const { t } = useLanguage();

  const technicalSkills = [
    {
      category: 'Programming',
      icon: <FaCode className="w-6 h-6 text-primary" />,
      skills: ['Python', 'Java', 'JavaScript', 'Next.js', 'C', 'PHP'],
    },
    {
      category: 'Infrastructure & Databases',
      icon: <FaServer className="w-6 h-6 text-secondary" />,
      skills: ['SQL', 'PostgreSQL', 'Windows', 'Linux', 'Docker', 'AWS'],
    },
    {
      category: 'Tools',
      icon: <FaTools className="w-6 h-6 text-accent" />,
      skills: ['Git', 'VS Code', 'IntelliJ', 'Postman', 'YouTrack', 'Jira'],
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="glass-morphism rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <FaCode className="w-32 h-32" />
      </div>

      <h3 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        <span className="text-gradient">{t('skills.technical')}</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {technicalSkills.map((category, index) => (
          <motion.div key={index} variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 dark:bg-white/5 rounded-2xl p-4 shadow-inner">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                {category.category}
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm transition-colors hover:border-primary/50 dark:hover:border-primary/50"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
