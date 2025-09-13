import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon, 
  UserIcon, 
  DocumentTextIcon, 
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { CLINIC_INFO, ROUTES } from '../../shared/constants/config';
import SEOHead from '../../shared/components/seo/SEOHead.jsx';

const HabeasDataPage = () => {
  const rights = [
    {
      icon: EyeIcon,
      title: 'Derecho de Acceso',
      description: 'Conocer, actualizar y rectificar sus datos personales frente a los responsables del tratamiento.',
      details: 'Puede solicitar información sobre qué datos tenemos, cómo los usamos y con quién los compartimos.'
    },
    {
      icon: PencilSquareIcon,
      title: 'Derecho de Rectificación',
      description: 'Solicitar la corrección de información inexacta o incompleta.',
      details: 'Si encuentra errores en sus datos personales, puede pedir que los corrijamos de inmediato.'
    },
    {
      icon: TrashIcon,
      title: 'Derecho de Supresión',
      description: 'Solicitar la eliminación de sus datos cuando no sean necesarios.',
      details: 'Puede pedir que eliminemos sus datos cuando el tratamiento no sea necesario o legal.'
    },
    {
      icon: ExclamationCircleIcon,
      title: 'Derecho de Oposición',
      description: 'Oponerse al tratamiento de sus datos en determinadas circunstancias.',
      details: 'Puede objetar el uso de sus datos para fines específicos como marketing directo.'
    }
  ];

  const dataTypes = [
    {
      category: 'Datos de Identificación',
      items: ['Nombre completo', 'Número de identificación', 'Fecha de nacimiento', 'Género']
    },
    {
      category: 'Datos de Contacto',
      items: ['Dirección', 'Teléfono', 'Correo electrónico']
    },
    {
      category: 'Datos Médicos',
      items: ['Historia clínica', 'Diagnósticos', 'Tratamientos', 'Medicamentos']
    },
    {
      category: 'Datos Administrativos',
      items: ['Tipo de usuario', 'EPS', 'Autorizaciones', 'Facturación']
    }
  ];

  const purposes = [
    'Prestación de servicios médicos y asistenciales',
    'Agendamiento y seguimiento de citas médicas',
    'Gestión de historias clínicas y registros médicos',
    'Facturación y gestión administrativa',
    'Comunicación de resultados médicos',
    'Cumplimiento de obligaciones legales',
    'Mejora de la calidad en la atención',
    'Comunicación institucional relevante'
  ];

  const procedures = [
    {
      step: '1',
      title: 'Solicitud',
      description: 'Presente su solicitud por escrito identificándose plenamente y especificando claramente su petición.'
    },
    {
      step: '2',
      title: 'Radicación',
      description: 'Radique su solicitud en nuestras oficinas o envíela al correo electrónico oficial.'
    },
    {
      step: '3',
      title: 'Verificación',
      description: 'Verificaremos su identidad y la procedencia de la solicitud conforme a la ley.'
    },
    {
      step: '4',
      title: 'Respuesta',
      description: 'Le daremos respuesta en un plazo máximo de 15 días hábiles a partir de la recepción.'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Habeas Data - Derechos de los Titulares"
        description="Conoce y ejerce tus derechos como titular de datos personales en Clínica Norte Especialidades SAS. Información sobre habeas data, formularios de solicitud y procedimientos para el ejercicio de derechos."
        keywords="habeas data, derechos titulares, protección datos personales, formulario solicitudes, ejercicio derechos, privacidad"
        canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/habeas-data` : ''}
      />
      
      <div className="overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/clinic/interior/sala-espera-clinica-norte-nariño.jpg')`,
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
                <ShieldCheckIcon className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Habeas Data
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
              Protección y ejercicio de derechos sobre sus datos personales en <span className="font-semibold">{CLINIC_INFO.name}</span>
            </p>
            <div className="mt-6 text-primary-200">
              <p className="text-sm">Conforme a la Ley 1581 de 2012 y Decreto 1377 de 2013</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marco Legal */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Marco Legal
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                El derecho fundamental de Habeas Data está consagrado en el artículo 15 de la Constitución Política de Colombia 
                y desarrollado por la Ley 1581 de 2012, que regula la protección de datos personales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DocumentTextIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  Constitución Política
                </h3>
                <p className="text-gray-600 text-sm">
                  Artículo 15 - Derecho fundamental a la intimidad personal y al buen nombre
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  Ley 1581 de 2012
                </h3>
                <p className="text-gray-600 text-sm">
                  Régimen general de protección de datos personales en Colombia
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  Decreto 1377 de 2013
                </h3>
                <p className="text-gray-600 text-sm">
                  Aspectos reglamentarios del régimen de protección de datos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Derechos del Titular */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Sus Derechos como Titular de Datos
              </h2>
              <p className="text-lg text-gray-600">
                Como titular de datos personales, usted tiene los siguientes derechos fundamentales:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rights.map((right, index) => (
                <div key={index} className="card border-l-4 border-l-primary-600">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <right.icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                        {right.title}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {right.description}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {right.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Datos */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Tipos de Datos que Recolectamos
              </h2>
              <p className="text-lg text-gray-600">
                En el desarrollo de nuestras actividades como IPS, recolectamos y tratamos los siguientes tipos de datos:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataTypes.map((dataType, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                    {dataType.category}
                  </h3>
                  <ul className="space-y-2">
                    {dataType.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Finalidades */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Finalidades del Tratamiento
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Sus datos personales son tratados exclusivamente para las siguientes finalidades:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {purposes.map((purpose, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                  <CheckCircleIcon className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{purpose}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Procedimiento */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Procedimiento para Ejercer sus Derechos
              </h2>
              <p className="text-lg text-gray-600">
                Para ejercer cualquiera de sus derechos sobre datos personales, siga este procedimiento:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {procedures.map((procedure, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {procedure.step}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">
                    {procedure.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {procedure.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacto para Habeas Data */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Ejercer sus Derechos
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Para ejercer sus derechos de Habeas Data, puede contactarnos a través de los siguientes medios:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-6">
                <PhoneIcon className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Teléfono</h3>
                <p className="text-primary-200">{CLINIC_INFO.contact.phone}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <EnvelopeIcon className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-primary-200">{CLINIC_INFO.contact.email}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ROUTES.CONTACT} className="btn-secondary">
                Contactar Ahora
              </Link>
              <Link to={ROUTES.DATA_POLICIES} className="btn-outline-white">
                Ver Políticas Completas
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary-500">
              <p className="text-primary-200 text-sm">
                {CLINIC_INFO.name} • Comprometidos con la protección de sus datos personales
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HabeasDataPage;
