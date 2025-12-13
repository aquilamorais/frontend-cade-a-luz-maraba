import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, LatLngBounds } from 'leaflet';
import { Report } from './Types';

const marabaBounds = new LatLngBounds(
    [-5.55, -49.35],
    [-5.15, -48.95]
);

const createColoredIcon = (color: string) => new Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const optionIcons: Record<string, Icon> = {
    'FALTOUENERGIA': createColoredIcon('blue'),
    'OSCILACAO': createColoredIcon('violet'),
    'INCENDIO': createColoredIcon('yellow'),
    'MANUTENCAO': createColoredIcon('orange')
};

const defaultIcon = createColoredIcon('grey');

const optionLabels: Record<string, string> = {
    'FALTOUENERGIA': 'Falta de Energia',
    'OSCILACAO': 'Oscilação de Energia',
    'INCENDIO': 'Incêndio',
    'MANUTENCAO': 'Poste em Manutenção'
};

const optionColors: Record<string, string> = {
    'FALTOUENERGIA': '#3B82F6',
    'OSCILACAO': '#8B5CF6',
    'INCENDIO': '#EAB308',
    'MANUTENCAO': '#F97316'
};

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

const getIconForOption = (option: string): Icon => {
    return optionIcons[option] || defaultIcon;
};

interface MapViewProps {
    reports?: Report[];
}

function MapView({ reports = [] }: MapViewProps) {
    const defaultCenter: [number, number] = [-5.3686, -49.1178];
    
    const reportsWithLocation = reports.filter(r => r.latitude && r.longitude);

    return (
        <div className="w-full bg-white rounded-lg overflow-hidden border border-gray-200">
            <div className="bg-green-700 px-6 py-5">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-white">Mapa de Denúncias</h2>
                        <p className="text-green-100 text-sm">
                            Visualize todas as denúncias na sua região
                        </p>
                    </div>
                    <span className="px-4 py-2 bg-white/20 text-white text-sm font-bold rounded-lg">
                        {reportsWithLocation.length} marcador(es)
                    </span>
                </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
                <span className="text-sm text-gray-600 font-semibold">Legenda:</span>
                {Object.entries(optionLabels).map(([key, label]) => (
                    <div key={key} className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-gray-200">
                        <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: optionColors[key] }}
                        />
                        <span className="text-xs text-gray-600 font-medium">{label}</span>
                    </div>
                ))}
            </div>

            <div className="relative h-[450px] bg-gray-100">
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
                            icon={getIconForOption(report.option)}
                        >
                            <Popup>
                                <div className="min-w-[220px] p-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div 
                                            className="w-3 h-3 rounded-full shadow-sm" 
                                            style={{ backgroundColor: optionColors[report.option] || '#6B7280' }}
                                        />
                                        <span className="text-xs font-bold" style={{ color: optionColors[report.option] || '#6B7280' }}>
                                            {optionLabels[report.option] || report.option}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-2 text-base">{report.title}</h3>
                                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{report.description}</p>
                                    <p className="text-xs text-gray-400 mb-3">{report.address}</p>
                                    <span 
                                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-lg"
                                        style={{ 
                                            backgroundColor: `${statusColors[report.status]}15`,
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
