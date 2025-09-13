import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { CLINIC_INFO } from '../../constants/config';
import 'leaflet/dist/leaflet.css';

// Crear icono personalizado para la clínica
const createClinicIcon = () => {
  return L.divIcon({
    html: `
      <div class="clinic-marker">
        <div class="clinic-marker-inner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white">
            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    `,
    className: 'clinic-map-marker',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

const ReactLeafletMap = ({ 
  height = '400px', 
  zoom = 16, 
  className = '',
  showPopup = true 
}) => {
  const position = [CLINIC_INFO.location.lat, CLINIC_INFO.location.lng];
  const clinicIcon = createClinicIcon();

  const handleDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${CLINIC_INFO.location.lat},${CLINIC_INFO.location.lng}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`relative ${className}`} style={{ height }}>
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg shadow-sm"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={clinicIcon}>
          {showPopup && (
            <Popup maxWidth={320} className="clinic-popup">
              <div className="p-2">
                <h3 className="font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2 text-lg">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  {CLINIC_INFO.contact.address}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <svg className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{CLINIC_INFO.contact.phone}</span>
                  </div>
                  
                  <div className="flex items-start space-x-2 text-sm">
                    <svg className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-gray-700 dark:text-gray-300">
                      <div>{CLINIC_INFO.contact.schedule.split('|')[0].trim()}</div>
                      <div className="mt-1">{CLINIC_INFO.contact.schedule.split('|')[1]?.trim()}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={handleDirections}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                    </svg>
                    <span>Direcciones</span>
                  </button>
                  
                  <a 
                    href={`tel:${CLINIC_INFO.contact.phone}`}
                    className="flex-1 bg-accent-600 hover:bg-accent-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Llamar</span>
                  </a>
                </div>
              </div>
            </Popup>
          )}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ReactLeafletMap;
