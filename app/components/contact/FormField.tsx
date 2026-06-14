'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../(core)/utils/cn';

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
  const fieldClassName = cn(
    'w-full px-4 py-3 rounded-lg bg-background border text-foreground placeholder:text-muted/60 focus:outline-none transition-colors',
    error
      ? 'border-red-500/60 focus:border-red-500'
      : 'border-line focus:border-primary/60',
  );

  return (
    <div>
      <label htmlFor={id} className="mono-label text-muted block mb-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          className={cn(fieldClassName, 'resize-none')}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={fieldClassName}
          placeholder={placeholder}
        />
      )}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-red-500 text-sm flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          {error}
        </motion.p>
      )}
    </div>
  );
}
