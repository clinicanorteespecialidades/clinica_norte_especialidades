import { MapPinIcon, PhoneIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { CLINIC_INFO } from '../../constants/config';

const ContactInfo = ({ variant = 'default', showTitle = true, className = '' }) => {
  const contactItems = [
    {
      icon: MapPinIcon,
      title: 'Dirección',
      content: CLINIC_INFO.contact.address,
      action: () => window.open(`https://www.google.com/maps/dir/?api=1&destination=${CLINIC_INFO.location.lat},${CLINIC_INFO.location.lng}`, '_blank')
    },
    {
      icon: PhoneIcon,
      title: 'Teléfono',
      content: CLINIC_INFO.contact.phone,
      action: () => window.open(`tel:${CLINIC_INFO.contact.phone}`, '_self')
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: CLINIC_INFO.contact.email,
      action: () => window.open(`mailto:${CLINIC_INFO.contact.email}`, '_self')
    },
    {
      icon: ClockIcon,
      title: 'Horarios',
      content: CLINIC_INFO.contact.schedule
    }
  ];

  if (variant === 'compact') {
    return (
      <div className={`space-y-3 ${className}`}>
        {showTitle && (
          <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Información de Contacto
          </h3>
        )}
        {contactItems.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-start space-x-3 ${item.action ? 'cursor-pointer hover:text-primary-600 dark:hover:text-primary-400 transition-colors' : ''}`}
            onClick={item.action}
          >
            <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5 transition-colors duration-300" />
            <div className="text-sm">
              <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300">{item.title}</p>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {showTitle && (
        <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
          Información de Contacto
        </h3>
      )}
      {contactItems.map((item, index) => (
        <div 
          key={index} 
          className={`flex items-start space-x-4 ${item.action ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors duration-300' : 'p-3'}`}
          onClick={item.action}
        >
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
            <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400 transition-colors duration-300" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">{item.title}</h4>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
