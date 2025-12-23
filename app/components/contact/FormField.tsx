'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FormFieldProps {
  type: 'text' | 'email' | 'textarea';
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: string;
  label: string;
  placeholder: string;
  rows?: number;
}

export default function FormField({
  type,
  id,
  name,
  value,
  onChange,
  error,
  label,
  placeholder,
  rows = 4,
}: FormFieldProps) {
  const baseClassName = `w-full px-6 py-4 rounded-2xl focus:outline-none bg-white/50 dark:bg-white/5 backdrop-blur-md border transition-all duration-300 ${error
    ? 'border-red-500/50 focus:border-red-500'
    : 'border-gray-200 dark:border-white/10 focus:border-primary/50 dark:focus:border-primary/50 focus:ring-4 focus:ring-primary/10'
    } text-lg text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600`;

  return (
    <div className="group">
      <label
        htmlFor={id}
        className="block text-sm font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 group-focus-within:text-primary transition-colors"
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`${baseClassName} resize-none`}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={baseClassName}
          placeholder={placeholder}
        />
      )}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-red-500 font-bold text-sm flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          {error}
        </motion.p>
      )}
    </div>
  );
}
