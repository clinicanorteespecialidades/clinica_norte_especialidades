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
            lastUpdate: '2024-01-15',
            file: '/documents/matriz-ita.pdf'
        },
        {
            id: 'servicios-ips',
            title: 'Portafolio de Servicios IPS',
            description: 'Detalle completo de todos los servicios médicos ofrecidos por la institución.',
            category: 'Servicios',
            format: 'PDF',
            size: '1.8 MB',
            lastUpdate: '2024-01-10',
            file: '/documents/servicios-ips.pdf'
        },
        {
            id: 'tarifas',
            title: 'Manual de Tarifas',
            description: 'Tarifas aplicables según tipo de usuario y modalidad de atención.',
            category: 'Tarifas',
            format: 'PDF',
            size: '956 KB',
            lastUpdate: '2024-01-05',
            file: '/documents/tarifas.pdf'
        },
        {
            id: 'estados-financieros',
            title: 'Estados Financieros',
            description: 'Estados financieros auditados del último período fiscal.',
            category: 'Financiero',
            format: 'PDF',
            size: '3.2 MB',
            lastUpdate: '2024-01-20',
            file: '/documents/estados-financieros.pdf'
        },
        {
            id: 'habilitacion',
            title: 'Certificado de Habilitación',
            description: 'Certificado de habilitación otorgado por la Secretaría de Salud.',
            category: 'Certificaciones',
            format: 'PDF',
            size: '1.1 MB',
            lastUpdate: '2023-12-15',
            file: '/documents/habilitacion.pdf'
        },
        {
            id: 'planeacion',
            title: 'Plan Estratégico Institucional',
            description: 'Plan estratégico y de mejoramiento continuo de la institución.',
            category: 'Planeación',
            format: 'PDF',
            size: '2.7 MB',
            lastUpdate: '2024-01-01',
            file: '/documents/planeacion.pdf'
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

    const handleView = (file) => {
        window.open(file, '_blank');
    };

    const handleDownload = (file) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = file.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
                    className="relative text-white overflow-hidden flex items-center justify-center"
                    style={{
                        backgroundImage: `url('/images/clinic/exterior/clinica-norte-fachada-principal-2024.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/80 to-primary-700/70"></div>

                    <div className="relative z-10 text-center px-4 max-w-4xl container-custom section-padding">
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

                {/* Marco Normativo */}
                <section className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6 text-center">
                                Marco Normativo
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Ley 1712 de 2014</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional
                                    </p>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Decreto 103 de 2015</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Reglamenta parcialmente la Ley 1712 de 2014
                                    </p>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Resolución 3100 de 2019</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Condiciones de habilitación para prestadores de servicios de salud
                                    </p>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Circular 058 de 2018</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Supersalud - Transparencia activa en EPS e IPS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Documentos */}
                <section className="bg-gray-50 dark:bg-gray-900 section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                                Documentos Públicos
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {documents.map((doc) => (
                                <div key={doc.id} className="card bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                                    
                                    <div className="flex items-start justify-between mb-4">
                                        <DocumentTextIcon className="w-6 h-6 text-primary-600" />
                                        <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                            {doc.category}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {doc.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                        {doc.description}
                                    </p>

                                    <div className="text-xs text-gray-500 mb-4">
                                        {doc.format} • {doc.size} • {formatDate(doc.lastUpdate)}
                                    </div>

                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleView(doc.file)}
                                            className="flex-1 bg-primary-600 text-white py-2 rounded-lg flex items-center justify-center gap-1"
                                        >
                                            <EyeIcon className="w-4 h-4" />
                                            Ver
                                        </button>

                                        <button
                                            onClick={() => handleDownload(doc.file)}
                                            className="flex-1 bg-gray-600 text-white py-2 rounded-lg flex items-center justify-center gap-1"
                                        >
                                            <ArrowDownTrayIcon className="w-4 h-4" />
                                            Descargar
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contacto */}
                <section className="py-16 text-center">
                    <p>{CLINIC_INFO.contact.email}</p>
                    <p>{CLINIC_INFO.contact.phone}</p>
                    <p>{CLINIC_INFO.contact.address}</p>
                </section>

            </div>
        </>
    );
};

export default TransparencyPage;
