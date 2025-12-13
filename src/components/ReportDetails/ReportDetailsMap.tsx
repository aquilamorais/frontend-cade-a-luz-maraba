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
        <div className="bg-white rounded-lg p-6 h-full border border-gray-200">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-extrabold text-green-700">
                    Mapa da Localização
                </h2>
                <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white text-sm font-bold rounded-lg"
                >
                    <img src={mapIcon} alt="" className="w-4 h-4" />
                    Abrir no Maps
                </a>
            </div>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-gray-200">
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
                            <span className="font-bold text-green-700">Localização da denúncia</span>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                <p className="text-sm text-green-700">
                    <span className="font-bold">Coordenadas:</span>{' '}
                    {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}
                </p>
            </div>
        </div>
    );
}

export default ReportDetailsMap;
