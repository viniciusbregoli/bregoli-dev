import { motion } from 'framer-motion';
import { useLanguage } from '../../../(core)/i18n/context';
import { FaGlobe, FaLanguage } from 'react-icons/fa';

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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export default function LanguageSkills() {
  const { t } = useLanguage();

  const languages = [
    { name: 'English', level: 'Fluent', icon: '🇺🇸', color: 'from-blue-400 to-blue-600' },
    { name: 'Portuguese', level: 'Native', icon: '🇧🇷', color: 'from-green-400 to-green-600' },
    { name: 'Spanish', level: 'Advanced', icon: '🇪🇸', color: 'from-red-400 to-red-600' },
    { name: 'German', level: 'Intermediate', icon: '🇩🇪', color: 'from-amber-400 to-amber-600' },
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
        <FaLanguage className="w-32 h-32" />
      </div>

      <h3 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        <span className="text-gradient-rose">{t('skills.languages')}</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {languages.map((language, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-[2rem] p-6 shadow-xl transition-all duration-300"
          >
            <div className="flex items-center space-x-5">
              <div className="text-4xl filter drop-shadow-lg group-hover:scale-125 transition-transform duration-300">
                {language.icon}
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {language.name}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  {language.level}
                </div>
              </div>
            </div>

            {/* Visual Level Indicator */}
            <div className="mt-6 w-full h-1.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: language.level === 'Native' ? '100%' : language.level === 'Fluent' ? '95%' : language.level === 'Advanced' ? '80%' : '60%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`h-full bg-gradient-to-r ${language.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
