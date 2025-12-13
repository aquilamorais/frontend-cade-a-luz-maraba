import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import Footer from '../../components/Footer';
import MapView from '../../components/Home/MapView';
import QuickActions from '../../components/Home/QuickActions';
import StatsOverview from '../../components/Home/StatsOverview';
import MyReportsList from '../../components/Home/MyReportsList';
import AllReportsList from '../../components/Home/AllReportsList';
import HomeHeader from '../../components/Home/HomeHeader';
import { Stats, Report } from './Types';
import { api } from '../../services/api.tsx';

function Home() {
    const navigate = useNavigate();
    const [allReports, setAllReports] = useState<Report[]>([]);
    const [myReports, setMyReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [stats, setStats] = useState<Stats>({
        resolved: 0,
        inProgress: 0,
        open: 0,
        total: 0,
        pending: 0
    });

    const fetchComplaints = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const [allResponse, myResponse] = await Promise.all([
                api.get('/complaints'),
                api.get('/complaints/my')
            ]);

            const allData = allResponse.data as Report[];
            const myData = myResponse.data as Report[];

            setAllReports(allData);
            setMyReports(myData);

            const resolved = allData.filter(r => r.status === 'RESOLVIDO').length;
            const inProgress = allData.filter(r => r.status === 'EM_ANDAMENTO').length;
            const open = allData.filter(r => r.status === 'ABERTO').length;

            setStats({
                resolved,
                inProgress,
                open,
                total: allData.length,
                pending: open + inProgress
            });

        } catch (err) {
            console.error('Erro ao buscar denúncias:', err);
            setError('Erro ao carregar denúncias. Tente novamente.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchComplaints();
    }, [fetchComplaints]);

    const handleNewReport = () => {
        navigate('/create-report');
    };

    const handleViewProfile = () => {
        navigate('/user');
    };

    const handleRefresh = () => {
        fetchComplaints();
    };

    return (
        <>
            <HomeHeader />
            <main className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-8">

                    <div className="mb-8 flex justify-between items-start">
                        <div>
                            <h1 className="text-4xl font-bold text-(--color-primary) mb-2">
                                Bem-vindo!
                            </h1>
                            <p className="text-gray-600">
                                Acompanhe e gerencie suas denúncias de falta de energia
                            </p>
                        </div>
                        <button
                            onClick={handleRefresh}
                            disabled={loading}
                            className="px-4 py-2 bg-(--color-secondary) text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
                        >
                            Atualizar
                        </button>
                    </div>


                    <div className="mb-8">
                        <QuickActions
                            onNewReport={handleNewReport}
                            onViewProfile={handleViewProfile}
                        />
                    </div>


                    <div className="mb-8">
                        <StatsOverview stats={stats} />
                    </div>


                    <div className="mb-8">
                        <MapView reports={allReports} />
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-(--color-primary)"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center py-12">
                            <p className="text-red-500">{error}</p>
                            <button 
                                onClick={() => window.location.reload()} 
                                className="mt-4 px-4 py-2 bg-(--color-primary) text-white rounded-lg hover:opacity-90"
                            >
                                Tentar novamente
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            <MyReportsList reports={myReports} />
                            <AllReportsList reports={allReports} />
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;
