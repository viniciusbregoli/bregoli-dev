'use client';

import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../../(core)/i18n/context';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';
import SectionTitle from '../../components/common/SectionTitle';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen pt-12 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle eyebrow="contact" className="mb-12">
          {t('contact.title')}
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-start"
        >
          <motion.div variants={itemVariants}>
            <ContactInfo />
          </motion.div>

          <motion.div variants={itemVariants} className="panel p-8 md:p-10">
            <h2 className="mono-label mb-8">{t('contact.sendMessage')}</h2>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
