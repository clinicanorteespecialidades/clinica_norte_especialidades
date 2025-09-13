import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { CLINIC_INFO } from '../../constants/config';
import 'leaflet/dist/leaflet.css';

// Icono más simple para mapas compactos
const createSimpleIcon = () => {
  return L.divIcon({
    html: `
      <div class="simple-marker">
        <div class="simple-marker-inner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-white">
            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    `,
    className: 'simple-map-marker',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
};

const CompactMap = ({ 
  height = '200px', 
  zoom = 14, 
  className = '',
  showPopup = false,
  interactive = false 
}) => {
  const position = [CLINIC_INFO.location.lat, CLINIC_INFO.location.lng];
  const simpleIcon = createSimpleIcon();

  return (
    <div className={`relative ${className}`} style={{ height }}>
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
        zoomControl={interactive}
        scrollWheelZoom={interactive}
        dragging={interactive}
        touchZoom={interactive}
        doubleClickZoom={interactive}
        boxZoom={interactive}
        keyboard={interactive}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={simpleIcon}>
          {showPopup && (
            <Popup>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">{CLINIC_INFO.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{CLINIC_INFO.contact.address}</p>
              </div>
            </Popup>
          )}
        </Marker>
      </MapContainer>
      
      {!interactive && (
        <div className="absolute inset-0 bg-transparent cursor-pointer rounded-lg" 
             onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${CLINIC_INFO.location.lat},${CLINIC_INFO.location.lng}`, '_blank')}
        />
      )}
    </div>
  );
};

export default CompactMap;
