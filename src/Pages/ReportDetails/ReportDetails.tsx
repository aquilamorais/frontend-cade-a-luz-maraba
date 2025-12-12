import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import ReportDetailsInfo from '../../components/ReportDetails/ReportDetailsInfo';
import ReportDetailsMap from '../../components/ReportDetails/ReportDetailsMap';
import ReportDetailsActions from '../../components/ReportDetails/ReportDetailsActions';
import CreateReportHeader from '../../components/CreateReport/CreateReportHeader';
import { ReportDetails as ReportDetailsType } from './Types';
import { api } from '../../services/api.tsx';

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

const optionLabels: Record<string, string> = {
    'FALTOUENERGIA': 'Falta de Energia',
    'OSCILACAO': 'Oscilação de Energia',
    'INCENDIO': 'Incêndio',
    'MANUTENCAO': 'Poste em Manutenção'
};

function ReportDetails() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [report, setReport] = useState<ReportDetailsType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReport = async () => {
            if (!id) {
                setError('ID da denúncia não informado');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const response = await api.get(`/complaints/${id}`);
                const data = response.data as ApiComplaint;

                const token = localStorage.getItem('token');
                let currentUserId = '';
                if (token) {
                    try {
                        const payload = JSON.parse(atob(token.split('.')[1]));
                        currentUserId = payload.id;
                    } catch (e) {
                        console.error('Erro ao decodificar token:', e);
                    }
                }

                const formatDate = (dateString: string) => {
                    const date = new Date(dateString);
                    return date.toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                };

                const reportDetails: ReportDetailsType = {
                    id: data.id,
                    title: data.title,
                    description: data.description,
                    img: data.img,
                    option: optionLabels[data.option] || data.option,
                    status: data.status,
                    location: {
                        address: data.address,
                        neighborhood: data.neighborhood,
                        city: 'Marabá',
                        state: 'PA',
                        latitude: data.latitude || -5.3686,
                        longitude: data.longitude || -49.1178
                    },
                    createdAt: formatDate(data.createAt),
                    updatedAt: formatDate(data.updateAt),
                    user: {
                        id: data.user.id,
                        name: data.user.name,
                        email: data.user.email
                    },
                    isOwn: data.userId === currentUserId,
                    comments: []
                };

                setReport(reportDetails);
                setError(null);
            } catch (err: any) {
                console.error('Erro ao buscar denúncia:', err);
                setError(err.response?.status === 404 
                    ? 'Denúncia não encontrada' 
                    : 'Erro ao carregar denúncia');
            } finally {
                setLoading(false);
            }
        };

        fetchReport();
    }, [id]);

    const handleDelete = async (): Promise<void> => {
        if (window.confirm('Tem certeza que deseja excluir esta denúncia?')) {
            try {
                await api.delete(`/complaints/${id}`);
                alert('Denúncia excluída com sucesso!');
                navigate('/home');
            } catch (err: any) {
                console.error('Erro ao excluir denúncia:', err);
                alert('Erro ao excluir denúncia. Tente novamente.');
            }
        }
    };

    const handleEdit = (): void => {
        navigate(`/edit-report/${id}`);
    };

    if (loading) {
        return (
            <>
                <CreateReportHeader />
                <main className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-(--color-secondary) mx-auto mb-4"></div>
                        <p className="text-gray-600">Carregando detalhes...</p>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    if (!report) {
        return (
            <>
                <CreateReportHeader />
                <main className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-gray-600 mb-4">Denúncia não encontrada</p>
                        <button
                            onClick={() => navigate('/home')}
                            className="px-6 py-2 bg-(--color-secondary) text-white rounded-lg hover:bg-(--color-primary) transition-colors"
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
            <CreateReportHeader />
            <main className="min-h-screen bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 py-8">
                    <ReportDetailsInfo report={report} />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        <div className="lg:col-span-2">
                            <ReportDetailsMap location={report.location} />
                        </div>
                        <div>
                            {report.isOwn && (
                                <ReportDetailsActions
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default ReportDetails;
