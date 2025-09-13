import { Link } from 'react-router-dom';
import { 
  ClockIcon, 
  UserIcon, 
  HeartIcon,
  StarIcon,
  SparklesIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { MEDICAL_SPECIALTIES } from '../../data/medical-data';
import { ROUTES } from '../../shared/constants/config';
import SEOHead from '../../shared/components/seo/SEOHead';

const SpecialtiesPage = () => {
  return (
    <>
      <SEOHead 
        title="Especialidades Médicas"
        description="Especialidades médicas en Clínica Norte: medicina general, pediatría, ginecología, cardiología y más. Médicos especialistas certificados con experiencia en La Unión, Nariño."
        keywords="especialidades médicas, médicos especialistas, pediatría, ginecología, cardiología, medicina interna, consulta especializada"
        canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/specialties` : ''}
      />
      
      <div className="overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* Enhanced Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url('/images/clinic/interior/recepcion-atencion-pacientes.jpg')`,
          }}
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-600/80 dark:from-gray-900/95 dark:via-primary-900/90 dark:to-primary-800/85" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Content */}
        <div className="relative z-10 container-custom section-padding text-center">
          <div className="max-w-4xl mx-auto">
            

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in-up delay-200">
              Especialidades <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400">
                Médicas
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in-up delay-300">
              Médicos especialistas altamente calificados comprometidos con tu bienestar integral
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 animate-fade-in-up delay-500">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-white/80 text-sm md:text-base">Especialidades</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-white/80 text-sm md:text-base">Especialistas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
                <div className="text-white/80 text-sm md:text-base">Pacientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">5★</div>
                <div className="text-white/80 text-sm md:text-base">Calificación</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Grid Section */}
      <section className="relative bg-gray-50 dark:bg-gray-800 section-padding transition-colors duration-300">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full px-6 py-2 mb-6">
              <HeartIcon className="w-5 h-5" />
              <span className="font-medium">Nuestras Especialidades</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Atención Especializada
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Cada especialista está comprometido con brindar atención de calidad, 
              utilizando la tecnología más avanzada y un enfoque humano personalizado.
            </p>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEDICAL_SPECIALTIES.map((specialty, index) => (
              <div 
                key={specialty.id} 
                className="group bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <UserGroupIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                        #{index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-2">
                      {specialty.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {specialty.description}
                  </p>

                  {/* Doctor Info */}
                  <div className="mb-6">
                    <div className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-600 rounded-xl">
                      <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-lg">
                        <AcademicCapIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Especialista</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {specialty.doctor}
                        </p>
                      </div>
                      <CheckBadgeIcon className="w-5 h-5 text-green-500" />
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link 
                    to={ROUTES.CONTACT} 
                    className="group w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 dark:from-primary-600 dark:to-primary-700 dark:hover:from-primary-700 dark:hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Agendar Cita</span>
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Certifications Section */}
      <section className="bg-white dark:bg-gray-900 section-padding transition-colors duration-300">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full px-6 py-2 mb-6">
                <ShieldCheckIcon className="w-5 h-5" />
                <span className="font-medium">Calidad Certificada</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                Excelencia en 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
                  {" "}Atención Médica
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Nuestros especialistas mantienen las más altas certificaciones y participan 
                continuamente en programas de educación médica para ofrecerte la mejor atención.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {[
                  'Especialistas certificados y en formación continua',
                  'Equipos médicos de última tecnología',
                  'Protocolos de atención basados en evidencia',
                  'Seguimiento personalizado para cada paciente'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                      <CheckBadgeIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to={ROUTES.ABOUT}
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Conoce Más</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 rounded-3xl p-8 transform rotate-3 shadow-2xl">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 transform -rotate-3">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AcademicCapIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">100%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Certificados</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <StarIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">5.0</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Calificación</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldCheckIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">20+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Especialidades</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <HeartIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">24/7</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Atención</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-60 blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-300 rounded-full opacity-40 blur-xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-800 dark:via-primary-900 dark:to-gray-900 section-padding overflow-hidden">
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
              <span className="text-white/90 font-medium">Agenda tu Cita</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              ¿Necesitas atención
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                especializada?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Nuestros especialistas están listos para brindarte la mejor atención médica. 
              Agenda tu cita hoy mismo y da el primer paso hacia tu bienestar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to={ROUTES.CONTACT}
                className="group bg-white hover:bg-gray-100 text-primary-700 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-3"
              >
                <span>Agendar Cita Ahora</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <a 
                href={`https://wa.me/573232969330?text=Hola, me gustaría agendar una cita con un especialista`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3"
              >
                <span>WhatsApp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <ClockIcon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Horarios Flexibles</div>
                <div className="text-white/80 text-sm">Lun-Vie: 8AM-6PM | Sáb: 8AM-1PM</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <UserGroupIcon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Atención Personalizada</div>
                <div className="text-white/80 text-sm">Cada paciente es único</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <HeartIcon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Cuidado Integral</div>
                <div className="text-white/80 text-sm">Tu bienestar es nuestra prioridad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    </>
  );
};

export default SpecialtiesPage;
