/**
 * 🎯 Componente para prevenir Cumulative Layout Shift (CLS)
 * Reserva espacio para elementos que se cargan dinámicamente
 */

const CLSOptimizer = ({ children, className = "", minHeight, aspectRatio }) => {
  const style = {};
  
  if (minHeight) {
    style.minHeight = minHeight;
  }
  
  if (aspectRatio) {
    style.aspectRatio = aspectRatio;
  }

  return (
    <div 
      className={`cls-container ${className}`} 
      style={style}
    >
      {children}
    </div>
  );
};

// Componente para reservar espacio de imágenes antes de cargar
export const ImagePlaceholder = ({ 
  width, 
  height, 
  aspectRatio = "16/9", 
  className = "",
  children 
}) => {
  return (
    <div 
      className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
      style={{
        width: width || '100%',
        height: height || 'auto',
        aspectRatio: aspectRatio
      }}
    >
      {children}
    </div>
  );
};

export default CLSOptimizer;
