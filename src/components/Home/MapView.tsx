import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, LatLngBounds } from 'leaflet';
import { Report } from './Types';

const marabaBounds = new LatLngBounds(
    [-5.55, -49.35],
    [-5.15, -48.95]
);

const defaultIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const statusColors: Record<string, string> = {
    'ABERTO': '#EF4444',
    'EM_ANDAMENTO': '#F59E0B',
    'RESOLVIDO': '#10B981'
};

const statusLabels: Record<string, string> = {
    'ABERTO': 'Em Aberto',
    'EM_ANDAMENTO': 'Em Andamento',
    'RESOLVIDO': 'Resolvida'
};

interface MapViewProps {
    reports?: Report[];
}

function MapView({ reports = [] }: MapViewProps) {
    const defaultCenter: [number, number] = [-5.3686, -49.1178];
    
    const reportsWithLocation = reports.filter(r => r.latitude && r.longitude);

    return (
        <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-(--color-secondary) px-6 py-4">
                <h2 className="text-2xl font-bold text-white">Mapa de Denúncias</h2>
                <p className="text-sm text-gray-200 mt-1">
                    Visualize todas as denúncias na sua região ({reportsWithLocation.length} no mapa)
                </p>
            </div>
            <div className="relative h-[400px] bg-gray-100">
                <MapContainer
                    center={defaultCenter}
                    zoom={12}
                    minZoom={11}
                    maxZoom={18}
                    maxBounds={marabaBounds}
                    maxBoundsViscosity={1.0}
                    scrollWheelZoom={true}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {reportsWithLocation.map((report) => (
                        <Marker 
                            key={report.id} 
                            position={[report.latitude!, report.longitude!]} 
                            icon={defaultIcon}
                        >
                            <Popup>
                                <div className="min-w-[200px]">
                                    <h3 className="font-bold text-gray-800 mb-1">{report.title}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                                    <p className="text-xs text-gray-500 mb-2">📍 {report.address}</p>
                                    <span 
                                        className="inline-block px-2 py-1 text-xs font-bold rounded"
                                        style={{ 
                                            backgroundColor: `${statusColors[report.status]}20`,
                                            color: statusColors[report.status]
                                        }}
                                    >
                                        {statusLabels[report.status]}
                                    </span>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}

export default MapView;
