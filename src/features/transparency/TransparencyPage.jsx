import { DocumentTextIcon, EyeIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import SEOHead from '../../shared/components/seo/SEOHead.jsx';
import { CLINIC_INFO } from '../../shared/constants/config.js';

const TransparencyPage = () => {
    const documents = [
        {
            id: 'matriz-ita',
            title: 'Matriz de Información Transparencia Activa (ITA)',
            description: 'Información institucional según la normatividad de transparencia y acceso a la información pública.',
            category: 'Transparencia',
            format: 'PDF',
            size: '2.3 MB',
            lastUpdate: '2024-01-15'
        },
        {
            id: 'servicios-ips',
            title: 'Portafolio de Servicios IPS',
            description: 'Detalle completo de todos los servicios médicos ofrecidos por la institución.',
            category: 'Servicios',
            format: 'PDF',
            size: '1.8 MB',
            lastUpdate: '2024-01-10'
        },
        {
            id: 'tarifas',
            title: 'Manual de Tarifas',
            description: 'Tarifas aplicables según tipo de usuario y modalidad de atención.',
            category: 'Tarifas',
            format: 'PDF',
            size: '956 KB',
            lastUpdate: '2024-01-05'
        },
        {
            id: 'estados-financieros',
            title: 'Estados Financieros',
            description: 'Estados financieros auditados del último período fiscal.',
            category: 'Financiero',
            format: 'PDF',
            size: '3.2 MB',
            lastUpdate: '2024-01-20'
        },
        {
            id: 'habilitacion',
            title: 'Certificado de Habilitación',
            description: 'Certificado de habilitación otorgado por la Secretaría de Salud.',
            category: 'Certificaciones',
            format: 'PDF',
            size: '1.1 MB',
            lastUpdate: '2023-12-15'
        },
        {
            id: 'planeacion',
            title: 'Plan Estratégico Institucional',
            description: 'Plan estratégico y de mejoramiento continuo de la institución.',
            category: 'Planeación',
            format: 'PDF',
            size: '2.7 MB',
            lastUpdate: '2024-01-01'
        }
    ];


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <SEOHead 
                title="Transparencia y Acceso a la Información Pública"
                description="Accede a la información institucional de Clínica Norte Especialidades SAS. Documentos, reportes financieros, contratos y matriz de transparencia activa según normatividad vigente."
                keywords="transparencia, información pública, documentos institucionales, matriz ITA, reportes financieros, contratos públicos"
                canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/transparency` : ''}
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
                            Transparencia e Información Pública
                        </h1>
                        <p className="text-xl text-primary-100 leading-relaxed">
                            En cumplimiento con la normatividad colombiana, ponemos a disposición de la ciudadanía
                            la información institucional de interés público.
                        </p>
                    </div>
                </div>
            </section>

            {/* Legal Framework */}
            <section className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6 text-center transition-colors duration-300">
                            Marco Normativo
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-colors duration-300">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Ley 1712 de 2014</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                                    Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-colors duration-300">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Decreto 103 de 2015</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                                    Reglamenta parcialmente la Ley 1712 de 2014 y dicta otras disposiciones
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-colors duration-300">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Resolución 3100 de 2019</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                                    Condiciones de habilitación para prestadores de servicios de salud
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-colors duration-300">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Circular 058 de 2018</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                                    Supersalud - Instrucciones sobre transparencia activa en EPS e IPS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documents Section */}
            <section className="bg-gray-50 dark:bg-gray-900 section-padding transition-colors duration-300">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                            Documentos Públicos
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                            Accede a la información institucional de la Clínica Norte Especialidades SAS
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {documents.map((doc) => (
                            <div key={doc.id} className="card bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-300">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center transition-colors duration-300">
                                        <DocumentTextIcon className="w-6 h-6 text-primary-600 dark:text-primary-400 transition-colors duration-300" />
                                    </div>
                                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded transition-colors duration-300">
                                        {doc.category}
                                    </span>
                                </div>

                                <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                                    {doc.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors duration-300">
                                    {doc.description}
                                </p>

                                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-300">
                                    <span>{doc.format} • {doc.size}</span>
                                    <span>Act. {formatDate(doc.lastUpdate)}</span>
                                </div>

                                <div className="flex space-x-2">
                                    <button className="flex-1 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1">
                                        <EyeIcon className="w-4 h-4" />
                                        <span>Ver</span>
                                    </button>
                                    <button className="flex-1 bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1">
                                        <ArrowDownTrayIcon className="w-4 h-4" />
                                        <span>Descargar</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact for Info */}
            <section className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                            ¿Necesitas información adicional?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                            Si requieres información específica no disponible en esta sección,
                            puedes solicitarla a través de los siguientes medios:
                        </p>
                        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                            <p><strong>Email:</strong> {CLINIC_INFO.contact.email}</p>
                            <p><strong>Teléfono:</strong> {CLINIC_INFO.contact.phone}</p>
                            <p><strong>Dirección:</strong> {CLINIC_INFO.contact.address}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default TransparencyPage;
