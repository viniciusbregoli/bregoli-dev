'use client';

import { useTheme } from '../theme/context';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-md px-3 py-2 transition-colors"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <FaSun className="text-yellow-300" />
      ) : (
        <FaMoon className="text-gray-300" />
      )}
    </button>
  );
}
