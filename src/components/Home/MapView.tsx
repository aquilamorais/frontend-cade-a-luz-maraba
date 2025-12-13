import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, LatLngBounds } from 'leaflet';
import { Report } from './Types';
import { 
    OPTION_COLORS, 
    STATUS_COLORS_MAP, 
    OPTION_LABELS, 
    STATUS_LABELS, 
    STATUS_COLORS,
    FALLBACK_COLOR 
} from '../../utils/colors';

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
const resolvedIcon = createColoredIcon('green');

const getIconForReport = (option: string, status: string): Icon => {
    if (status === 'RESOLVIDO') {
        return resolvedIcon;
    }
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
                {Object.entries(OPTION_LABELS).map(([key, label]) => (
                    <div key={key} className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-gray-200">
                        <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: OPTION_COLORS[key as keyof typeof OPTION_COLORS] }}
                        />
                        <span className="text-xs text-gray-600 font-medium">{label}</span>
                    </div>
                ))}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-green-200">
                    <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: STATUS_COLORS.resolved }}
                    />
                    <span className="text-xs text-green-600 font-medium">Resolvida</span>
                </div>
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
                            icon={getIconForReport(report.option, report.status)}
                        >
                            <Popup>
                                <div className="min-w-[220px] p-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div 
                                            className="w-3 h-3 rounded-full shadow-sm" 
                                            style={{ backgroundColor: OPTION_COLORS[report.option as keyof typeof OPTION_COLORS] || FALLBACK_COLOR }}
                                        />
                                        <span className="text-xs font-bold" style={{ color: OPTION_COLORS[report.option as keyof typeof OPTION_COLORS] || FALLBACK_COLOR }}>
                                            {OPTION_LABELS[report.option] || report.option}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-2 text-base">{report.title}</h3>
                                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{report.description}</p>
                                    <p className="text-xs text-gray-400 mb-3">{report.address}</p>
                                    <span 
                                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-lg"
                                        style={{ 
                                            backgroundColor: `${STATUS_COLORS_MAP[report.status]}15`,
                                            color: STATUS_COLORS_MAP[report.status]
                                        }}
                                    >
                                        {STATUS_LABELS[report.status]}
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
