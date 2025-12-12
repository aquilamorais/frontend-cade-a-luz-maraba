import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { Icon, LatLng } from 'leaflet';

const defaultIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

interface LocationPickerMapProps {
    onLocationSelect: (lat: number, lng: number) => void;
    initialLat?: number;
    initialLng?: number;
}

function LocationMarker({ onLocationSelect, position, setPosition }: {
    onLocationSelect: (lat: number, lng: number) => void;
    position: LatLng | null;
    setPosition: (pos: LatLng) => void;
}) {
    useMapEvents({
        click(e) {
            setPosition(e.latlng);
            onLocationSelect(e.latlng.lat, e.latlng.lng);
        },
    });

    return position === null ? null : (
        <Marker position={position} icon={defaultIcon} />
    );
}

function LocationPickerMap({ onLocationSelect, initialLat, initialLng }: LocationPickerMapProps) {
    const defaultCenter: [number, number] = [-5.3686, -49.1178];
    
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
            <label className="text-sm font-semibold text-gray-700">
                Marcar no Mapa
            </label>
            <p className="text-xs text-gray-500 mb-2">
                Clique no mapa para marcar a localização exata
            </p>
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden border-2 border-gray-300">
                <MapContainer
                    center={position ? [position.lat, position.lng] : defaultCenter}
                    zoom={13}
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
                    />
                </MapContainer>
            </div>
            {position && (
                <p className="text-xs text-gray-600 mt-1">
                    <span className="font-semibold">Coordenadas selecionadas:</span>{' '}
                    Lat: {position.lat.toFixed(6)}, Long: {position.lng.toFixed(6)}
                </p>
            )}
        </div>
    );
}

export default LocationPickerMap;
