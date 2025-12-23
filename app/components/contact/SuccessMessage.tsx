'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { useLanguage } from '../../(core)/i18n/context';

interface SuccessMessageProps {
  message: string;
}

export default function SuccessMessage({ message }: SuccessMessageProps) {
  const { language } = useLanguage();

  const title = language === 'en' ? 'Thank you!' : language === 'pt' ? 'Obrigado!' : 'Vielen Dank!';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-morphism rounded-3xl p-10 border border-green-500/30 bg-green-500/5 text-center"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 text-green-500 rounded-full mb-6">
        <FiCheckCircle className="w-10 h-10" />
      </div>
      <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-xl font-medium text-gray-700 dark:text-gray-300 leading-relaxed max-w-md mx-auto">
        {message}
      </p>
    </motion.div>
  );
}
