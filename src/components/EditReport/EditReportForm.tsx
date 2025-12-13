import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { EditReportFormProps, EditReportFormData } from './Types';
import ImageUpload from '../CreateReport/ImageUpload';
import LocationPickerMap, { AddressData } from '../CreateReport/LocationPickerMap';

function EditReportForm({ initialData, onSubmit, isLoading }: EditReportFormProps) {
    const [formData, setFormData] = useState<EditReportFormData>(initialData);

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleLocationSelect = (lat: number, lng: number, address?: AddressData) => {
        setFormData(prev => ({
            ...prev,
            latitude: lat.toString(),
            longitude: lng.toString(),
            ...(address && {
                endereco: address.endereco || prev.endereco,
                bairro: address.bairro || prev.bairro,
                cep: address.cep || prev.cep
            })
        }));
    };

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    
                    setFormData(prev => ({
                        ...prev,
                        latitude: lat.toString(),
                        longitude: lng.toString()
                    }));

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
                        
                        if (response.ok) {
                            const data = await response.json();
                            const addr = data.address || {};
                            
                            const road = addr.road || addr.street || addr.pedestrian || '';
                            const houseNumber = addr.house_number || '';
                            const endereco = houseNumber ? `${road}, ${houseNumber}` : road;
                            const bairro = addr.suburb || addr.neighbourhood || addr.district || addr.city_district || '';
                            const cep = addr.postcode || '';
                            
                            setFormData(prev => ({
                                ...prev,
                                endereco: endereco || prev.endereco,
                                bairro: bairro || prev.bairro,
                                cep: cep
                            }));
                        }
                    } catch (error) {
                        console.error('Erro ao buscar endereço:', error);
                    }
                },
                (error) => {
                    console.error('Erro ao obter localização:', error);
                    alert('Não foi possível obter sua localização. Por favor, marque no mapa.');
                }
            );
        } else {
            alert('Geolocalização não é suportada por este navegador.');
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-8 w-full max-w-3xl bg-white p-8 rounded-lg shadow border border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xl font-bold">E</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-green-700">
                        Editar Denúncia
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="tipo" className="text-sm font-bold text-gray-700">
                            Tipo de Denúncia
                        </label>
                        <select
                            id="tipo"
                            name="tipo"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white focus:border-green-500 focus:outline-none"
                            value={formData.tipo}
                            onChange={handleChange}
                            required
                        >
                            <option value="FALTA_ENERGIA">Falta de Energia</option>
                            <option value="INCENDIO">Incêndio</option>
                            <option value="OSCILACAO">Oscilação de energia</option>
                            <option value="MANUTENCAO">Poste em manutenção</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="titulo" className="text-sm font-bold text-gray-700">
                            Título da Denúncia
                        </label>
                        <input
                            id="titulo"
                            type="text"
                            name="titulo"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white focus:border-green-500 focus:outline-none"
                            placeholder="Ex: Falta de energia na Rua X"
                            value={formData.titulo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao" className="text-sm font-bold text-gray-700">
                            Descrição
                        </label>
                        <textarea
                            id="descricao"
                            name="descricao"
                            rows={4}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white focus:border-green-500 focus:outline-none resize-none"
                            placeholder="Descreva detalhadamente o problema..."
                            value={formData.descricao}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <ImageUpload 
                        onImageUpload={(url) => setFormData(prev => ({ ...prev, imagem: url }))}
                        currentImage={formData.imagem}
                    />

                    <div className="border-t-2 border-gray-100 pt-6 mt-2">
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg font-bold text-gray-800">Localização</h3>
                            </div>
                            <button
                                type="button"
                                onClick={handleGetLocation}
                                className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white text-sm font-bold rounded-lg"
                            >
                                Usar Minha Localização
                            </button>
                        </div>

                        <div className="mb-5 rounded-lg overflow-hidden shadow">
                            <LocationPickerMap
                                onLocationSelect={handleLocationSelect}
                                initialLat={formData.latitude ? parseFloat(formData.latitude) : undefined}
                                initialLng={formData.longitude ? parseFloat(formData.longitude) : undefined}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label htmlFor="endereco" className="text-sm font-bold text-gray-700">
                                    Endereço
                                </label>
                                <input
                                    id="endereco"
                                    type="text"
                                    name="endereco"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white focus:border-green-500 focus:outline-none"
                                    placeholder="Rua, Avenida, número..."
                                    value={formData.endereco}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="bairro" className="text-sm font-bold text-gray-700">
                                    Bairro
                                </label>
                                <input
                                    id="bairro"
                                    type="text"
                                    name="bairro"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white focus:border-green-500 focus:outline-none"
                                    placeholder="Nome do bairro"
                                    value={formData.bairro}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="cep" className="text-sm font-bold text-gray-700">
                                    CEP
                                </label>
                                <input
                                    id="cep"
                                    type="text"
                                    name="cep"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white focus:border-green-500 focus:outline-none"
                                    placeholder="00000-000"
                                    value={formData.cep}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="cidade" className="text-sm font-bold text-gray-700">
                                    Cidade
                                </label>
                                <input
                                    id="cidade"
                                    type="text"
                                    name="cidade"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 cursor-not-allowed text-gray-500"
                                    value={formData.cidade}
                                    disabled
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="estado" className="text-sm font-bold text-gray-700">
                                    Estado
                                </label>
                                <input
                                    id="estado"
                                    type="text"
                                    name="estado"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 cursor-not-allowed text-gray-500"
                                    value={formData.estado}
                                    disabled
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="flex-1 py-3.5 px-4 bg-gray-100 text-gray-700 font-bold rounded-lg"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 py-3.5 px-4 bg-green-600 text-white font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Salvando...' : 'Salvar Alterações'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditReportForm;
