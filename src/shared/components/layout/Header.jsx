import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CLINIC_INFO, ROUTES } from '../../constants/config';
import DarkModeToggle from '../ui/DarkModeToggle';

const Header = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const location = useLocation();

  // close "Más..." when clicking outside or on route change
  useEffect(() => {
    function onDocClick(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setIsMoreOpen(false);
      }
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  useEffect(() => {
    setIsMoreOpen(false);
  }, [location.pathname]);

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

          {/* Responsive Navigation: show progressively fewer items as screen narrows.
              Strategy (index-based):
                - items 0-1: always visible
                - items 2-3: visible from md and up
                - items 4+: visible from lg and up
              Remaining items are shown under the "Más..." dropdown on smaller screens.
          */}
          <div className="block">
            <div className="ml-6 flex items-center space-x-4">
              {navigation.map((item, idx) => {
                // compute classes for progressive visibility
                let visibilityClass = 'inline-flex';
                if (idx >= 4) visibilityClass = 'hidden lg:inline-flex';
                else if (idx >= 2) visibilityClass = 'hidden md:inline-flex';

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative ${visibilityClass} px-1 py-2 text-sm font-medium transition-colors duration-300
                      ${isActiveRoute(item.href)
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                      }`}
                  >
                    {item.name}
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-primary-600 dark:bg-primary-400 transition-all duration-300
                      ${isActiveRoute(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                );
              })}

              {/* Más... dropdown - visible when screen < lg */}
              <div className="relative inline-flex lg:hidden" ref={moreRef}>
                <button
                  type="button"
                  onClick={() => setIsMoreOpen((s) => !s)}
                  className="px-3 py-2 text-sm font-medium rounded-md bg-transparent text-gray-700 dark:text-gray-300 hover:text-primary-600 transition"
                  aria-expanded={isMoreOpen}
                  aria-haspopup="menu"
                >
                  Más...
                </button>

                {isMoreOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      {navigation.map((item, idx) => {
                        // render dropdown item only when main item is hidden at this viewport
                        // mirror visibility: show when main has 'hidden md:inline-flex' -> dropdown shows on sm (md:hidden)
                        // and when main has 'hidden lg:inline-flex' -> dropdown shows below lg (lg:hidden)
                        let dropdownVisibility = 'hidden';
                        if (idx >= 4) dropdownVisibility = 'block lg:hidden';
                        else if (idx >= 2) dropdownVisibility = 'block md:hidden';

                        return (
                          <Link
                            key={item.name + '-more'}
                            to={item.href}
                            onClick={() => setIsMoreOpen(false)}
                            className={`${dropdownVisibility} block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Button & Dark Mode Toggle (kept visible) */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <Link
              to={ROUTES.CONTACT}
              className="px-4 py-2 rounded-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm text-center"
            >
              Agendar Cita
            </Link>
          </div>
        </div>

        {/* Note: removed full-screen mobile hamburger menu. The responsive nav above
            progressively hides items and uses the "Más..." dropdown to surface hidden links.
        */}
      </nav>
    </header>
  );
};

export default Header;