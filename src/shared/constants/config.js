// Información de la clínica
export const CLINIC_INFO = {
  name: 'Clínica Norte Especialidades SAS',
  slogan: 'Salud a tu alcance',
  description: 'Institución Prestadora de Servicios de Salud comprometida con el bienestar y la salud integral de nuestros pacientes.',
  
  contact: {
    phone: '+57 323 296 9330',
    whatsapp: '+57 323 296 9330',
    email: 'clinicanorteespecialidades@gmail.com',
    address: 'Calle 18 # 2-39 Barrio Eduardo Santos, La Unión, Nariño',
    schedule: 'Lunes a Viernes: 8:00 AM - 12:00 M y 02:00 PM - 06:00 PM | Sábados: 8:00 AM - 01:00 PM'
  },
  
  location: {
    lat: 1.605281,
    lng: -77.131158,
    city: 'La Unión',
    country: 'Colombia'
  },
  
  social: {
    facebook: 'https://www.facebook.com/share/1JZaSsR1y2/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/clinica_norte_especialidades?igsh=enBhN2d4ZTl6Y3l6',
  }
};

// Rutas de navegación
export const ROUTES = {
  HOME: '/',
  ABOUT: '/nosotros',
  SERVICES: '/servicios',
  SPECIALTIES: '/especialidades',
  NEWS: '/noticias',
  CONTACT: '/contacto',
  TRANSPARENCY: '/transparencia',
  DATA_POLICIES: '/politicas-datos',
  TERMS: '/terminos',
  HABEAS_DATA: '/habeas-data'
};

// Configuración de formularios
export const FORM_CONFIG = {
  CONTACT_FORM_ENDPOINT: 'https://formspree.io/f/YOUR_FORM_ID', // Reemplazar con ID real
  GETFORM_ENDPOINT: 'https://getform.io/f/YOUR_FORM_ID', // Alternativa
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png', 'application/pdf']
};

// Configuración de WhatsApp
export const WHATSAPP_CONFIG = {
  number: '573232969330',
  message: 'Hola, me gustaría obtener información sobre los servicios de la Clínica Norte Especialidades SAS.',
  position: {
    bottom: '20px',
    right: '20px'
  }
};

// Meta información para SEO
export const SEO_CONFIG = {
  defaultTitle: 'Clínica Norte Especialidades SAS - Salud a tu alcance',
  titleTemplate: '%s | Clínica Norte Especialidades SAS',
  defaultDescription: 'IPS especializada en servicios médicos integrales en La Unión, Nariño. Atención de calidad con tecnología avanzada, equipo médico especializado, consultas médicas, exámenes de laboratorio y especialidades médicas. Agenda tu cita.',
  keywords: [
    // Keywords principales
    'clínica médica La Unión Nariño',
    'servicios médicos La Unión',
    'IPS Nariño',
    'citas médicas La Unión',
    'consulta médica Nariño',
    
    // Especialidades médicas
    'medicina general',
    'medicina interna',
    'pediatría',
    'ginecología',
    'cardiología',
    'laboratorio clínico',
    
    // Servicios específicos
    'exámenes médicos',
    'diagnóstico médico',
    'atención médica especializada',
    'consulta especialista',
    'chequeos médicos',
    
    // Ubicación específica
    'clínica norte especialidades',
    'salud La Unión',
    'médicos Nariño',
    'hospital La Unión',
    'centro médico Nariño',
    
    // Long tail keywords
    'mejor clínica La Unión Nariño',
    'atención médica personalizada',
    'tecnología médica avanzada',
    'IPS certificada Colombia'
  ],
  author: 'Clínica Norte Especialidades SAS',
  image: '/images/icons/logos/clinica-norte-logo-principal.jpg',
  url: 'https://clinicanorteespecialidades.com.co'
};
