import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { CLINIC_INFO } from '../../constants/config';

// Fix para los iconos de Leaflet en React
import 'leaflet/dist/leaflet.css';

let DefaultIcon = L.divIcon({
  html: `<div class="custom-marker">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-primary-600">
      <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
    </svg>
  </div>`,
  className: 'custom-div-icon',
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -42],
});

L.Marker.prototype.options.icon = DefaultIcon;

const ClinicMap = ({ 
  height = '400px', 
  showControls = true, 
  showPopup = true,
  className = '',
  zoom = 16 
}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Inicializar el mapa
    const map = L.map(mapRef.current, {
      zoomControl: showControls,
      attributionControl: true,
    }).setView([CLINIC_INFO.location.lat, CLINIC_INFO.location.lng], zoom);

    // Agregar capa de tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Crear marcador personalizado
    const marker = L.marker([CLINIC_INFO.location.lat, CLINIC_INFO.location.lng])
      .addTo(map);

    // Agregar popup si está habilitado
    if (showPopup) {
      const popupContent = `
        <div class="p-4 max-w-xs">
          <h3 class="font-heading font-semibold text-gray-900 mb-2">${CLINIC_INFO.name}</h3>
          <p class="text-sm text-gray-600 mb-3">${CLINIC_INFO.contact.address}</p>
          <div class="space-y-2 text-sm">
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="text-gray-700">${CLINIC_INFO.contact.phone}</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-gray-700">${CLINIC_INFO.contact.schedule.split('|')[0].trim()}</span>
            </div>
          </div>
          <div class="mt-3 pt-3 border-t border-gray-200">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=${CLINIC_INFO.location.lat},${CLINIC_INFO.location.lng}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
              </svg>
              <span>Cómo llegar</span>
            </a>
          </div>
        </div>
      `;
      
      marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'clinic-popup'
      });
    }

    // Guardar referencia de la instancia del mapa
    mapInstanceRef.current = map;

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [height, showControls, showPopup, zoom]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full rounded-lg shadow-sm border border-gray-200 ${className}`}
      style={{ height }}
    />
  );
};

export default ClinicMap;
