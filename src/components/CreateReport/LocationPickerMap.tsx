import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { Icon, LatLng, LatLngBounds } from 'leaflet';

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

export interface AddressData {
    endereco: string;
    bairro: string;
    cep: string;
}

interface LocationPickerMapProps {
    onLocationSelect: (lat: number, lng: number, address?: AddressData) => void;
    initialLat?: number;
    initialLng?: number;
}

async function reverseGeocode(lat: number, lng: number): Promise<AddressData | null> {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`,
            {
                headers: {
                    'Accept-Language': 'pt-BR',
                    'User-Agent': 'CadeALuzMaraba/1.0'
                }
            }
        );
        
        if (!response.ok) return null;
        
        const data = await response.json();
        const address = data.address || {};
        
        const road = address.road || address.street || address.pedestrian || '';
        const houseNumber = address.house_number || '';
        const endereco = houseNumber ? `${road}, ${houseNumber}` : road;
        
        const bairro = address.suburb || address.neighbourhood || address.district || address.city_district || '';
        const cep = address.postcode || '';
        
        return { endereco, bairro, cep };
    } catch (error) {
        console.error('Erro na geocodificação reversa:', error);
        return null;
    }
}

function LocationMarker({ onLocationSelect, position, setPosition, setLoading }: {
    onLocationSelect: (lat: number, lng: number, address?: AddressData) => void;
    position: LatLng | null;
    setPosition: (pos: LatLng) => void;
    setLoading: (loading: boolean) => void;
}) {
    useMapEvents({
        async click(e) {
            setPosition(e.latlng);
            setLoading(true);
            
            const addressData = await reverseGeocode(e.latlng.lat, e.latlng.lng);
            onLocationSelect(e.latlng.lat, e.latlng.lng, addressData || undefined);
            
            setLoading(false);
        },
    });

    return position === null ? null : (
        <Marker position={position} icon={defaultIcon} />
    );
}

function LocationPickerMap({ onLocationSelect, initialLat, initialLng }: LocationPickerMapProps) {
    const defaultCenter: [number, number] = [-5.3686, -49.1178];
    const [loading, setLoading] = useState(false);
    
    const [position, setPosition] = useState<LatLng | null>(
        initialLat && initialLng 
            ? new LatLng(initialLat, initialLng) 
            : null
    );

    useEffect(() => {
        if (initialLat && initialLng) {
            setPosition(new LatLng(initialLat, initialLng));
        }
    }, [initialLat, initialLng]);

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700">
                Marcar no Mapa
            </label>
            <p className="text-xs text-gray-500 mb-2">
                Clique no mapa para marcar a localização e preencher o endereço automaticamente
            </p>
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-gray-200">
                <MapContainer
                    center={position ? [position.lat, position.lng] : defaultCenter}
                    zoom={13}
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
                    <LocationMarker 
                        onLocationSelect={onLocationSelect} 
                        position={position}
                        setPosition={setPosition}
                        setLoading={setLoading}
                    />
                </MapContainer>
                {loading && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-[1000]">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-green-500 border-t-transparent"></div>
                            <span className="text-sm text-gray-700 font-medium">Buscando endereço...</span>
                        </div>
                    </div>
                )}
            </div>
            {position && (
                <div className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg border border-green-200 mt-1">
                    <p className="text-xs text-green-700">
                        <span className="font-bold">Coordenadas:</span>{' '}
                        {position.lat.toFixed(6)}, {position.lng.toFixed(6)}
                    </p>
                </div>
            )}
        </div>
    );
}

export default LocationPickerMap;
