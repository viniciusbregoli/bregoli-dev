'use client';

import { FiLoader } from 'react-icons/fi';

interface SubmitButtonProps {
  isSubmitting: boolean;
  label: string;
}

export default function SubmitButton({ isSubmitting, label }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full flex items-center justify-center gap-2 border border-primary/40 bg-primary/15 text-primary font-mono text-sm font-semibold py-3.5 px-6 rounded-lg backdrop-blur-sm transition-colors hover:bg-primary/25 hover:border-primary/60 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {isSubmitting && <FiLoader className="animate-spin" />}
      {label}
    </button>
  );
}
