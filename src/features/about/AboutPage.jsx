import { 
  UserGroupIcon, 
  BuildingOfficeIcon, 
  AcademicCapIcon,
  HeartIcon,
  SparklesIcon,
  MapPinIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { CLINIC_INFO } from '../../shared/constants/config';
import { MEDICAL_TEAM } from '../../data/medical-data';
import { CompactMap } from '../../shared/components/maps';
import ContactInfo from '../../shared/components/ui/ContactInfo';
import SEOHead from '../../shared/components/seo/SEOHead';
import { generateClinicStructuredData } from '../../shared/utils/structuredData';

const AboutPage = () => {
  // Valores institucionales (tomados del portafolio) - mantener información exacta
  const values = [
    { 
      icon: HeartIcon, 
      title: 'Calidez', 
      description: 'Atención con calidez y cercanía hacia el paciente y su familia.',
      color: 'from-red-500 to-pink-500'
    },
    { 
      icon: AcademicCapIcon, 
      title: 'Pensamiento proactivo', 
      description: 'Actitud de mejora continua y anticipación en la atención.',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: UserGroupIcon, 
      title: 'Mejoramiento continuo', 
      description: 'Búsqueda permanente de la calidad y la seguridad del paciente.',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: BuildingOfficeIcon, 
      title: 'Eficiencia', 
      description: 'Optimización de recursos para brindar atención oportuna y eficiente.',
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      icon: ShieldCheckIcon, 
      title: 'Seguridad del paciente', 
      description: 'Garantizamos prácticas seguras y protocolos que protegen al usuario.',
      color: 'from-orange-500 to-red-500'
    },
    { 
      icon: HeartIcon, 
      title: 'Respeto', 
      description: 'Tratamos a todos con dignidad y respeto por su condición y diversidad.',
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      icon: UserGroupIcon, 
      title: 'Equidad', 
      description: 'Acceso justo a servicios independientemente de la condición social.',
      color: 'from-violet-500 to-purple-500'
    },
    { 
      icon: BuildingOfficeIcon, 
      title: 'Vocación de servicio', 
      description: 'Compromiso y entrega en la atención a nuestros usuarios.',
      color: 'from-emerald-500 to-green-500'
    },
    { 
      icon: HeartIcon, 
      title: 'Solidaridad', 
      description: 'Trabajo conjunto y apoyo entre el equipo y la comunidad.',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      icon: CheckBadgeIcon, 
      title: 'Sentido de pertenencia', 
      description: 'Compromiso institucional con los objetivos de la clínica.',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  const achievements = [
    {
      icon: ClockIcon,
      number: '24/7',
      title: 'Disponibilidad',
      description: 'Atención médica cuando la necesites'
    },
    {
      icon: UserGroupIcon,
      number: '500+',
      title: 'Pacientes Satisfechos',
      description: 'Familias que confían en nuestros servicios'
    },
    {
      icon: ShieldCheckIcon,
      number: '100%',
      title: 'Certificación IPS',
      description: 'Cumplimiento de estándares de calidad'
    },
    {
      icon: MapPinIcon,
      number: '100%',
      title: 'Cobertura Local',
      description: 'Atención completa en La Unión, Nariño'
    }
  ];

  // Datos estructurados para SEO
  const structuredData = generateClinicStructuredData();

  return (
    <>
      <SEOHead 
        title="Nosotros"
        description="Conoce la historia, misión y equipo médico de Clínica Norte Especialidades SAS. IPS certificada con más de 15 años de experiencia brindando atención médica integral en La Unión, Nariño."
        keywords="historia clínica norte, equipo médico, misión visión, IPS La Unión, médicos especialistas, experiencia médica"
        canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/about` : ''}
        structuredData={structuredData}
      />
      
      <div className="overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Enhanced Hero Section */}
      <section
        className="relative text-white overflow-hidden min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/clinic/exterior/clinica-norte-fachada-principal-2024.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-600/80 dark:from-gray-900/95 dark:via-primary-900/90 dark:to-primary-800/85"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl container-custom">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight animate-fade-in-up">
            <span className="text-white">Conoce </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
              nuestra historia
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
            Somos una institución de salud de carácter privado, que presta servicios de primer y segundo nivel de complejidad, 
            ubicada en el municipio de La Unión, barrio Eduardo Santos, comprometidos con brindar excelencia médica a nuestra comunidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-400">
            <button 
              onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${CLINIC_INFO.location.lat},${CLINIC_INFO.location.lng}`, '_blank')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105"
              aria-label="Abrir direcciones en Google Maps para llegar a la clínica"
              type="button"
            >
              <span className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                Cómo llegar
              </span>
            </button>
            
            
          </div>
        </div>
      </section>

      {/* Enhanced Misión y Visión */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 section-padding transition-all duration-300">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <BuildingOfficeIcon className="w-4 h-4 mr-2" />
              Nuestra Filosofía Institucional
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Misión y Visión
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Los principios fundamentales que guían nuestro compromiso con la salud de la comunidad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-white dark:bg-gray-700 rounded-3xl p-8 border border-gray-100 dark:border-gray-600 shadow-lg hover:shadow-2xl dark:hover:shadow-gray-900/20 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BuildingOfficeIcon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Misión
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors duration-300">
                  Somos una institución de salud que presta servicios de primer y segundo nivel de complejidad, 
                  comprometida con el mejoramiento continuo y mantenido de la salud, enfocados en la promoción 
                  y prevención de la enfermedad, basados en una filosofía de transparencia, calidad, seguridad 
                  y atención humanizada.
                </p>

                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Visión */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-white dark:bg-gray-700 rounded-3xl p-8 border border-gray-100 dark:border-gray-600 shadow-lg hover:shadow-2xl dark:hover:shadow-gray-900/20 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <HeartIcon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  Visión
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors duration-300">
                  Para el 2028, CLINICA NORTE ESPECIALIDADES SAS será reconocida como una IPS de referencia en 
                  La Unión, Nariño, con altos estándares de talento humano, científicos y tecnológicos, 
                  prestando servicios de calidad bajo un modelo de atención integral en salud para la satisfacción de nuestros usuarios.
                </p>

                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Valores institucionales */}
      <section className="bg-white dark:bg-gray-800 section-padding transition-colors duration-300 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full -translate-x-32 -translate-y-32 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100 to-cyan-100 dark:from-green-900/20 dark:to-cyan-900/20 rounded-full translate-x-48 translate-y-48 opacity-30"></div>
        
        <div className="container-custom relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
              <HeartIcon className="w-4 h-4 mr-2" />
              Nuestros Principios
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Valores Institucionales
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Los principios fundamentales que guían nuestro trabajo diario y definen la calidad de nuestros servicios
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="bg-white dark:bg-gray-700 rounded-3xl p-6 border border-gray-100 dark:border-gray-600 shadow-lg hover:shadow-2xl dark:hover:shadow-gray-900/20 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 text-center h-full">
                  {/* Icon with gradient background */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white section-padding relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border border-white/20 rounded-full"></div>
        </div>

        <div className="container-custom relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Nuestros logros
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Un año de compromiso y excelencia sirviendo a la comunidad de La Unión, Nariño
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-white/90 mb-2">
                    {achievement.title}
                  </div>
                  <p className="text-white/70 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Equipo 
      <section id="equipo" className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Profesionales altamente calificados comprometidos con tu bienestar y salud.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEDICAL_TEAM.map((member) => (
              <div key={member.id} className="card text-center p-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-500">Foto</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.specialty} • {member.experience}</p>
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">{member.education}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Enhanced Location Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 section-padding transition-all duration-300">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
              <MapPinIcon className="w-4 h-4 mr-2" />
              Nuestra Ubicación
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Cómo llegar a nuestra clínica
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Ubicados estratégicamente en La Unión, Nariño, para servir a toda la región del Norte
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 border border-gray-100 dark:border-gray-600 shadow-2xl transition-colors duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Map */}
              <div className="relative z-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] min-h-[400px] bg-gray-100 dark:bg-gray-600">
                <CompactMap height="400px" zoom={15} showPopup={true} interactive={true} />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                    Información de contacto
                  </h3>
                  <ContactInfo variant="enhanced" showTitle={false} />
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-600">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                    Área de influencia
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    Ubicados estratégicamente en La Unión, Nariño, brindamos atención médica 
                    especializada con acceso conveniente para toda la comunidad local.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button 
                    onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${CLINIC_INFO.location.lat},${CLINIC_INFO.location.lng}`, '_blank')}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center"
                    aria-label="Ver ubicación de la clínica en Google Maps"
                    type="button"
                  >
                    <MapPinIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    Ver en Google Maps
                  </button>
                  
                  <button 
                    onClick={() => window.open(`tel:${CLINIC_INFO.contact.phone}`, '_self')}
                    className="px-6 py-3 bg-white dark:bg-gray-600 text-gray-700 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-500 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                    aria-label={`Llamar ahora al teléfono ${CLINIC_INFO.contact.phone}`}
                    type="button"
                  >
                    <ClockIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    Llamar ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    </>
  );
};

export default AboutPage;
