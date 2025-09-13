
const LoadingSpinner = ({ size = 'medium', text = 'Cargando...' }) => {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-20 h-20',
    large: 'w-28 h-28'
  };

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center">
        {/* Logo animado */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img
            src="/images/icons/logos/clinica-norte-logo-principal.svg"
            alt="Logo Clínica Norte"
            className={`${size === 'small' ? 'w-8 h-8' : size === 'large' ? 'w-16 h-16' : 'w-12 h-12'} animate-pulse drop-shadow-xl`}
            style={{ filter: 'drop-shadow(0 2px 8px rgba(14,165,233,0.15))' }}
            draggable="false"
          />
        </div>
        {/* Spinner institucional */}
        <div
          className={`${sizeClasses[size]} border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin bg-white/80 dark:bg-gray-900/80`}
          style={{ boxShadow: '0 4px 24px 0 rgba(14,165,233,0.10)' }}
        ></div>
      </div>
      <p className="mt-6 text-primary-600 dark:text-primary-400 font-semibold text-lg tracking-wide animate-fade-in-up text-center">
        {text}
      </p>
    </div>
  );
};

export default LoadingSpinner;
