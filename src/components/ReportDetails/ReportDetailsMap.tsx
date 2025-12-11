import mapIcon from '../../assets/map.png';
import { ReportDetailsMapProps } from './Types';

function ReportDetailsMap({ location }: ReportDetailsMapProps) {
    const mapUrl = `https://www.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`;
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
                <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa da localização"
                ></iframe>
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
