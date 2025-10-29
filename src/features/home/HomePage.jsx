import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  HeartIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
  SparklesIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  CalendarIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline';

import { CLINIC_INFO, ROUTES } from '../../shared/constants/config';
import { MEDICAL_SERVICES } from '../../data/medical-data';
import MedicalServiceIcon from '../../shared/components/ui/MedicalServiceIcon';
import { Map } from '../../shared/components/maps';
import { AppointmentForm } from '../../shared/components/forms';
import { useModal } from '../../shared/hooks/useModal';
import SEOHead from '../../shared/components/seo/SEOHead';
import { generateClinicStructuredData, generateLocalBusinessStructuredData } from '../../shared/utils/structuredData';
import LatestNews from '../../shared/components/ui/LatestNews';

// VideoTour component: embeds a YouTube player but does NOT autoplay.
// Replace YOUTUBE_VIDEO_ID with the actual video id (e.g. 'dQw4w9WgXcQ'). https://www.youtube.com/watch?v=3e9Wa3xaO44
const YOUTUBE_VIDEO_ID = '3e9Wa3xaO44';

function VideoTour() {
  const [showPlayer, setShowPlayer] = useState(false);
  const poster = '/images/clinic/clinicanorteespecialidades.png';
  const embedSrc = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&controls=1`;

  return (
    <div className="relative">
      {!showPlayer ? (
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img src={poster} alt="Tour de instalaciones - Clínica Norte" className="w-full h-auto object-cover block" />
          <button
            type="button"
            onClick={() => setShowPlayer(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-200"
            aria-label="Abrir video tour de instalaciones"
          >
            <span className="flex items-center justify-center w-20 h-20 bg-white/90 rounded-full shadow-lg">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5 3v18l15-9L5 3z" fill="#0b74ed" />
              </svg>
            </span>
          </button>

          <div className="absolute left-4 bottom-4 bg-white/90 text-sm rounded-full px-3 py-1 text-gray-800 font-medium">Tour rápido • 60–90s</div>
        </div>
      ) : (
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <div className="w-full aspect-video bg-black">
            <iframe
              src={embedSrc}
              title="Tour de instalaciones - Clínica Norte"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

const HomePage = () => {
  const { isOpen: isAppointmentOpen, openModal: openAppointment, closeModal: closeAppointment } = useModal();

  const features = [
    {
      icon: HeartIcon,
      title: 'Atención Integral',
      description: 'Servicios médicos completos con tecnología de vanguardia y personal altamente calificado.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Equipo Especializado',
      description: 'Médicos especialistas con amplia experiencia en diferentes áreas de la medicina.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ClockIcon,
      title: 'Horarios Flexibles',
      description: 'Atención de lunes a sábado con horarios extendidos para tu comodidad.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Calidad Certificada',
      description: 'IPS certificada con los más altos estándares de calidad en atención médica.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const achievements = [
    {
      icon: CheckBadgeIcon,
      number: '95%',
      label: 'Satisfacción del Paciente',
      description: 'Nuestros pacientes valoran la atención personalizada'
    },
    {
      icon: ClockIcon,
      number: '48h',
      label: 'Tiempo de Respuesta',
      description: 'Agilidad en resultados y seguimiento médico'
    },
    {
      icon: AcademicCapIcon,
      number: '100%',
      label: 'Tecnología Moderna',
      description: 'Equipos y procesos de última generación'
    },
    {
      icon: UserGroupIcon,
      number: '1000+',
      label: 'Pacientes Satisfechos',
      description: 'Confianza de familias locales'
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      role: 'Paciente',
      content: 'Excelente atención médica. El personal es muy profesional y las instalaciones son modernas.',
      rating: 5
    },
    {
      name: 'Carlos Ramírez',
      role: 'Paciente',
      content: 'Muy satisfecho con el servicio. Los doctores son muy competentes y el trato es excepcional.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      role: 'Paciente',
      content: 'La mejor clínica de la región. Tecnología de punta y atención humanizada.',
      rating: 5
    }
  ];


  const VitalLineIcon = ({ className }) => (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      {/* Corazón */}
      <path
        d="M50 85C50 85 15 60 15 35C15 22 25 12 38 12C45 12 50 18 50 18C50 18 55 12 62 12C75 12 85 22 85 35C85 60 50 85 50 85Z"
        stroke="currentColor"
        fill="none"
      />

      {/* Línea de signos vitales dentro del corazón */}
      <polyline
        points="20,50 35,50 40,35 45,65 50,50 60,50 65,40 70,60 75,50 85,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );



  // Datos estructurados para SEO
  const clinicData = generateClinicStructuredData();
  const localBusinessData = generateLocalBusinessStructuredData();

  // Combinar datos estructurados
  const combinedStructuredData = [clinicData, localBusinessData];

  return (
    <>
      <SEOHead
        title="Inicio"
        description="Clínica Norte Especialidades SAS - IPS certificada en La Unión, Nariño. Servicios médicos integrales con especialistas calificados, tecnología de vanguardia y atención personalizada. Agenda tu cita médica."
        keywords="clínica La Unión Nariño, servicios médicos, citas médicas, especialistas, IPS certificada, consulta médica, exámenes médicos"
        canonicalUrl="https://clinicanorteespecialidades.com.co/"
        ogImage="/images/hero/servicios-medicos-especializados.png"
        structuredData={combinedStructuredData}
      />

      <div className="overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section - Ultra Modern Design */}
        <section
          className="relative text-white overflow-hidden min-h-screen flex items-center"
          style={{
            backgroundImage: `url('/images/hero/servicios-medicos-especializados.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Modern overlay with enhanced gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-800/85 to-purple-900/90 dark:from-slate-950/95 dark:via-blue-950/90 dark:to-purple-950/95 transition-all duration-300"></div>

          {/* Animated particles background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 right-10 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <div className="relative container-custom py-32">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="text-center lg:text-left">


                  {/* Main Headline */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight animate-fade-in-up">
                    <span className="text-white">Salud </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 dark:from-blue-300 dark:via-cyan-200 dark:to-purple-300">
                      a tu
                    </span>
                    <br />
                    <span className="text-white"> </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                      alcance
                    </span>
                  </h1>

                  {/* Enhanced Subtitle */}
                  <p className="text-xl md:text-2xl text-white/90 dark:text-gray-200/95 mb-12 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
                    Institución Prestadora de Servicios de Salud comprometida con <span className="font-semibold text-cyan-300">la excelencia médica</span>,
                    tecnología de vanguardia y atención personalizada que transforma vidas en <span className="font-semibold text-green-400">La Unión, Nariño.</span>
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16 animate-fade-in-up animation-delay-400">
                    <button
                      onClick={openAppointment}
                      className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 min-w-[220px] overflow-hidden focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-transparent"
                      aria-label="Agendar cita médica - Abrir formulario de solicitud de cita"
                      type="button"
                    >
                      <span className="relative z-10 flex items-center">
                        <CalendarDaysIcon className="w-5 h-5 mr-2" />
                        Agendar Cita Médica
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <Link
                      to={ROUTES.SERVICES}
                      className="group px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30 min-w-[220px] text-center focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                      aria-label="Conocer todos nuestros servicios médicos disponibles"
                    >
                      <span className="flex items-center justify-center">
                        Conocer Servicios
                        <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                      </span>
                    </Link>
                  </div>


                </div>

                {/* Right Content - Floating Cards */}
                <div className="hidden lg:block animate-fade-in animation-delay-800">
                  <div className="relative">
                    {/* Main Card */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                          <HeartIcon className="w-10 h-10 text-white" aria-hidden="true" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Atención Integral</h3>
                        <p className="text-white/80 mb-6">Cuidamos tu salud con tecnología médica avanzada y el respaldo de nuestros especialistas.</p>
                        <div className="flex justify-center space-x-2" role="img" aria-label="Calificación 5 estrellas">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon key={star} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Floating Mini Cards */}
                    <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-4 shadow-xl animate-float">
                      <CheckBadgeIcon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/60 dark:border-gray-300/70 rounded-full flex justify-center cursor-pointer hover:border-white transition-colors duration-300">
              <div className="w-1 h-3 bg-white/80 dark:bg-gray-300/90 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>


        {/* Latest News Widget */}
        <LatestNews count={3} />



        {/* Enhanced Features Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 section-padding transition-all duration-300">
          <div className="container-custom">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                <SparklesIcon className="w-4 h-4 mr-2" />
                ¿Por qué elegirnos?
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Excelencia en cada detalle
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                Nos comprometemos a brindar atención médica de clase mundial con un enfoque humano,
                tecnología avanzada y los más altos estándares de calidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  {/* Background gradient card */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-500"
                    style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}></div>

                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl dark:hover:shadow-gray-900/20 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4 text-center transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Decorative element */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="text-center mt-16">
              <Link
                to={ROUTES.ABOUT}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Conoce más sobre nosotros
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Enhanced Services Preview */}
        <section className="bg-white dark:bg-gray-800 section-padding transition-colors duration-300 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full -translate-x-32 -translate-y-32 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100 to-cyan-100 dark:from-green-900/20 dark:to-cyan-900/20 rounded-full translate-x-48 translate-y-48 opacity-30"></div>

          <div className="container-custom relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                <HeartIcon className="w-4 h-4 mr-2" />
                Servicios Especializados
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Cuidado integral para tu bienestar
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                Ofrecemos una amplia gama de servicios médicos especializados con tecnología de vanguardia
                y el respaldo de nuestros profesionales altamente capacitados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {MEDICAL_SERVICES.slice(0, 6).map((service) => (
                <div key={service.id} className="group relative">
                  <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 border border-gray-100 dark:border-gray-600 shadow-lg hover:shadow-2xl dark:hover:shadow-gray-900/20 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 h-full">
                    {/* Icon and title */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MedicalServiceIcon name={service.icon} className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {service.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to={ROUTES.SERVICES}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Ver Todos los Servicios
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

    {/* Achievements Section */}
    <section className="bg-gradient-to-br from-blue-600/90 via-purple-600/85 to-cyan-600/90 text-white section-padding relative overflow-hidden">
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
                Resultados que nos respaldan
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Más de una década transformando vidas con excelencia médica y atención humanizada
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
                      {achievement.label}
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
  {/* Video / Tour Rápido - 60-90s (autoplay desactivado) */}
  <section className="bg-gray-50 dark:bg-gray-900 section-padding transition-colors duration-300">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                Tour rápido — Nuestras instalaciones
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Video mostrando nuestras áreas de atención y tecnología. (Autoplay desactivado — toca reproducir)
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <VideoTour />
            </div>
          </div>
        </section>

  {/* Testimonials Section */}
  {/* Use a slightly brighter neutral to separate it from the video block */}
  <section className="bg-white dark:bg-gray-900 section-padding transition-colors duration-300">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium mb-6">
                <StarIcon className="w-4 h-4 mr-2" />
                Testimonios
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                La confianza de nuestros pacientes
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                Historias reales de personas que han confiado en nosotros para cuidar su salud
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl dark:hover:shadow-gray-900/20 transition-all duration-300 hover:scale-105">
                  {/* Stars */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <StarIcon key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-center italic leading-relaxed transition-colors duration-300">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="text-center border-t border-gray-100 dark:border-gray-700 pt-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <UserGroupIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


  {/* Newsletter CTA Section*/}
  {/* Soften the newsletter gradient slightly for a smoother transition */}
  <section className="relative bg-gradient-to-br from-primary-600/95 via-primary-700/90 to-primary-800/90 dark:from-primary-800/95 dark:via-primary-900/90 dark:to-gray-900 section-padding overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                <SparklesIcon className="w-5 h-5 text-yellow-300" />
                <span className="text-white/90 font-medium">Mantente Informado</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                No te pierdas
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  nuestras novedades
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
                Síguenos en nuestras redes sociales para estar al día con las últimas noticias,
                eventos y actualizaciones de la clínica.
              </p>

              {/* Social Media Links */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <a
                  href="https://www.facebook.com/share/1JZaSsR1y2/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Síguenos en Facebook</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <a
                  href="https://www.instagram.com/clinica_norte_especialidades?igsh=enBhN2d4ZTl6Y3l6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348z" />
                  </svg>
                  <span>Síguenos en Instagram</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <NewspaperIcon className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-semibold mb-1">Noticias Semanales</div>
                  <div className="text-white/80 text-sm">Actualizaciones constantes</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <CalendarIcon className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-semibold mb-1">Eventos Especiales</div>
                  <div className="text-white/80 text-sm">Jornadas y actividades</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <SparklesIcon className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-semibold mb-1">Contenido Exclusivo</div>
                  <div className="text-white/80 text-sm">Tips de salud y bienestar</div>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* Enhanced Location & Contact Section */}
  {/* Reduce saturation slightly to make the transition from the warm newsletter less jarring */}
  <section className="bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/90 text-white section-padding relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8">
                  <MapPinIcon className="w-4 h-4 mr-2" />
                  Ubicación y Contacto
                </div>

                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Te esperamos en nuestra clínica
                </h2>
                <p className="text-xl text-white/90 mb-12 leading-relaxed">
                  Ubicados estratégicamente en La Unión, Nariño, con fácil acceso y la infraestructura
                  necesaria para brindarte la mejor atención médica especializada.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <MapPinIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Dirección</h3>
                      <p className="text-white/80 text-lg">{CLINIC_INFO.contact.address}</p>
                      <button
                        onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${CLINIC_INFO.location.lat},${CLINIC_INFO.location.lng}`, '_blank')}
                        className="text-cyan-300 hover:text-cyan-200 text-sm mt-2 underline transition-colors duration-300"
                      >
                        Ver en Google Maps →
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <PhoneIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                      <p className="text-white/80 text-lg">{CLINIC_INFO.contact.phone}</p>
                      <button
                        onClick={() => window.open(`tel:${CLINIC_INFO.contact.phone}`, '_self')}
                        className="text-cyan-300 hover:text-cyan-200 text-sm mt-2 underline transition-colors duration-300"
                      >
                        Llamar ahora →
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <ClockIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Horarios de Atención</h3>
                      <p className="text-white/80 text-lg">{CLINIC_INFO.contact.schedule}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={openAppointment}
                    className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    aria-label="Agendar cita médica inmediatamente"
                    type="button"
                  >
                    Agendar Cita Ahora
                  </button>
                  <Link
                    to={ROUTES.CONTACT}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30 text-center"
                    aria-label="Ver más información de contacto de la clínica"
                  >
                    Más Información
                  </Link>
                </div>
              </div>

              {/* Enhanced Map Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex flex-col items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 flex items-center justify-center shadow-lg">
                    <MapPinIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white text-center">
                    Nuestra Ubicación
                  </h3>
                  <p className="text-white/80 text-center mt-2">
                    Fácil acceso y amplio parqueadero
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 hover:scale-[1.02] transition-transform duration-300">
                  <Map height="350px" zoom={15} showPopup={true} />
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Modal de Agendar Cita */}
        {isAppointmentOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 flex items-center justify-center p-4 z-50 transition-all duration-300">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-colors duration-300">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 transition-colors duration-300">Agendar Cita</h2>
                  <button
                    onClick={closeAppointment}
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-2xl transition-colors duration-200"
                    aria-label="Cerrar formulario de cita médica"
                    type="button"
                  >
                    ×
                  </button>
                </div>
                <AppointmentForm onSuccess={closeAppointment} />
              </div>
            </div>
          </div>
        )}


      </div>
    </>
  );
};

export default HomePage;
