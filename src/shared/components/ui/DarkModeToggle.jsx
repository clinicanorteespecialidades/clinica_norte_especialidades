import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useDarkMode } from '../../hooks/useDarkMode';

const DarkModeToggle = ({ className = '', showLabel = false }) => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className={`
        relative inline-flex items-center justify-center
        w-10 h-10 rounded-full
        bg-gray-100 hover:bg-gray-200 
        dark:bg-gray-800 dark:hover:bg-gray-700
        text-gray-600 dark:text-gray-300
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        dark:focus:ring-offset-gray-900
        ${className}
        `}
            aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={isDarkMode ? 'Modo claro' : 'Modo oscuro'}
        >
            <div className="relative w-5 h-5">
                {/* Sol - Modo claro */}
                <SunIcon
                    className={`
            absolute inset-0 w-5 h-5 
            transition-all duration-300 ease-in-out
            ${isDarkMode
                            ? 'opacity-0 scale-0 rotate-90'
                            : 'opacity-100 scale-100 rotate-0'
                        }
            `}
                />

                {/* Luna - Modo oscuro */}
                <MoonIcon
                    className={`
            absolute inset-0 w-5 h-5
            transition-all duration-300 ease-in-out
            ${isDarkMode
                            ? 'opacity-100 scale-100 rotate-0'
                            : 'opacity-0 scale-0 -rotate-90'
                        }
            `}
                />
            </div>

            {showLabel && (
                <span className="ml-2 text-sm font-medium">
                    {isDarkMode ? 'Claro' : 'Oscuro'}
                </span>
            )}
        </button>
    );
};

export default DarkModeToggle;
