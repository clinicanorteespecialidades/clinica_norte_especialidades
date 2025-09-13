import { useEffect } from 'react';
import { CLINIC_INFO, SEO_CONFIG } from '../../constants/config';

const SEOHead = ({ 
  title, 
  description, 
  keywords = '', 
  canonicalUrl = '',
  ogImage = '/images/hero/clinica-norte-especialidades-la-union-nariño.jpg',
  ogType = 'website',
  structuredData = null,
  noIndex = false,
}) => {
  useEffect(() => {
    // Construir título completo
    const fullTitle = title ? `${title} | ${CLINIC_INFO.name}` : `${CLINIC_INFO.name} - ${CLINIC_INFO.slogan}`;
    
    // URL canónica - usar el dominio de producción como fallback
    const canonical = canonicalUrl || 
      (typeof window !== 'undefined' ? window.location.href : SEO_CONFIG.url);
    
    // Imagen Open Graph completa
    const ogImageUrl = ogImage.startsWith('http') 
      ? ogImage 
      : `${typeof window !== 'undefined' ? window.location.origin : SEO_CONFIG.url}${ogImage}`;

    // Keywords por defecto para clínicas médicas optimizado
    const defaultKeywords = 'clínica médica La Unión Nariño, IPS certificada, citas médicas online, especialistas médicos Nariño, servicios salud, consulta médica, medicina general, exámenes médicos, atención integral, telemedicina';
    const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

    // Actualizar título
    document.title = fullTitle;
    
    // Función para actualizar o crear meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Función para actualizar o crear link tags
    const updateLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Meta tags básicos
    updateMetaTag('description', description);
    updateMetaTag('keywords', finalKeywords);
    
    // Canonical URL
    if (canonical) {
      updateLinkTag('canonical', canonical);
    }
    
    // Robot tags y meta adicionales para SEO
    updateMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('bingbot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Geo tags para SEO local
    updateMetaTag('geo.region', 'CO-NAR');
    updateMetaTag('geo.placename', 'La Unión, Nariño, Colombia');
    updateMetaTag('geo.position', '1.6014;-77.0683');
    updateMetaTag('ICBM', '1.6014, -77.0683');
    
    // Meta adicionales para mejor SEO
    updateMetaTag('language', 'es-CO');
    updateMetaTag('author', CLINIC_INFO.name);
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('distribution', 'global');
    
    // Open Graph / Facebook
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImageUrl, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:site_name', CLINIC_INFO.name, true);
    updateMetaTag('og:locale', 'es_CO', true);
    
    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImageUrl);
    
    // Información del negocio local - Coordenadas corregidas
    updateMetaTag('geo.region', 'CO-NAR');
    updateMetaTag('geo.placename', 'La Unión, Nariño');
    updateMetaTag('geo.position', `${CLINIC_INFO.location.lat};${CLINIC_INFO.location.lng}`);
    updateMetaTag('ICBM', `${CLINIC_INFO.location.lat}, ${CLINIC_INFO.location.lng}`);
    
    // Meta tags adicionales para SEO médico
    updateMetaTag('theme-color', '#0ea5e9');
    updateMetaTag('msapplication-TileColor', '#0ea5e9');
    updateMetaTag('application-name', CLINIC_INFO.name);
    updateMetaTag('apple-mobile-web-app-title', CLINIC_INFO.name);
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    
    // Tags médicos específicos mejorados
    updateMetaTag('medical.specialty', 'General Medicine, Internal Medicine, Pediatrics, Gynecology, Cardiology, Laboratory Services');
    updateMetaTag('business.type', 'Healthcare Provider');
    updateMetaTag('medical.type', 'clinic');
    updateMetaTag('medical.region', 'nariño,colombia,la-union');
    
    // Tags para mejor indexación local
    updateMetaTag('locality', 'La Unión');
    updateMetaTag('region', 'Nariño');
    updateMetaTag('country-name', 'Colombia');
    updateMetaTag('postal-code', '524001');
    
    // Datos estructurados JSON-LD
    if (structuredData) {
      // Remover script anterior si existe
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Crear nuevo script
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, structuredData, noIndex]);

  return null; // Este componente no renderiza nada visible
};

export default SEOHead;
