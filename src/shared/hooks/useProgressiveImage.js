import { useState, useEffect, useRef } from 'react';

/**
 * 🚀 Hook para carga progresiva de imágenes con SEO optimizado
 * - Intersection Observer para lazy loading
 * - Preload de imágenes críticas
 * - Optimización para Core Web Vitals
 */
export const useProgressiveImage = (src, options = {}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();
  
  const {
    threshold = 0.1,
    rootMargin = '50px',
    priority = false,
    preload = false
  } = options;

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (priority || preload) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, priority, preload]);

  // Cargar imagen cuando esté en viewport
  useEffect(() => {
    if (!isInView || !src) return;

    const img = new Image();
    
    img.onload = () => {
      setIsLoaded(true);
      // Disparar evento para Core Web Vitals
      if (priority) {
        const now = performance.now();
        performance.mark('largest-contentful-paint-candidate', { startTime: now });
      }
    };
    
    img.onerror = () => {
      setHasError(true);
    };
    
    img.src = src;
  }, [isInView, src, priority]);

  return {
    imgRef,
    isLoaded,
    hasError,
    isInView
  };
};

/**
 * 🎯 Hook para preload de imágenes críticas
 */
export const useImagePreload = (imageSources = []) => {
  const [preloadedImages, setPreloadedImages] = useState(new Set());

  useEffect(() => {
    const preloadPromises = imageSources.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setPreloadedImages(prev => new Set([...prev, src]));
          resolve(src);
        };
        img.onerror = reject;
        img.src = src;
      });
    });

    Promise.allSettled(preloadPromises);
  }, [imageSources]);

  return preloadedImages;
};

/**
 * 📊 Hook para optimización de imágenes según dispositivo
 */
export const useResponsiveImages = () => {
  const [deviceType, setDeviceType] = useState('desktop');
  const [pixelRatio, setPixelRatio] = useState(1);

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      setPixelRatio(window.devicePixelRatio || 1);
      
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    updateDeviceInfo();
    window.addEventListener('resize', updateDeviceInfo);
    
    return () => window.removeEventListener('resize', updateDeviceInfo);
  }, []);

  const getOptimalImageSize = (baseWidth, baseHeight) => {
    const multiplier = Math.min(pixelRatio, 2); // Limitar a 2x para balance calidad/rendimiento
    
    const sizeMultipliers = {
      mobile: 0.5,
      tablet: 0.75,
      desktop: 1
    };

    const deviceMultiplier = sizeMultipliers[deviceType];
    
    return {
      width: Math.round(baseWidth * deviceMultiplier * multiplier),
      height: Math.round(baseHeight * deviceMultiplier * multiplier)
    };
  };

  return {
    deviceType,
    pixelRatio,
    getOptimalImageSize
  };
};
