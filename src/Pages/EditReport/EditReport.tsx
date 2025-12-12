import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import EditReportHeader from '../../components/EditReport/EditReportHeader';
import EditReportTitle from '../../components/EditReport/EditReportTitle';
import EditReportForm from '../../components/EditReport/EditReportForm';
import { EditReportFormData, ReportType } from '../../components/EditReport/Types';
import { api } from '../../services/api';

interface ApiComplaint {
    id: string;
    title: string;
    description: string;
    img?: string | null;
    address: string;
    neighborhood: string;
    latitude?: number | null;
    longitude?: number | null;
    hour: string;
    createAt: string;
    updateAt: string;
    option: string;
    status: 'ABERTO' | 'EM_ANDAMENTO' | 'RESOLVIDO';
    userId: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}

const mapOptionToTipo = (option: string): ReportType => {
    const mapping: Record<string, ReportType> = {
        'FALTOUENERGIA': 'FALTA_ENERGIA',
        'OSCILACAO': 'OSCILACAO',
        'INCENDIO': 'INCENDIO',
        'MANUTENCAO': 'MANUTENCAO'
    };
    return mapping[option] || 'FALTA_ENERGIA';
};

const mapTipoToOption = (tipo: string): string => {
    const mapping: Record<string, string> = {
        'FALTA_ENERGIA': 'Faltou energia',
        'OSCILACAO': 'Oscilação de energia',
        'INCENDIO': 'Incêndio',
        'MANUTENCAO': 'Poste em manutenção'
    };
    return mapping[tipo] || 'Faltou energia';
};

function EditReport() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [initialData, setInitialData] = useState<EditReportFormData | null>(null);

    useEffect(() => {
        const fetchReport = async () => {
            if (!id) {
                setError('ID da denúncia não informado');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const response = await api.get<ApiComplaint>(`/complaints/${id}`);
                const complaint = response.data;

                setInitialData({
                    titulo: complaint.title,
                    descricao: complaint.description,
                    imagem: complaint.img || '',
                    endereco: complaint.address,
                    bairro: complaint.neighborhood,
                    cidade: 'Marabá',
                    estado: 'PA',
                    cep: '',
                    latitude: complaint.latitude?.toString() || '',
                    longitude: complaint.longitude?.toString() || '',
                    tipo: mapOptionToTipo(complaint.option)
                });
            } catch (err: any) {
                console.error('Erro ao carregar denúncia:', err);
                setError('Erro ao carregar dados da denúncia');
            } finally {
                setLoading(false);
            }
        };

        fetchReport();
    }, [id]);

    const handleSubmit = async (formData: EditReportFormData) => {
        if (!id) return;

        try {
            setSaving(true);

            const payload = {
                title: formData.titulo,
                description: formData.descricao,
                img: formData.imagem || undefined,
                address: formData.endereco,
                neighborhood: formData.bairro,
                latitude: formData.latitude ? parseFloat(formData.latitude) : undefined,
                longitude: formData.longitude ? parseFloat(formData.longitude) : undefined,
                option: mapTipoToOption(formData.tipo)
            };

            console.log('Atualizando denúncia:', payload);

            await api.put(`/complaints/${id}`, payload);
            
            alert('Denúncia atualizada com sucesso!');
            navigate(`/report/${id}`);
        } catch (error: any) {
            console.error('Erro ao atualizar denúncia:', error.response?.data || error.message);
            alert('Erro ao atualizar denúncia. Tente novamente.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <>
                <EditReportHeader />
                <main className="min-h-screen flex items-center justify-center bg-(--color-secondary)">
                    <div className="flex flex-col items-center gap-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                        <p className="text-white">Carregando denúncia...</p>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    if (error || !initialData) {
        return (
            <>
                <EditReportHeader />
                <main className="min-h-screen flex items-center justify-center bg-(--color-secondary)">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <p className="text-white text-xl">{error || 'Denúncia não encontrada'}</p>
                        <button
                            onClick={() => navigate('/home')}
                            className="px-6 py-2 bg-white text-(--color-secondary) rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                            Voltar para Home
                        </button>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <EditReportHeader />
            <main className="min-h-screen flex flex-col">
                <div className="flex flex-col gap-4 bg-(--color-secondary) py-8 px-4">
                    <div className="flex flex-col items-center w-full gap-4">
                        <EditReportTitle
                            title="Editar Denúncia"
                            subtitle="Atualize as informações da sua denúncia."
                        />
                        <EditReportForm 
                            initialData={initialData} 
                            onSubmit={handleSubmit}
                            isLoading={saving}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default EditReport;
