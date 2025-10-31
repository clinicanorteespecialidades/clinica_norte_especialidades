import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { CLINIC_INFO, ROUTES } from '../../constants/config';
import DarkModeToggle from '../ui/DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: ROUTES.HOME },
    { name: 'Nosotros', href: ROUTES.ABOUT },
    { name: 'Servicios', href: ROUTES.SERVICES },
    { name: 'Especialidades', href: ROUTES.SPECIALTIES },
    { name: 'Noticias', href: ROUTES.NEWS },
    { name: 'Contacto', href: ROUTES.CONTACT },
  ];

  const isActiveRoute = (href) => {
    if (href === ROUTES.HOME) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm dark:shadow-gray-800/50 sticky top-0 z-50 transition-colors duration-300 cls-prevent-header">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-24 lg:h-28">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to={ROUTES.HOME}
              className="flex flex-col items-center text-center leading-tight"
              aria-label={`${CLINIC_INFO.name} - Ir a inicio`}
            >
              <div className="w-32 h-20 md:w-36 md:h-24 lg:w-40 lg:h-28 flex items-center justify-center">
                <img
                  src="/images/icons/logos/clinica-norte-logo-principal.svg"
                  alt={`Logo de ${CLINIC_INFO.name}`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-12 flex items-center space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300
                ${isActiveRoute(item.href)
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                >
                  {item.name}
                  {/* Línea animada debajo */}
                  <span className={`absolute left-0 -bottom-1 h-[2px] bg-primary-600 dark:bg-primary-400 transition-all duration-300
                ${isActiveRoute(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Button & Dark Mode Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <DarkModeToggle />
            <Link
              to={ROUTES.CONTACT}
              className="px-5 py-2 rounded-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Agendar Cita
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary-600 hover:bg-gray-100 transition"
              aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isMenuOpen}
              type="button"
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200
                ${isActiveRoute(item.href)
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-400/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3">
                {/* Dark Mode Toggle en mobile */}
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Modo Oscuro</span>
                  <DarkModeToggle />
                </div>
                <Link
                  to={ROUTES.CONTACT}
                  className="block w-full text-center px-4 py-2 rounded-full bg-primary-600 dark:bg-primary-500 text-white font-medium shadow hover:shadow-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Agendar Cita
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;