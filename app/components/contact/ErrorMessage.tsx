'use client';

import { motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg p-4 border border-red-500/30 bg-red-500/5 flex items-center gap-3 text-red-500"
    >
      <FiAlertCircle className="w-5 h-5 shrink-0" />
      <p className="text-sm">{message}</p>
    </motion.div>
  );
}
