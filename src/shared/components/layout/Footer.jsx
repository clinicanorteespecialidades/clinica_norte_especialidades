import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { CLINIC_INFO, ROUTES } from '../../constants/config';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Medicina General', href: `${ROUTES.SERVICES}#medicina-general` },
      { name: 'Cardiología', href: `${ROUTES.SERVICES}#cardiologia` },
      { name: 'Fonoaudiología', href: `${ROUTES.SERVICES}#fonoaudiologia` },
      { name: 'Nutrición y Dietética', href: `${ROUTES.SERVICES}#nutricion` },
      { name: 'Enfermería', href: `${ROUTES.SERVICES}#enfermeria` },
      { name: 'Dermatología', href: `${ROUTES.SERVICES}#dermatologia` },
      { name: 'Ginecología', href: `${ROUTES.SERVICES}#ginecologia` },
      { name: 'Pediatría', href: `${ROUTES.SERVICES}#pediatria` },
      { name: 'Neurología', href: `${ROUTES.SERVICES}#neurologia` },
      { name: 'Medicina Interna', href: `${ROUTES.SERVICES}#medicina-interna` },
      { name: 'Medicina Alternativa', href: `${ROUTES.SERVICES}#medicina-alternativa` },
      { name: 'Entre otras especialidades', href: `${ROUTES.SERVICES}#otras` },
    ],
    company: [
      { name: 'Nosotros', href: ROUTES.ABOUT },
      { name: 'Servicios', href: ROUTES.SERVICES },
      { name: 'Especialidades', href: ROUTES.SPECIALTIES },
      { name: 'Noticias', href: ROUTES.NEWS },
      { name: 'Contacto', href: ROUTES.CONTACT },

    ],
    legal: [
      { name: 'Transparencia', href: ROUTES.TRANSPARENCY },
      { name: 'Políticas de Datos', href: ROUTES.DATA_POLICIES },
      { name: 'Términos y Condiciones', href: ROUTES.TERMS },
      { name: 'Habeas Data', href: ROUTES.HABEAS_DATA },
    ]
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300 cls-prevent-footer">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Clinic Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-800 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <img 
                    rel="icon" 
                    type="image/svg+xml" 
                    src="/images/icons/logos/clinica-norte-favicon.svg" 
                    alt="Logo Clínica Norte Especialidades"
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    {CLINIC_INFO.name}
                  </h3>
                  <p className="text-primary-400 dark:text-primary-300 font-medium transition-colors duration-300">
                    {CLINIC_INFO.slogan}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed transition-colors duration-300">
                {CLINIC_INFO.description}
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                {Object.entries(CLINIC_INFO.social).map(([platform, url]) => {
                  const Icon =
                    platform === "facebook"
                      ? FaFacebookF
                      : platform === "instagram"
                        ? FaInstagram
                        : null;

                  return (
                    Icon && (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
            w-10 h-10 rounded-full flex items-center justify-center
            transition-all duration-300 transform hover:scale-110
            ${platform === "facebook" ? "bg-blue-600 hover:bg-blue-700" : ""}
            ${platform === "instagram" ? "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:opacity-90" : ""}
          `}
                        aria-label={`Síguenos en ${platform}`}
                      >
                        <Icon className="text-white text-lg" />
                      </a>
                    )
                  );
                })}
              </div>

            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6 text-white">
                Servicios
              </h4>
              <ul className="columns-2 gap-x-8 space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 dark:text-gray-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6 text-white">
                Institución
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 dark:text-gray-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6 text-white">
                Contacto
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="w-5 h-5 text-primary-400 dark:text-primary-300 mt-1 flex-shrink-0 transition-colors duration-300" />
                  <div>
                    <p className="text-gray-300 dark:text-gray-400 text-sm transition-colors duration-300">
                      {CLINIC_INFO.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-primary-400 dark:text-primary-300 flex-shrink-0 transition-colors duration-300" />
                  <a
                    href={`tel:${CLINIC_INFO.contact.phone}`}
                    className="text-gray-300 dark:text-gray-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                  >
                    {CLINIC_INFO.contact.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-5 h-5 text-primary-400 dark:text-primary-300 flex-shrink-0 transition-colors duration-300" />
                  <a
                    href={`mailto:${CLINIC_INFO.contact.email}`}
                    className="text-gray-300 dark:text-gray-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                  >
                    {CLINIC_INFO.contact.email}
                  </a>
                </div>

                {/* WhatsApp Link */}
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <a
                    href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/\+|\s/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 dark:text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    WhatsApp: {CLINIC_INFO.contact.whatsapp}
                  </a>
                </div>

                <div className="flex items-start space-x-3">
                  <ClockIcon className="w-5 h-5 text-primary-400 dark:text-primary-300 mt-1 flex-shrink-0 transition-colors duration-300" />
                  <div>
                    <p className="text-gray-300 dark:text-gray-400 text-sm transition-colors duration-300">
                      {CLINIC_INFO.contact.schedule}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="border-t border-gray-800 dark:border-gray-700 py-6 transition-colors duration-300">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 gap-4">
            {/* Links legales */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Copyright y créditos */}
            <div className="text-sm text-gray-400 dark:text-gray-500 transition-colors duration-300">
              <div className="flex flex-col space-y-1 text-center lg:text-right">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 justify-center lg:justify-end">
                  <span>© {currentYear} {CLINIC_INFO.name}.</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-xs">NIT: 901845291-1</span>
                </div>
                <p className="text-xs mt-1">
                  Sitio desarrollado por{" "}
                  <a
                    href="https://portafolio-tau-flax.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 font-medium"
                  >
                    Edison Narvaez
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
