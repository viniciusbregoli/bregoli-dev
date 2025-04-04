'use client';

import { useTheme } from '../../(core)/theme/context';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center space-x-2 bg-slate-100 dark:bg-gray-700 hover:bg-slate-200 dark:hover:bg-gray-600 text-slate-800 dark:text-white rounded-md px-3 py-2 transition-colors h-11 w-11"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <>
          <FaSun className="text-yellow-300" size={18} />
        </>
      ) : (
        <>
          <FaMoon className="text-slate-600" size={18} />
        </>
      )}
    </button>
  );
}
