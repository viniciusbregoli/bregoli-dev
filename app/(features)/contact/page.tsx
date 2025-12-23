'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../(core)/i18n/context';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';
import SectionTitle from '../../components/common/SectionTitle';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-blob" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle className="text-gray-900 dark:text-white mb-20 text-center">
          <span className="text-gradient-rose font-black text-5xl md:text-7xl">
            {t('contact.title')}
          </span>
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-stretch"
        >
          <motion.div variants={itemVariants}>
            <ContactInfo />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-morphism rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-white/20 dark:border-white/10 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <h2 className="text-9xl font-black select-none">MAIL</h2>
            </div>

            <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white relative z-10">
              <span className="text-gradient-rose">{t('contact.sendMessage')}</span>
            </h2>

            <div className="relative z-10">
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
