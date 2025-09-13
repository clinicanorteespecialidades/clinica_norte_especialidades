import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline';
import { ROUTES } from '../../constants/config';


const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-950 dark:to-primary-950 transition-colors duration-300 relative overflow-hidden">
      {/* Fondo animado institucional */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-60">
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <ellipse cx="650" cy="-80" rx="320" ry="180" fill="#0ea5e9" fillOpacity="0.08" />
          <ellipse cx="-80" cy="600" rx="320" ry="180" fill="#10b981" fillOpacity="0.07" />
        </svg>
      </div>
      <div className="max-w-md w-full text-center flex flex-col items-center justify-center relative z-10">
        {/* Logo institucional animado con efecto glass */}
        <div className="relative flex flex-col items-center justify-center mb-8">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-full shadow-2xl p-2 border-2 border-primary-100 dark:border-primary-900 animate-fade-in-up">
              <img
                src="/images/icons/logos/clinica-norte-logo-principal.svg"
                alt="Logo Clínica Norte"
                className="w-16 h-16 md:w-20 md:h-20 animate-pulse drop-shadow-xl"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(14,165,233,0.15))' }}
                draggable="false"
              />
            </div>
          </div>
          <div
            className="w-24 h-24 md:w-32 md:h-32 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin bg-white/80 dark:bg-gray-900/80 shadow-xl"
            style={{ boxShadow: '0 4px 24px 0 rgba(14,165,233,0.10)' }}
          ></div>
        </div>
        <h1 className="text-7xl md:text-9xl font-extrabold text-primary-600 dark:text-primary-400 mb-2 tracking-tight drop-shadow-lg animate-fade-in-up">404</h1>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300 animate-fade-in-up">
          ¡Oops! Página no encontrada
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300 animate-fade-in-up">
          No pudimos encontrar la página que buscas.<br />
          <span className="text-primary-600 dark:text-primary-400 font-medium">Clínica Norte Especialidades SAS</span>
        </p>
        <div className="space-y-4 animate-fade-in-up">
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold shadow-lg transition-all duration-300 text-lg gap-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            <HomeIcon className="w-6 h-6" />
            <span>Ir al inicio</span>
          </Link>
          <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
            <p>¿Necesitas ayuda? <Link to={ROUTES.CONTACT} className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300 font-medium underline underline-offset-2">Contáctanos</Link></p>
          </div>
        </div>
        <div className="mt-10 text-xs text-gray-400 dark:text-gray-600 animate-fade-in-up">
          &copy; {new Date().getFullYear()} Clínica Norte Especialidades SAS. Todos los derechos reservados.
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
