import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileTitle from '../components/ProfileTitle';
import ProfileForm from '../components/ProfileForm';
import pessoa from '../assets/pessoa.png';

function Profile() {
    // Dados mockados do usuário - em produção viriam de uma API/contexto
    const userData = {
        nome: 'João Silva',
        cpf: '123.456.789-00',
        email: 'joao.silva@email.com',
        role: 'MEMBER'
    };

    const handleSubmit = (formData) => {
        console.log('Profile update:', formData);
        // Aqui seria feita a chamada à API para atualizar os dados
    };

    return (
        <>
            <Header />
            <main className="h-screen flex flex-col">
                <div className="flex flex-col gap-4 bg-(--color-primary) py-8 px-4">
                    <div className="flex flex-col items-center w-full gap-4">
                        <ProfileTitle
                            title="Gerencie seu perfil"
                            subtitle="Mantenha seus dados atualizados para receber notificações e acompanhar suas denúncias."
                        />
                        <ProfileForm onSubmit={handleSubmit} initialData={userData} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Profile;
