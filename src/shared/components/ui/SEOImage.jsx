import { useState, useEffect, useRef } from 'react';

/**
 * 🖼️ Componente de imagen optimizado para SEO y Core Web Vitals
 * - Lazy loading nativo con intersection observer fallback
 * - Alt text descriptivo automático
 * - Carga progresiva con placeholder
 * - Nombres semánticos para mejor indexación
 * - Aspectos de accesibilidad WCAG 2.1
 */
const SEOImage = ({ 
  src, 
  alt, 
  title, 
  className = '', 
  width,
  height,
  loading = 'lazy',
  sizes,
  priority = false,
  placeholder = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef();

  // Intersection Observer para lazy loading mejorado
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Cargar 50px antes de ser visible
        threshold: 0.1
      }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  // Generar URL completa para mejor SEO
  const fullSrc = src.startsWith('http') ? src : `${window.location.origin}${src}`;

  // Alt text automático si no se proporciona
  const finalAlt = alt || generateSEOAlt(src);
  const finalTitle = title || generateSEOTitle(src);

  // Loading strategy optimizado
  const finalLoading = priority ? 'eager' : loading;

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={width && height ? { aspectRatio: `${width}/${height}` } : {}}
    >
      {/* Placeholder skeleton */}
      {placeholder && !isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Imagen principal */}
      {(isInView || priority) && (
        <img
          src={fullSrc}
          alt={finalAlt}
          title={finalTitle}
          width={width}
          height={height}
          loading={finalLoading}
          sizes={sizes}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`
            transition-opacity duration-300
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            ${hasError ? 'hidden' : 'block'}
            w-full h-full object-cover
          `}
          // Atributos adicionales para SEO
          itemProp="image"
          {...props}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Imagen no disponible</span>
        </div>
      )}
    </div>
  );
};

/**
 * Genera alt text SEO optimizado basado en el nombre del archivo
 */
function generateSEOAlt(src) {
  try {
    const filename = src.split('/').pop().split('.')[0];
    const words = filename
      .replace(/[-_]/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .toLowerCase()
      .split(' ')
      .filter(word => word.length > 2)
      .join(' ');
    
    return `${words} - Clínica Norte Especialidades SAS`;
  } catch {
    return 'Imagen de Clínica Norte Especialidades SAS';
  }
}

/**
 * Genera title SEO optimizado
 */
function generateSEOTitle(src) {
  try {
    const alt = generateSEOAlt(src);
    return `${alt} | Servicios médicos en La Unión, Nariño`;
  } catch {
    return 'Clínica Norte Especialidades SAS - La Unión, Nariño';
  }
}

export default SEOImage;
