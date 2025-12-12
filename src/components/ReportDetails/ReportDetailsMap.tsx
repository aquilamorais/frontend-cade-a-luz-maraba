import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import mapIcon from '../../assets/map.png';
import { ReportDetailsMapProps } from './Types';

const defaultIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function ReportDetailsMap({ location }: ReportDetailsMapProps) {
    const googleMapsLink = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 h-full">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-(--color-secondary)">Mapa da Localização</h2>
                <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-(--color-tertiary) text-white text-sm font-semibold rounded-lg hover:bg-(--color-secondary) transition-colors"
                >
                    <img src={mapIcon} alt="" className="w-4 h-4" />
                    Abrir no Maps
                </a>
            </div>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden border-2 border-gray-200">
                <MapContainer
                    center={[location.latitude, location.longitude]}
                    zoom={15}
                    scrollWheelZoom={true}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[location.latitude, location.longitude]} icon={defaultIcon}>
                        <Popup>
                            <span className="font-semibold">Localização da denúncia</span>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600">
                    <span className="font-semibold">Coordenadas:</span>{' '}
                    Lat: {location.latitude.toFixed(6)}, Long: {location.longitude.toFixed(6)}
                </p>
            </div>
        </div>
    );
}

export default ReportDetailsMap;
