import mapImage from '../../assets/map.png';

function MapView() {
    return (
        <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-(--color-secondary) px-6 py-4">
                <h2 className="text-2xl font-bold text-white">Mapa de Denúncias</h2>
                <p className="text-sm text-gray-200 mt-1">Visualize todas as denúncias na sua região</p>
            </div>
            <div className="relative h-[400px] bg-gray-100">
                <img
                    src={mapImage}
                    alt="Mapa de denúncias"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
                    <div className="bg-white px-6 py-3 rounded-lg shadow-lg">
                        <p className="text-sm font-semibold text-gray-700">Mapa interativo será carregado aqui</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MapView;
