import { ShieldCheckIcon, DocumentTextIcon, UserIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { CLINIC_INFO } from '../../shared/constants/config';
import SEOHead from '../../shared/components/seo/SEOHead.jsx';

const DataPoliciesPage = () => {
  const principles = [
    {
      icon: LockClosedIcon,
      title: 'Confidencialidad',
      description: 'Garantizamos la protección y confidencialidad de todos los datos personales que nos confías.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Seguridad',
      description: 'Implementamos medidas técnicas y administrativas para proteger tu información personal.'
    },
    {
      icon: UserIcon,
      title: 'Derechos',
      description: 'Respetamos y facilitamos el ejercicio de tus derechos como titular de datos personales.'
    },
    {
      icon: DocumentTextIcon,
      title: 'Transparencia',
      description: 'Informamos claramente sobre el tratamiento que damos a tus datos personales.'
    }
  ];

  const rights = [
    'Conocer, actualizar y rectificar tus datos personales',
    'Solicitar prueba de la autorización otorgada',
    'Ser informado sobre el uso dado a tus datos personales',
    'Presentar quejas ante la Superintendencia de Industria y Comercio',
    'Revocar la autorización y/o solicitar la supresión del dato',
    'Acceder de forma gratuita a tus datos personales'
  ];

  return (
    <>
      <SEOHead 
        title="Políticas de Tratamiento de Datos Personales"
        description="Conoce nuestras políticas de protección de datos personales en Clínica Norte Especialidades SAS. Información sobre tratamiento, finalidades y derechos de los titulares según normatividad vigente."
        keywords="políticas datos personales, protección información, habeas data, tratamiento datos, derechos titulares, privacidad"
        canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/data-policies` : ''}
      />
      
      <div className="overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden  flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/clinic/exterior/clinica-norte-fachada-principal-2024.jpg')`, // Aquí tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay degradado */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/80 to-primary-700/70"></div>        
          <div className="relative z-10 text-center px-4 max-w-4xl container-custom section-padding">
            {/* Texto */}
            <div className="animate-fade-in-up max-w-3xl lg:max-w-lg text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Políticas de Tratamiento de Datos Personales
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              En cumplimiento con la Ley 1581 de 2012 (Habeas Data) y demás normatividad aplicable 
              en Colombia sobre protección de datos personales.
            </p>
            </div>
          </div>
      </section>

      {/* Legal Framework */}
      <section className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
              Marco Legal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-3">Ley 1581 de 2012</h3>
                <p className="text-gray-600 text-sm">
                  Régimen General de Protección de Datos Personales (Habeas Data)
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-3">Decreto 1377 de 2013</h3>
                <p className="text-gray-600 text-sm">
                  Reglamenta parcialmente la Ley 1581 de 2012
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-3">Ley 1266 de 2008</h3>
                <p className="text-gray-600 text-sm">
                  Disposiciones generales del hábeas data y regula el manejo de información
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Principios de Protección de Datos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro compromiso con la protección de tu información personal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Data Controller */}
      <section className="bg-white dark:bg-gray-800 section-padding transition-colors duration-300">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
              Responsable del Tratamiento
            </h2>
            
            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Identificación</h3>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Razón Social:</strong> {CLINIC_INFO.name}</p>
                    <p><strong>NIT:</strong> 800.123.456-7</p>
                    <p><strong>Dirección:</strong> {CLINIC_INFO.contact.address}</p>
                    <p><strong>Teléfono:</strong> {CLINIC_INFO.contact.phone}</p>
                    <p><strong>Email:</strong> {CLINIC_INFO.contact.email}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contacto para Datos</h3>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Email específico:</strong> {CLINIC_INFO.contact.email}</p>
                    <p><strong>Teléfono:</strong> {CLINIC_INFO.contact.phone}</p>
                    <p><strong>Horario de atención:</strong> {CLINIC_INFO.contact.schedule}</p>
                    <p><strong>Responsable:</strong> Oficial de Protección de Datos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Treatment Purpose */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
              Finalidades del Tratamiento
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Atención Médica</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                    Prestación de servicios médicos y asistenciales
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                    Elaboración de historias clínicas
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                    Seguimiento de tratamientos médicos
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                    Programación de citas y procedimientos
                  </li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Administrativa</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                    Facturación y gestión de pagos
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                    Comunicaciones institucionales
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                    Estudios estadísticos y de calidad
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                    Cumplimiento de obligaciones legales
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rights */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
              Tus Derechos como Titular
            </h2>
            
            <div className="card">
              <p className="text-gray-600 mb-6">
                Como titular de datos personales, tienes los siguientes derechos que puedes ejercer 
                en cualquier momento contactándonos:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rights.map((right, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 text-sm font-medium">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{right}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Rights */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Ejercer tus Derechos
            </h2>
            <p className="text-primary-100 mb-6">
              Para ejercer cualquiera de tus derechos sobre datos personales, 
              contáctanos a través de los siguientes medios:
            </p>
            <div className="space-y-3 text-sm text-primary-100">
              <p><strong>Email:</strong> {CLINIC_INFO.contact.email}</p>
              <p><strong>Teléfono:</strong> {CLINIC_INFO.contact.phone}</p>
              <p><strong>Formulario web:</strong> Disponible en sección de contacto</p>
            </div>
            <div className="mt-8">
              <p className="text-sm text-primary-200">
                Tiempo de respuesta: Máximo 15 días hábiles según la normatividad vigente
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default DataPoliciesPage;
