import { CLINIC_INFO, SEO_CONFIG } from '../constants/config';

/**
 * Genera datos estructurados para la clínica (schema.org/MedicalClinic)
 */
export const generateClinicStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": CLINIC_INFO.name,
  "description": CLINIC_INFO.description,
  "url": typeof window !== 'undefined' ? window.location.origin : SEO_CONFIG.url,
  "telephone": CLINIC_INFO.contact.phone,
  "email": CLINIC_INFO.contact.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": CLINIC_INFO.contact.address,
    "addressLocality": "La Unión",
    "addressRegion": "Nariño",
    "addressCountry": "Colombia",
    "postalCode": "524001"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": CLINIC_INFO.location.lat,
    "longitude": CLINIC_INFO.location.lng
  },
  "openingHours": [
    "Mo-Fr 08:00-17:00",
    "Sa 08:00-12:00"
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
  "medicalSpecialty": [
    "General Medicine",
    "Internal Medicine", 
    "Pediatrics",
    "Gynecology",
    "Cardiology",
    "Laboratory Services",
    "Preventive Medicine",
    "Emergency Care"
  ],
  "availableService": [
    {
      "@type": "MedicalTherapy",
      "name": "Consulta Médica General"
    },
    {
      "@type": "MedicalTherapy", 
      "name": "Medicina Interna"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Consulta Pediátrica"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Ginecología y Obstetricia"
    },
    {
      "@type": "MedicalTest",
      "name": "Exámenes de Laboratorio"
    }
  ],
  "certifications": "IPS Habilitada por Supersalud Colombia",
  "hasMap": `https://maps.google.com/?q=${CLINIC_INFO.location.lat},${CLINIC_INFO.location.lng}`,
  "sameAs": [
    // Redes sociales cuando las tengas
  ]
});

/**
 * Genera datos estructurados para una página de servicio médico
 */
export const generateMedicalServiceStructuredData = (service) => ({
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "MedicalClinic",
    "name": CLINIC_INFO.name,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "La Unión",
      "addressRegion": "Nariño",
      "addressCountry": "Colombia"
    }
  },
  "medicalSpecialty": service.category || "General Medicine"
});

/**
 * Genera datos estructurados para breadcrumbs
 */
export const generateBreadcrumbStructuredData = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

/**
 * Genera datos estructurados para artículos/noticias
 */
export const generateArticleStructuredData = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.excerpt,
  "author": {
    "@type": "Organization",
    "name": CLINIC_INFO.name
  },
  "publisher": {
    "@type": "Organization",
    "name": CLINIC_INFO.name,
    "logo": {
      "@type": "ImageObject",
      "url": typeof window !== 'undefined' ? `${window.location.origin}/logoico.svg` : ''
    }
  },
  "datePublished": article.date,
  "dateModified": article.date,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

/**
 * Genera datos estructurados para FAQ
 */
export const generateFAQStructuredData = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

/**
 * Genera datos estructurados para servicios locales de negocio
 */
export const generateLocalBusinessStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": typeof window !== 'undefined' ? window.location.origin : '',
  "name": CLINIC_INFO.name,
  "description": CLINIC_INFO.description,
  "url": typeof window !== 'undefined' ? window.location.origin : '',
  "telephone": CLINIC_INFO.contact.phone,
  "email": CLINIC_INFO.contact.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": CLINIC_INFO.contact.address,
    "addressLocality": "La Unión",
    "addressRegion": "Nariño", 
    "addressCountry": "Colombia"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": CLINIC_INFO.location.lat,
    "longitude": CLINIC_INFO.location.lng
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00"
    }
  ],
  "priceRange": "$$",
  "hasMap": `https://maps.google.com/?q=${CLINIC_INFO.location.lat},${CLINIC_INFO.location.lng}`
});
