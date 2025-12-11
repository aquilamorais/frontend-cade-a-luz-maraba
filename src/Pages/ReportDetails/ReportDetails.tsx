import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import ReportDetailsInfo from '../../components/ReportDetails/ReportDetailsInfo';
import ReportDetailsMap from '../../components/ReportDetails/ReportDetailsMap';
import ReportDetailsActions from '../../components/ReportDetails/ReportDetailsActions';
import CreateReportHeader from '../../components/CreateReport/CreateReportHeader';
import { ReportDetails as ReportDetailsType, ReportComment } from './Types';

function ReportDetails() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [report, setReport] = useState<ReportDetailsType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const mockReport: ReportDetailsType = {
            id: id || '',
            title: 'Falta de energia na Rua das Flores',
            description: 'Estamos sem energia há mais de 3 horas. O problema começou por volta das 14:30. Toda a rua está afetada e já tentamos contato com a companhia de energia.',
            type: 'Falta de Energia',
            status: 'in_progress',
            location: {
                address: 'Rua das Flores, 123',
                neighborhood: 'Centro',
                city: 'Marabá',
                state: 'PA',
                cep: '68500-000',
                latitude: -5.3686,
                longitude: -49.1178
            },
            createdAt: '25/11/2025 14:30',
            updatedAt: '26/11/2025 10:15',
            user: {
                name: 'João Silva',
                email: 'joao.silva@email.com'
            },
            isOwn: true,
            comments: [
                {
                    id: 1,
                    author: 'Admin Sistema',
                    text: 'Denúncia recebida. Equipe técnica foi acionada.',
                    date: '25/11/2025 15:00',
                    isAdmin: true
                },
                {
                    id: 2,
                    author: 'João Silva',
                    text: 'Obrigado pelo retorno. Aguardando solução.',
                    date: '25/11/2025 15:30',
                    isAdmin: false
                }
            ]
        };

        setTimeout(() => {
            setReport(mockReport);
            setLoading(false);
        }, 500);
    }, [id]);

    const handleDelete = (): void => {
        if (window.confirm('Tem certeza que deseja excluir esta denúncia?')) {
            console.log('Deletando denúncia:', id);
            navigate('/home');
        }
    };

    const handleEdit = (): void => {
        navigate(`/edit-report/${id}`);
    };

    const handleAddComment = (commentText: string): void => {
        if (!report) return;

        console.log('Novo comentário:', commentText);

        const newComment: ReportComment = {
            id: report.comments.length + 1,
            author: report.user.name,
            text: commentText,
            date: new Date().toLocaleString('pt-BR'),
            isAdmin: false
        };

        setReport({
            ...report,
            comments: [...report.comments, newComment]
        });
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
