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

                    <div className="mb-10 flex justify-between items-start">
                        <div>
                            <h1 className="text-4xl font-bold text-green-700 mb-2">
                                Bem-vindo!
                            </h1>
                            <p className="text-gray-500">
                                Acompanhe e gerencie suas denúncias de falta de energia
                            </p>
                        </div>
                        <button
                            onClick={handleRefresh}
                            disabled={loading}
                            className="px-5 py-2.5 bg-green-600 text-white rounded-lg disabled:opacity-50 flex items-center gap-2 font-medium"
                        >
                            Atualizar
                        </button>
                    </div>


                    <div className="mb-10">
                        <QuickActions
                            onNewReport={handleNewReport}
                            onViewProfile={handleViewProfile}
                        />
                    </div>


                    <div className="mb-10">
                        <StatsOverview stats={stats} />
                    </div>


                    <div className="mb-10">
                        <MapView reports={allReports} />
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center py-16">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
                                <p className="text-gray-500 font-medium">Carregando denúncias...</p>
                            </div>
                        </div>
                    ) : error ? (
                        <div className="text-center py-16 bg-white rounded-lg shadow">
                            <p className="text-red-500 font-medium mb-4">{error}</p>
                            <button 
                                onClick={() => window.location.reload()} 
                                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium"
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
