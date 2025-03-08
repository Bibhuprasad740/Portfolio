import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 rounded-full transition-all duration-500 ease-in-out hover:scale-110 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/30 z-20"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      ) : (
        <Sun className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
};

export default ThemeToggle;