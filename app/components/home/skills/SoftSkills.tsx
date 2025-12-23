import { motion } from 'framer-motion';
import { useLanguage } from '../../../(core)/i18n/context';
import { FaUsers, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

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

export default function SoftSkills() {
  const { t } = useLanguage();

  const softSkills = [
    {
      category: t('skills.soft.communication'),
      icon: <FaUsers className="w-6 h-6 text-primary" />,
      skills: [
        t('skills.soft.teamCollaboration'),
        t('skills.soft.clientCommunication'),
        t('skills.soft.problemSolving'),
      ],
    },
    {
      category: t('skills.soft.leadership'),
      icon: <FaChartLine className="w-6 h-6 text-secondary" />,
      skills: [
        t('skills.soft.projectManagement'),
        t('skills.soft.teamLeadership'),
        t('skills.soft.strategicPlanning'),
      ],
    },
    {
      category: t('skills.soft.innovation'),
      icon: <FaLightbulb className="w-6 h-6 text-accent" />,
      skills: [
        t('skills.soft.creativeThinking'),
        t('skills.soft.processOptimization'),
        t('skills.soft.technicalInnovation'),
      ],
    },
    {
      category: t('skills.soft.professional'),
      icon: <FaHandshake className="w-6 h-6 text-primary" />,
      skills: [
        t('skills.soft.agileMethodologies'),
        t('skills.soft.riskManagement'),
        t('skills.soft.qualityAssurance'),
      ],
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
        <FaUsers className="w-32 h-32" />
      </div>

      <h3 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        <span className="text-gradient-rose">{t('skills.soft')}</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {softSkills.map((category, index) => (
          <motion.div key={index} variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 dark:bg-white/5 rounded-2xl p-4 shadow-inner">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 italic">
                {category.category}
              </h4>
            </div>
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl px-5 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
