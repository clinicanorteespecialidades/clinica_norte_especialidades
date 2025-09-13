import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon, 
  UserIcon, 
  ShieldCheckIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { CLINIC_INFO, ROUTES } from '../../shared/constants/config';
import SEOHead from '../../shared/components/seo/SEOHead.jsx';

const TermsPage = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      id: 'aceptacion',
      icon: CheckCircleIcon,
      title: '1. Aceptación de los Términos',
      content: `Al acceder y utilizar el sitio web de ${CLINIC_INFO.name}, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestro sitio web.`
    },
    {
      id: 'servicios',
      icon: ShieldCheckIcon,
      title: '2. Descripción de los Servicios',
      content: `${CLINIC_INFO.name} es una Institución Prestadora de Servicios de Salud (IPS) que ofrece servicios médicos especializados. Este sitio web proporciona información sobre nuestros servicios, facilita la comunicación con nuestros pacientes y permite el agendamiento de citas médicas.`
    },
    {
      id: 'uso-sitio',
      icon: UserIcon,
      title: '3. Uso del Sitio Web',
      content: `Usted se compromete a utilizar nuestro sitio web de manera responsable y conforme a la ley. No debe usar el sitio para fines ilegales, para transmitir contenido ofensivo, o para interferir con el funcionamiento normal del sitio.`
    },
    {
      id: 'informacion-medica',
      icon: DocumentTextIcon,
      title: '4. Información Médica',
      content: `La información proporcionada en este sitio web tiene fines informativos únicamente y no constituye consejo médico profesional. Siempre consulte con un profesional de la salud calificado para obtener asesoramiento médico específico.`
    },
    {
      id: 'privacidad',
      icon: ShieldCheckIcon,
      title: '5. Privacidad y Protección de Datos',
      content: `Nos comprometemos a proteger su privacidad y datos personales de acuerdo con la Ley 1581 de 2012 y sus decretos reglamentarios. Para más información, consulte nuestra Política de Tratamiento de Datos Personales.`
    },
    {
      id: 'citas',
      icon: ClockIcon,
      title: '6. Agendamiento de Citas',
      content: `Las citas agendadas a través de nuestro sitio web están sujetas a confirmación por parte de nuestro personal. Nos reservamos el derecho de reprogramar citas por motivos médicos o administrativos, notificándole con la debida anticipación.`
    },
    {
      id: 'responsabilidad',
      icon: ExclamationTriangleIcon,
      title: '7. Limitación de Responsabilidad',
      content: `${CLINIC_INFO.name} no será responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de usar este sitio web, excepto en los casos previstos por la ley.`
    }
  ];

  const additionalTerms = [
    {
      title: 'Propiedad Intelectual',
      content: 'Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos y diseños, es propiedad de Clínica Norte Especialidades SAS y está protegido por las leyes de propiedad intelectual.'
    },
    {
      title: 'Modificaciones',
      content: 'Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor al ser publicadas en este sitio web.'
    },
    {
      title: 'Ley Aplicable',
      content: 'Estos términos y condiciones se rigen por las leyes de la República de Colombia. Cualquier disputa será resuelta en los tribunales competentes de La Unión, Nariño.'
    },
    {
      title: 'Contacto',
      content: `Si tiene preguntas sobre estos términos y condiciones, puede contactarnos a través de ${CLINIC_INFO.contact.email} o ${CLINIC_INFO.contact.phone}.`
    }
  ];

  return (
    <>
      <SEOHead 
        title="Términos y Condiciones de Uso"
        description="Lee los términos y condiciones de uso del sitio web de Clínica Norte Especialidades SAS. Información sobre derechos, responsabilidades y políticas de uso de nuestros servicios digitales."
        keywords="términos condiciones, uso sitio web, políticas uso, derechos usuarios, responsabilidades, condiciones servicio"
        canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/terms` : ''}
      />
      
      <div className="overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/clinic/exterior/clinica-norte-entrada-pacientes.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay degradado */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/80 to-primary-700/70"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl container-custom section-padding">
          <div className="animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <DocumentTextIcon className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Términos y Condiciones
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
              Condiciones de uso del sitio web de <span className="font-semibold">{CLINIC_INFO.name}</span>
            </p>
            <div className="mt-6 text-primary-200">
              <p className="text-sm">Última actualización: {currentYear}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Términos Principales */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Introducción */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Condiciones de Uso
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Al utilizar nuestros servicios digitales, usted acepta cumplir con estos términos y condiciones. 
                Le recomendamos leer cuidadosamente toda la información contenida en este documento.
              </p>
            </div>

            {/* Secciones principales */}
            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.id} className="card border-l-4 border-l-primary-600">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                        {section.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Términos Adicionales */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
              Disposiciones Adicionales
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalTerms.map((term, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">
                    {term.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {term.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              ¿Tienes Preguntas?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Si necesitas aclarar algún punto de nuestros términos y condiciones, 
              no dudes en contactarnos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ROUTES.CONTACT} className="btn-secondary">
                Contactar
              </Link>
              <Link to={ROUTES.DATA_POLICIES} className="btn-outline-white">
                Ver Políticas de Datos
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary-500">
              <p className="text-primary-200 text-sm">
                Documento válido desde {currentYear} • {CLINIC_INFO.name}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default TermsPage;
