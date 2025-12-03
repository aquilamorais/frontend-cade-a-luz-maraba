import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../components/Footer';
import ProfileTitle from '../components/Profile/ProfileTitle';
import ProfileForm from '../components/Profile/ProfileForm';
import ProfileHeader from '../components/Profile/ProfileHeader';
import pessoa from '../assets/pessoa.png';
import { api } from '../services/api';
import { getLoggedUser, isAuthenticated } from '../utils/auth';

function Profile() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Verifica se está autenticado
        if (!isAuthenticated()) {
            alert('Você precisa fazer login para acessar esta página.');
            navigate('/login');
            return;
        }

        // Pega os dados básicos do token
        const loggedUser = getLoggedUser();

        if (loggedUser) {
            // Se o CPF estiver no token, busca dados completos pela API
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
                        // Se falhar, usa os dados do token
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
                // Usa os dados do token diretamente
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

    const handleSubmit = (formData) => {
        console.log('Profile update:', formData);

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

    if (loading) {
        return (
            <>
                <ProfileHeader />
                <main className="h-screen flex items-center justify-center">
                    <p>Carregando...</p>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <ProfileHeader />
            <main className="h-screen flex flex-col">
                <div className="flex flex-col gap-4 bg-(--color-secondary) py-8 px-4">
                    <div className="flex flex-col items-center w-full gap-4">
                        <ProfileTitle
                            title="Gerencie seu perfil"
                            subtitle="Mantenha seus dados atualizados para receber notificações e acompanhar suas denúncias."
                        />
                        {userData && <ProfileForm onSubmit={handleSubmit} initialData={userData} />}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Profile;
