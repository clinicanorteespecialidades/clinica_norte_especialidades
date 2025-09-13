import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { WHATSAPP_CONFIG } from '../../constants/config';

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`;
    window.open(url, '_blank');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className="fixed z-50"
      style={{
        bottom: WHATSAPP_CONFIG.position.bottom,
        right: WHATSAPP_CONFIG.position.right
      }}
    >
      {/* Expanded Chat Box */}
      {isExpanded && (
        <div className="mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 w-80 max-w-sm animate-slide-up transition-colors duration-300">
          {/* Header */}
          <div className="bg-green-500 dark:bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img 
                  rel="icon" 
                  type="image/svg+xml" 
                  src="/images/icons/logos/clinica-norte-favicon.svg" 
                  alt="Logo Clínica Norte"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h4 className="font-semibold">Clínica Norte Especialidades SAS</h4>
                <p className="text-sm opacity-90">En línea</p>
              </div>
            </div>
            <button
              onClick={toggleExpanded}
              className="text-white hover:bg-green-600 dark:hover:bg-green-700 rounded-full p-1 transition-colors duration-200"
              aria-label="Cerrar ventana de chat WhatsApp"
              type="button"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
          
          {/* Message */}
          <div className="p-4">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 mb-4 transition-colors duration-300">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                ¡Hola! 👋 Somos la Clínica Norte Especialidades SAS.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                ¿En qué podemos ayudarte hoy? Estamos aquí para brindarte la mejor atención médica.
              </p>
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              aria-label="Escribir mensaje por WhatsApp a la clínica"
              type="button"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.786"/>
              </svg>
              <span>Escribir por WhatsApp</span>
            </button>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3 transition-colors duration-300">
              Respuesta típica en pocos minutos
            </p>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={isExpanded ? handleWhatsAppClick : toggleExpanded}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 whatsapp-pulse"
        aria-label={isExpanded ? "Enviar mensaje por WhatsApp" : "Abrir chat de WhatsApp"}
        type="button"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.786"/>
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppButton;
