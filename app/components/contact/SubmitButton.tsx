'use client';

interface SubmitButtonProps {
  isSubmitting: boolean;
  label: string;
}

export default function SubmitButton({ isSubmitting, label }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-slate-600 hover:bg-slate-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed text-lg"
    >
      {isSubmitting ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {label}
        </>
      ) : (
        label
      )}
    </button>
  );
}
