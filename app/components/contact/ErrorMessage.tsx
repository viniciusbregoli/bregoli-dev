'use client';

import { motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-morphism rounded-2xl p-6 border border-red-500/30 bg-red-500/5 flex items-center gap-4 text-red-600 dark:text-red-400"
    >
      <FiAlertCircle className="w-6 h-6 flex-shrink-0" />
      <p className="font-bold text-lg">{message}</p>
    </motion.div>
  );
}
