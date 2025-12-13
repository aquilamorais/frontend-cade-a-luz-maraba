import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../../components/Footer';
import ProfileTitle from '../../components/Profile/ProfileTitle';
import ProfileForm from '../../components/Profile/ProfileForm';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import { api } from '../../services/api';
import { getLoggedUser, isAuthenticated } from '../../utils/auth';
import { UserData, ProfileFormData, LoggedUser } from './Types';

function Profile() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [isModalClosing, setIsModalClosing] = useState<boolean>(false);

    const closeModal = () => {
        setIsModalClosing(true);
        setTimeout(() => {
            setShowDeleteModal(false);
            setIsModalClosing(false);
        }, 200);
    };

    useEffect(() => {
        if (!isAuthenticated()) {
            alert('Você precisa fazer login para acessar esta página.');
            navigate('/login');
            return;
        }

        const loggedUser = getLoggedUser() as LoggedUser | null;

        if (loggedUser) {
            if (loggedUser.cpf) {
                api.get(`/users/${loggedUser.cpf}`)
                    .then((response) => {
                        console.log('Dados do usuário:', response.data);
                        setUserData({
                            id: response.data.id,
                            nome: response.data.name,
                            cpf: response.data.cpf,
                            email: response.data.email,
                            role: response.data.role
                        });
                    })
                    .catch((error) => {
                        console.error('Erro ao obter dados do usuário:', error.response?.data || error.message);
                        setUserData({
                            id: loggedUser.id,
                            nome: loggedUser.name,
                            email: loggedUser.email,
                            cpf: loggedUser.cpf || '',
                            role: loggedUser.role
                        });
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            } else {
                setUserData({
                    id: loggedUser.id,
                    nome: loggedUser.name,
                    email: loggedUser.email,
                    cpf: '',
                    role: loggedUser.role
                });
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }, [navigate]);

    const handleSubmit = (formData: ProfileFormData) => {
        console.log('Profile update:', formData);

        if (!userData) return;

        api.patch(`/users/${userData.id}`, {
            name: formData.nome,
            email: formData.email,
        })
            .then((response) => {
                console.log('Perfil atualizado:', response.data);
                alert('Perfil atualizado com sucesso!');
            })
            .catch((error) => {
                console.error('Erro ao atualizar perfil:', error.response?.data || error.message);
                alert('Erro ao atualizar perfil.');
            });
    };

    const handleDelete = () => {
        if (!userData) {
            alert('Não foi possível identificar o usuário.');
            return;
        }
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (!userData) return;

        api.delete(`/users/${userData.id}`)
            .then(() => {
                alert('Conta excluída com sucesso!');
                localStorage.removeItem('token');
                navigate('/login');
            })
            .catch((error) => {
                console.error('Erro ao excluir conta:', error.response?.data || error.message);
                alert('Erro ao excluir conta. Tente novamente.');
            })
            .finally(() => {
                setShowDeleteModal(false);
            });
    };

    if (loading) {
        return (
            <>
                <ProfileHeader />
                <main className="h-screen flex items-center justify-center bg-green-700">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-white font-bold">Carregando...</p>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <ProfileHeader />
            <main className="min-h-screen flex flex-col">
                <div className="flex flex-col gap-4 bg-green-700 py-10 px-4">
                    <div className="flex flex-col items-center w-full gap-6">
                        <ProfileTitle
                            title="Gerencie seu perfil"
                            subtitle="Mantenha seus dados atualizados para receber notificações e acompanhar suas denúncias."
                        />
                        {userData && <ProfileForm onSubmit={handleSubmit} onDelete={handleDelete} initialData={userData} />}
                    </div>
                </div>
            </main>
            <Footer />

            {showDeleteModal && (
                <div 
                    className={`fixed inset-0 bg-black/60 flex items-center justify-center z-50 ${isModalClosing ? 'opacity-0' : 'opacity-100'}`}
                    onClick={closeModal}
                >
                    <div 
                        className={`bg-white rounded-lg p-8 w-full max-w-md mx-4 shadow-lg ${isModalClosing ? 'opacity-0' : 'opacity-100'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-20 h-20 bg-red-100 rounded-lg flex items-center justify-center">
                                <span className="text-red-500 text-2xl font-bold">!</span>
                            </div>
                            <h3 className="text-2xl font-extrabold text-gray-800">Excluir conta</h3>
                            <p className="text-gray-600">
                                Tem certeza que deseja excluir sua conta? Esta ação é <span className="font-bold text-red-600">irreversível</span> e todos os seus dados serão perdidos permanentemente.
                            </p>
                            <div className="flex gap-4 w-full mt-4">
                                <button
                                    onClick={closeModal}
                                    className="flex-1 py-3.5 px-4 bg-gray-100 text-gray-700 font-bold rounded-lg"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={confirmDelete}
                                    className="flex-1 py-3.5 px-4 bg-red-500 text-white font-bold rounded-lg"
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Profile;
