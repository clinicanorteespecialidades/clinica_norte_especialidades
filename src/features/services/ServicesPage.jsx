import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDownIcon, 
  ChevronUpIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  ClockIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import { Leaf, Brain, HeartPulse, Beaker, Heart } from "lucide-react";

import MedicalServiceIcon from '../../shared/components/ui/MedicalServiceIcon';
import { MEDICAL_SERVICES } from '../../data/medical-data';
import { ROUTES } from '../../shared/constants/config';
import SEOHead from '../../shared/components/seo/SEOHead';
import { generateMedicalServiceStructuredData } from '../../shared/utils/structuredData';

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  // Datos estructurados para servicios médicos
  const servicesStructuredData = MEDICAL_SERVICES.map(service => 
    generateMedicalServiceStructuredData(service)
  );

  return (
    <>
      <SEOHead 
        title="Servicios Médicos"
        description="Servicios médicos integrales en Clínica Norte Especialidades SAS: consulta general, especialidades, laboratorio clínico, procedimientos médicos y más. Tecnología de vanguardia en La Unión, Nariño."
        keywords="servicios médicos, consulta médica, laboratorio clínico, procedimientos médicos, especialidades médicas, exámenes médicos"
        canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/services` : ''}
        structuredData={servicesStructuredData}
      />
      
      <div className="overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* Enhanced Hero Section */}
      <section
        className="relative text-white overflow-hidden min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/clinic/exterior/clinica-norte-entrada-pacientes.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-600/80 dark:from-gray-900/95 dark:via-primary-900/90 dark:to-primary-800/85"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/15 rounded-full blur-lg animate-pulse animation-delay-300"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl container-custom">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight animate-fade-in-up">
            <span className="text-white">Servicios </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400">
              Médicos
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400">
              Especializados
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
            En <span className="font-semibold text-cyan-300">Clínica Norte Especialidades S.A.S.</span>
            brindamos atención en primer y segundo nivel de complejidad, con un equipo humano
            altamente calificado y tecnología de vanguardia, comprometidos con la calidad,
            la seguridad del paciente y la atención humanizada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link 
              to={ROUTES.CONTACT}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Agendar Cita Médica
            </Link>
            
          </div>
        </div>
      </section>

      {/* Enhanced Free Programs Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-emerald-900/10 dark:via-gray-900 dark:to-cyan-900/10 section-padding transition-all duration-300">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
              <HeartIcon className="w-4 h-4 mr-2" />
              Programas Comunitarios
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Programas Gratuitos
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: 'PROGRAMA “DE FRENTE CONTRA EL ENEMIGO SILENCIOSO” (LA HIPERTENSION ARTERIAL)',
                  text: 'Sabiendo que la hipertensión arterial es una enfermedad silenciosa y muchos pacientes tienen dicha patología y lo desconocen, se realiza tamizaje de HTA todos los días de manera gratuita, Diseñado para la pesquisa de pacientes sin diagnóstico de Hipertensión Arterial, pacientes que ya tienen diagnostico o los hipertensos mal controlados (solo debes asistir a la institución en los horarios de atención de lunes a viernes, no importa tu edad).'
                },
                {
                  title: 'PROGRAMA “LOS 10 DULCES”',
                  text: 'Teniendo en cuenta que muchos pacientes aparentemente sanos cursan con diabetes sin saberlo, se realiza prueba de glucosa de manera gratuita a 10 pacientes por día de lunes a viernes, mayores a 50 años, (solo debes asistir a la institución en los horarios de oficina, se recomienda asistir en ayunas o después de 2 o más horas de ingerir alimentos.'
                },
                {
                  title: 'PROGRAMA “POBLACION INFORMADA”',
                  text: 'Programa por redes sociales institucionales donde se dará a conocer diferentes temáticas de salud, enfocados en prevención de la enfermedad y temas de interés solicitados por los pacientes.'
                },
                {
                  title: 'PROGRAMA “LOS 10 CON RITMO”',
                  text: 'Con el fin de detectar trastornos del ritmo cardiaco como fibrilación auricular que es una de las causas de Enfermedad Cerebro Vascular (“trombosis cerebral”) y otras patologías mediante electrocardiograma, se realiza 10 EKG gratuitos por día a pacientes mayores de 50 años,interpretados por especialista en cardiología.'
                },
                {
                  title: 'PROGRAMA “ADULTO MAYOR SANO Y FUERTE”',
                  text: 'Propuesta de actividad física con tutor para el adulto mayor sano y también para los pacientes con patologías crónicas como Hipertensión arterial, Diabetes, Hipercolesterolemia y Obesidad.'
                }
              ].map((program, index) => (
                <div key={index} className="card p-6 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{program.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{program.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Levels Section */}
      <section className="bg-white dark:bg-gray-900 section-padding transition-colors duration-300">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <ClockIcon className="w-4 h-4 mr-2" />
              Niveles de Atención
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Servicios por Nivel de Complejidad
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Atención médica integral desde el primer contacto hasta los procedimientos más especializados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800 hover:shadow-2xl dark:hover:shadow-blue-900/20 transition-all duration-500 group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Servicios - Primer Nivel
                </h3>
                <div className="space-y-3">
                  {[
                    'Consulta Medicina General',
                    'Fonoaudiología',
                    'Nutrición y Dietética',
                    'Enfermería',
                    'Psicología',
                    'Fisioterapia',
                    'Terapia Ocupacional',
                    'Telemedicina – teleorientación',
                    'Odontología',
                    'Laboratorio clínico',
                    'Y otros servicios de primer nivel',
                  ].map((service, index) => (
                    <div key={index} className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-100 dark:border-purple-800 hover:shadow-2xl dark:hover:shadow-purple-900/20 transition-all duration-500 group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  Servicios - Segundo Nivel
                </h3>
                <div className="space-y-3">
                  {[
                    'Medicina Interna',
                    'Cardiología',
                    'Cirugía General',
                    'Pediatría',
                    'Ginecología',
                    'Radiología - imágenes diagnósticas no ionizantes y diagnóstico vascular',
                    'Dermatología',
                    'Ortopedia',
                    'Psiquiatría',
                    'Neurología',
                    'Medicina Alternativa'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Specialized Medicine Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 section-padding transition-all duration-300">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6">
              <SparklesIcon className="w-4 h-4 mr-2" />
              Especialidades Avanzadas
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Medicina Especializada
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Servicios médicos especializados con tecnología de vanguardia y profesionales altamente calificados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Medicina Alternativa',
                text: 'Consulta medicina alternativa, Terapia neural, Acupuntura, Homeopatia, Sueroterapia, Ozonoterapia, Campos magnéticos, Medicina tradicional china, Terapia alternativa bioenergética, Medicina funcional.',
                icon: 'Leaf',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Neurología Clínica',
                text: 'Consulta de neurología, Electroencefalograma computarizado, Polisomnografía, Polisomnograma con titulación de cpap nasal, Monitorización electroencefalográfica por video, (video telemetría), Aplicación de toxina botulínica, Bloqueo de nervio periférico, Prueba de latencia múltiple (procedimiento guiado por ecografía).',
                icon: 'brain',
                color: 'from-indigo-500 to-purple-500'
              },
              {
                title: 'Subespecialidades',
                text: 'Gastroenterología, Cardiología, Neurología - Epileptología',
                icon: 'beaker',
                color: 'from-cyan-500 to-blue-500'
              },
              
              {
                title: 'Cardiología - Pediátrica',
                text: 'Holter de ritmo cardiaco 24 horas, Electrocardiograma (ekg), Monitoreo de presion arterial 24 horas (mapa).',
                icon: 'heart',
                color: 'from-pink-400 to-rose-500'
              },
              {
                title: 'Cardiología - Adultos',
                text: 'Consulta de cardiología, Electrocardiograma (ekg), Holter de ritmo cardiaco 24 horas, Monitoreo de presion arterial 24 horas (mapa), Prueba de esfuerzo convencional, Ecocardiograma trastoracico modo M bidimencional doppler color, Ecocardiograma de estrés con ejercicio o farmacologico, Ecocardiograma de contraste en cortocircuitos, Mesa basculante, Rigidez arterial, Test de caminata de 6 minutos.',
                icon: 'heart-pulse',
                color: 'from-red-500 to-pink-500'
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl dark:hover:shadow-gray-900/20 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon === 'brain' ? (
                      <SparklesIcon className="w-8 h-8 text-white" />
                    ) : (
                      <HeartIcon className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {item.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300 space-y-1">
                    {item.text.split(',').map((service, i) => (
                      <li key={i}>{service.trim()}</li>
                    ))}
                  </ul>
                  {/*<p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {item.text}
                  </p>*/}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                    <Link 
                      to={ROUTES.CONTACT}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-300"
                    >
                      Agendar consulta
                      <ChevronDownIcon className="w-4 h-4 ml-1 rotate-[-90deg]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white dark:bg-gray-900 section-padding transition-colors duration-300">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {MEDICAL_SERVICES.map((service) => (
              <div key={service.id} className="card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                      <MedicalServiceIcon name={service.icon} />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white">
                      {service.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => toggleService(service.id)}
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                    aria-label={expandedService === service.id ? `Contraer información de ${service.name}` : `Expandir información de ${service.name}`}
                    aria-expanded={expandedService === service.id}
                    type="button"
                  >
                    {expandedService === service.id ? (
                      <ChevronUpIcon className="w-6 h-6" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6" />
                    )}
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>

                {expandedService === service.id && (
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4 animate-fade-in-up">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Incluye:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-primary-600 dark:bg-primary-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link to={ROUTES.CONTACT} className="btn-primary">
                        Agendar Cita
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white section-padding relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400/15 rounded-full blur-xl animate-pulse animation-delay-500"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/20 text-sm font-medium text-white/90 mb-6">
              <UserGroupIcon className="w-4 h-4 mr-2" />
              Atención Personalizada
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              ¿Necesitas más información?
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Nuestro equipo médico especializado está listo para ayudarte y responder 
              todas tus preguntas sobre nuestros servicios de salud.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={ROUTES.CONTACT} 
                className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105 hover:shadow-white/20"
              >
                Contactar Especialista
              </Link>
              <Link 
                to={ROUTES.SPECIALTIES} 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30"
              >
                Ver Especialidades
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Horarios Extendidos</h3>
                  <p className="text-white/80 text-sm">Atención de lunes a sábado</p>
                </div>
                
                <div className="group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Atención de Calidad</h3>
                  <p className="text-white/80 text-sm">Profesionales certificados</p>
                </div>
                
                <div className="group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <HeartIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Atención Humanizada</h3>
                  <p className="text-white/80 text-sm">Cuidado integral del paciente</p>
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

export default ServicesPage;
