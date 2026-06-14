'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { useLanguage } from '../../(core)/i18n/context';

interface SuccessMessageProps {
  message: string;
}

export default function SuccessMessage({ message }: SuccessMessageProps) {
  const { language } = useLanguage();

  const titles: Record<string, string> = {
    en: 'Thank you!',
    pt: 'Obrigado!',
    de: 'Vielen Dank!',
    es: '¡Gracias!',
    zh: '谢谢！',
  };
  const title = titles[language] ?? titles.en;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-lg p-8 border border-primary/30 bg-primary/5 text-center"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/15 text-primary rounded-full mb-5">
        <FiCheckCircle className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted leading-relaxed max-w-md mx-auto">{message}</p>
    </motion.div>
  );
}
