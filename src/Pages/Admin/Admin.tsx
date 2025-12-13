import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../../components/Footer';
import AdminHeader from '../../components/Admin/AdminHeader';
import UserList from '../../components/Admin/UserList';
import AdminReportList from '../../components/Admin/AdminReportList';
import EditUserModal from '../../components/Admin/EditUserModal';
import DeleteConfirmModal from '../../components/Admin/DeleteConfirmModal';
import DeleteReportModal from '../../components/Admin/DeleteReportModal';
import { User } from '../../components/Admin/Types';
import { Report } from '../../components/Home/Types';
import { api } from '../../services/api';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
    id: string;
    role: string;
}

function Admin() {
    const navigate = useNavigate();
    const [users, setUsers] = useState<User[]>([]);
    const [reports, setReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'users' | 'reports'>('users');

    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [deletingUser, setDeletingUser] = useState<User | null>(null);
    const [deletingReport, setDeletingReport] = useState<Report | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        try {
            const decoded = jwtDecode<JwtPayload>(token);
            if (decoded.role !== 'ADMIN') {
                alert('Acesso negado. Você não tem permissão para acessar esta página.');
                navigate('/home');
                return;
            }
        } catch {
            navigate('/login');
            return;
        }

        fetchData();
    }, [navigate]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const [usersResponse, reportsResponse] = await Promise.all([
                api.get('/users'),
                api.get('/complaints')
            ]);
            setUsers(usersResponse.data);
            setReports(reportsResponse.data);
        } catch (err: any) {
            console.error('Erro ao carregar dados:', err);
            if (err.response?.status === 403) {
                alert('Acesso negado. Você não tem permissão para acessar esta página.');
                navigate('/home');
            } else {
                setError('Erro ao carregar dados. Tente novamente.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleEditUser = (user: User) => {
        setEditingUser(user);
    };

    const handleSaveUser = async (userId: string, data: Partial<User>) => {
        try {
            await api.patch(`/users/${userId}`, data);
            setUsers(users.map(u => u.id === userId ? { ...u, ...data } : u));
            setEditingUser(null);
            alert('Usuário atualizado com sucesso!');
        } catch (err: any) {
            console.error('Erro ao atualizar usuário:', err);
            alert(err.response?.data?.message || 'Erro ao atualizar usuário.');
        }
    };

    const handleDeleteUser = (userId: string) => {
        const user = users.find(u => u.id === userId);
        if (user) {
            setDeletingUser(user);
        }
    };

    const confirmDeleteUser = async () => {
        if (!deletingUser) return;

        try {
            await api.delete(`/users/${deletingUser.id}`);
            setUsers(users.filter(u => u.id !== deletingUser.id));
            setDeletingUser(null);
            alert('Usuário excluído com sucesso!');
        } catch (err: any) {
            console.error('Erro ao excluir usuário:', err);
            alert(err.response?.data?.message || 'Erro ao excluir usuário.');
        }
    };

    const handleEditReport = (reportId: string) => {
        navigate(`/edit-report/${reportId}`);
    };

    const handleResolveReport = async (reportId: string) => {
        try {
            await api.put(`/complaints/${reportId}`, { status: 'RESOLVIDO' });
            setReports(reports.map(r => 
                r.id === reportId ? { ...r, status: 'RESOLVIDO' } : r
            ));
            alert('Denúncia marcada como resolvida!');
        } catch (err: any) {
            console.error('Erro ao resolver denúncia:', err);
            alert(err.response?.data?.message || 'Erro ao resolver denúncia.');
        }
    };

    const handleDeleteReport = (reportId: string) => {
        const report = reports.find(r => r.id === reportId);
        if (report) {
            setDeletingReport(report);
        }
    };

    const confirmDeleteReport = async () => {
        if (!deletingReport) return;

        try {
            await api.delete(`/complaints/${deletingReport.id}`);
            setReports(reports.filter(r => r.id !== deletingReport.id));
            setDeletingReport(null);
            alert('Denúncia excluída com sucesso!');
        } catch (err: any) {
            console.error('Erro ao excluir denúncia:', err);
            alert(err.response?.data?.message || 'Erro ao excluir denúncia.');
        }
    };

    if (loading) {
        return (
            <>
                <AdminHeader />
                <main className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="flex flex-col items-center gap-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-(--color-primary)"></div>
                        <p className="text-gray-600">Carregando dados...</p>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <AdminHeader />
                <main className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                        <p className="text-red-500 mb-4">{error}</p>
                        <button
                            onClick={fetchData}
                            className="px-6 py-2 bg-(--color-primary) text-white rounded-lg hover:opacity-90"
                        >
                            Tentar novamente
                        </button>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <AdminHeader />
            <main className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-(--color-primary) mb-2">
                            Painel Administrativo
                        </h1>
                        <p className="text-gray-600">
                            Gerencie usuários e denúncias do sistema
                        </p>
                    </div>

                    <div className="mb-6 flex gap-2">
                        <button
                            onClick={() => setActiveTab('users')}
                            className={`px-6 py-3 font-semibold rounded-lg transition-colors ${
                                activeTab === 'users'
                                    ? 'bg-(--color-secondary) text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            Usuários ({users.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('reports')}
                            className={`px-6 py-3 font-semibold rounded-lg transition-colors ${
                                activeTab === 'reports'
                                    ? 'bg-(--color-secondary) text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            Denúncias ({reports.length})
                        </button>
                    </div>

                    {activeTab === 'users' ? (
                        <UserList 
                            users={users} 
                            onEdit={handleEditUser} 
                            onDelete={handleDeleteUser} 
                        />
                    ) : (
                        <AdminReportList 
                            reports={reports} 
                            onEdit={handleEditReport} 
                            onDelete={handleDeleteReport}
                            onResolve={handleResolveReport}
                        />
                    )}
                </div>
            </main>
            <Footer />

            <EditUserModal
                user={editingUser}
                isOpen={!!editingUser}
                onClose={() => setEditingUser(null)}
                onSave={handleSaveUser}
            />

            <DeleteConfirmModal
                isOpen={!!deletingUser}
                userName={deletingUser?.name || ''}
                onClose={() => setDeletingUser(null)}
                onConfirm={confirmDeleteUser}
            />

            <DeleteReportModal
                isOpen={!!deletingReport}
                reportTitle={deletingReport?.title || ''}
                onClose={() => setDeletingReport(null)}
                onConfirm={confirmDeleteReport}
            />
        </>
    );
}

export default Admin;
