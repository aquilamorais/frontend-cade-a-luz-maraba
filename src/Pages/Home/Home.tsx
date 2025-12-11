import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import MapView from '../../components/Home/MapView';
import QuickActions from '../../components/Home/QuickActions';
import StatsOverview from '../../components/Home/StatsOverview';
import MyReportsList from '../../components/Home/MyReportsList';
import AllReportsList from '../../components/Home/AllReportsList';
import HomeHeader from '../../components/Home/HomeHeader';
import { Stats, Report } from './Types';

function Home() {
    const navigate = useNavigate();

    const stats: Stats = {
        resolved: 45,
        inProgress: 12,
        open: 8,
        total: 65,
        pending: 20
    };

    const myReports: Report[] = [
        {
            id: 1,
            title: 'Falta de energia na Rua das Flores',
            description: 'Sem energia há 3 horas',
            location: 'Rua das Flores, 123',
            status: 'in_progress',
            date: '25/11/2025 14:30',
            user: 'João Silva'
        },
        {
            id: 2,
            title: 'Poste queimado',
            description: 'Poste da esquina está com problemas',
            location: 'Av. Principal, 456',
            status: 'resolved',
            date: '20/11/2025 10:15',
            user: 'João Silva'
        }
    ];

    const allReports: Report[] = [
        {
            id: 3,
            title: 'Transformador com problema',
            description: 'Fazendo barulho estranho',
            location: 'Rua São João, 789',
            status: 'open',
            date: '26/11/2025 08:00',
            user: 'Maria Santos'
        },
        {
            id: 4,
            title: 'Iluminação pública apagada',
            description: 'Toda a rua está sem iluminação',
            location: 'Rua do Comércio, 321',
            status: 'in_progress',
            date: '25/11/2025 19:45',
            user: 'Pedro Oliveira'
        },
        {
            id: 5,
            title: 'Cabo solto',
            description: 'Cabo de energia solto e perigoso',
            location: 'Travessa A, 555',
            status: 'resolved',
            date: '24/11/2025 16:20',
            user: 'Ana Costa'
        }
    ];

    const handleNewReport = () => {
        navigate('/create-report');
    };

    const handleViewProfile = () => {
        navigate('/user');
    };

    return (
        <>
            <HomeHeader />
            <main className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-8">

                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-(--color-primary) mb-2">
                            Bem-vindo!
                        </h1>
                        <p className="text-gray-600">
                            Acompanhe e gerencie suas denúncias de falta de energia
                        </p>
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
                        <MapView />
                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <MyReportsList reports={myReports} />
                        <AllReportsList reports={allReports} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;
