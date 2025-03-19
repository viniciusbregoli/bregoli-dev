'use client';

import React from 'react';

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
  rows = 3,
}: FormFieldProps) {
  const baseClassName = `w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
    error
      ? 'border-red-500 focus:ring-red-500 dark:border-red-500'
      : 'border-gray-300 focus:ring-blue-500 dark:border-gray-600'
  }`;

  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          className={baseClassName}
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
      {error && <p className="mt-1 text-red-600 dark:text-red-400 text-sm">{error}</p>}
    </div>
  );
}
