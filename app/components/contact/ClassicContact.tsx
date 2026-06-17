'use client';

import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../../(core)/i18n/context';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import SectionTitle from '../common/SectionTitle';

// Transform only (no opacity) so the glass panels keep their `backdrop-filter`
// during the reveal.
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { y: 20 },
  visible: { y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ClassicContact() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen pt-12 pb-20">
      <div className="max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        <SectionTitle eyebrow="contact" className="mb-12">
          {t('contact.title')}
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-start"
        >
          <motion.div variants={itemVariants} className="panel p-8 md:p-10">
            <h2 className="mono-label mb-6">{t('contact.getInTouch')}</h2>
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
