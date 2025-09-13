import { useState, useEffect } from 'react';

/**
 * 🎯 Hook para detectar cuando las fuentes se han cargado completamente
 * Ayuda a prevenir CLS relacionado con cambios de fuentes
 */
export const useFontLoaded = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const checkFonts = async () => {
      try {
        if ('fonts' in document) {
          // Esperar a que se carguen las fuentes principales
          await document.fonts.load('400 16px Inter');
          await document.fonts.load('600 24px Poppins');
          await document.fonts.ready;
          setFontLoaded(true);
        } else {
          // Fallback para navegadores sin soporte
          setTimeout(() => setFontLoaded(true), 150);
        }
      } catch {
        // Si hay error, asumimos que las fuentes están listas
        setFontLoaded(true);
      }
    };

    checkFonts();
  }, []);

  return fontLoaded;
};

/**
 * 🎯 Hook para detectar cuando el DOM está completamente cargado
 */
export const useDocumentReady = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsReady(true);
    } else {
      const handleLoad = () => setIsReady(true);
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return isReady;
};
