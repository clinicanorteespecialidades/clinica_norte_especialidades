import { useState, useEffect } from 'react';

export const useDarkMode = () => {
    // Obtener preferencia inicial del localStorage o del sistema
    const getInitialTheme = () => {
        // Verificar localStorage primero
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }

        // Si no hay preferencia guardada, usar la del sistema
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

    useEffect(() => {
        const root = window.document.documentElement;

        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // Escuchar cambios en la preferencia del sistema
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e) => {
            // Solo actualizar si no hay preferencia guardada manualmente
            const savedTheme = localStorage.getItem('theme');
            if (!savedTheme) {
                setIsDarkMode(e.matches);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };

    return {
        isDarkMode,
        toggleDarkMode,
        setDarkMode: setIsDarkMode
    };
};
