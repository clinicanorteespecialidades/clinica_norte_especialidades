// Servicios médicos de la clínica
// Servicios médicos de la clínica
export const MEDICAL_SERVICES = [
  {
    id: 'consulta-externa',
    name: 'Consulta Externa',
    description: 'Atención médica integral en diversas especialidades para la prevención, diagnóstico y tratamiento oportuno de enfermedades.',
    icon: 'stethoscope',
    features: [
      'Medicina general',
      'Medicina interna',
      'Cardiología',
      'Ginecología y obstetricia',
      'Pediatría',
      'Dermatología',
      'Otras especialidades médicas'
    ]
  },
  {
    id: 'apoyo-diagnostico',
    name: 'Servicios de Apoyo Diagnóstico',
    description: 'Exámenes y procedimientos para confirmar diagnósticos y apoyar el tratamiento médico.',
    icon: 'lab',
    features: [
      'Imagenología (Ecografía)',
      'Electrocardiograma',
      'Holter y MAPA',
      'Pruebas especiales según indicación médica'
    ]
  },
  {
    id: 'programas-promocion-prevencion',
    name: 'Programas de Promoción y Prevención',
    description: 'Actividades enfocadas en el cuidado integral de la salud y prevención de enfermedades.',
    icon: 'shield-check',
    features: [
      'Detección temprana de enfermedades crónicas'
    ]
  },
  {
    id: 'medicina-alternativa',
    name: 'Medicina Alternativa y Terapias Complementarias',
    description: 'Tratamientos naturales y complementarios para el bienestar físico y emocional.',
    icon: 'leaf',
    features: [
      'Homeopatía',
      'Ozonoterapia',
      'Acupuntura',
      'Terapia Neural',
      'Suero Terapia',
      'Orientación en estilos de vida saludables'
    ]
  }
];


// Especialidades médicas
export const MEDICAL_SPECIALTIES = [
  {
    id: 'neurologia',
    name: 'Neurología',
    description: 'Consulta de neurología, electroencefalograma computarizado, polisomnografía y más.',
    doctor: 'Dra. Diana Bravo Guzman',
  },
  {
    id: 'medicina-alternativa',
    name: 'Medicina Alternativa',
    description: 'Terapia neural, acupuntura, homeopatía, sueroterapia, ozonoterapia, medicina tradicional.',
    doctor: 'Dr. William Salazar',
  },
  {
    id: 'cardiologia',
    name: 'Cardiología',
    description: 'Electrocardiograma, holter, MAPA, prueba de esfuerzo, ecocardiogramas, ecocardiograma de estres ejercicio y/o dobutamina, mesa basculante, rigidez arterial y test de caminata de 6 minutos.',
    doctor: 'Dr. Walter Gonzalez',
  },
  {
    id: 'gastroenterologia',
    name: 'Gastroenterología',
    description: 'Diagnóstico y tratamiento de enfermedades del sistema digestivo.',
    doctor: 'Dr. Jose Octavio Chaves',
  },
  {
    id: 'nefrologia',
    name: 'Nefrología',
    description: 'Atención especializada para enfermedades renales y manejo de hipertensión secundaria.',
    doctor: '',
  },
  {
    id: 'medicina-interna',
    name: 'Medicina Interna',
    description: 'Atención integral para adultos, diagnóstico y tratamiento de enfermedades crónicas.',
    doctor: 'Dra. Alejandra Gelpud',
  },
  {
    id: 'pediatria',
    name: 'Pediatría',
    description: 'Atención médica integral para niños y adolescentes.',
    doctor: 'Dra. Maira Stefany Muñoz - Dra. Maria Alejandra Delgado',
  },
  {
    id: 'ginecologia',
    name: 'Ginecología',
    description: 'Atención integral en salud de la mujer, incluyendo embarazo, parto y postparto.',
    doctor: 'Dra. Tulia Esther Toro',
  },
  {
    id: 'dermatologia',
    name: 'Dermatología',
    description: 'Diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas.',
    doctor: 'Dr. Faruk Suarez Chamorro',
  },
  {
    id:'radiologia',
    name: 'Radiología',
    description: 'Estudios de imagen para diagnóstico médico, incluyendo rayos X, resonancia magnética y tomografía computarizada.',
    doctor: 'Dra. Ana María Muñoz - Dr. Alexis Gonzalez',
  },
  {
    id: 'cirugia',
    name: 'Cirugía',
    description: 'Procedimientos quirúrgicos para el tratamiento de diversas condiciones médicas.',
    doctor: '',
  },
  {
    id: 'psicologia',
    name: 'Psicología',
    description: 'Atención y tratamiento de trastornos mentales y emocionales.',
    doctor: 'Dra. Cristina Valdez',
  },
  {
    id: 'fisioterapia',
    name: 'Fisioterapia',
    description: 'Rehabilitación y tratamiento físico para mejorar la movilidad y calidad de vida.',
    doctor: 'Dra. Nataly Clavijo Muñoz',
  },
  {
    id: 'fonoaudiologia',
    name: 'Fonoaudiología',
    description: 'Evaluación y tratamiento de trastornos de la comunicación y deglución.',
    doctor: 'Dra. Valery Daniela Bravo',
  },
  {
    id: 'terapia-ocupacional',
    name: 'Terapia Ocupacional',
    description: 'Ayuda a las personas a participar en las actividades de la vida diaria.',
    doctor: 'Dra. Laura Vanesa Ceron',
  },
  {
    id:'nutricion',
    name: 'Nutrición',
    description: 'Asesoramiento y tratamiento en alimentación y nutrición.',
    doctor: 'Dra. Camila Trujillo Criollo',
  },
  {
    id: 'medicina-general',
    name: 'Medicina General',
    description: 'Atención primaria y prevención de enfermedades.',
    doctor: 'Dra. Flor Rodrigues - Dra. Carmen Hernandez - Dra. Leidy Aza - Dra. Mayra Mayoral'
  }

];

// Equipo médico
export const MEDICAL_TEAM = [
  {
    id: 'director-medico',
    name: 'Dr. Eduardo Vargas',
    position: 'Director Médico',
    specialty: 'Medicina Interna',
    education: 'Universidad Nacional de Colombia',
    experience: 'Amplia experiencia',
    image: '/assets/images/team/dr-vargas.jpg',
    bio: 'Especialista en Medicina Interna con amplia experiencia en administración de servicios de salud.'
  },
  {
    id: 'coordinadora-enfermeria',
    name: 'Enf. Patricia Rojas',
    position: 'Coordinadora de Enfermería',
    specialty: 'Enfermería',
    education: 'Universidad Javeriana',
    experience: 'Amplia experiencia',
    image: '/assets/images/team/enf-rojas.jpg',
    bio: 'Profesional en enfermería con especialización en cuidados intensivos y administración en salud.'
  }
];
