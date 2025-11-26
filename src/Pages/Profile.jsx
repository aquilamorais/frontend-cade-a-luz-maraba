import Footer from '../components/Footer';
import ProfileTitle from '../components/ProfileTitle';
import ProfileForm from '../components/ProfileForm';
import ProfileHeader from '../components/ProfileHeader';
import pessoa from '../assets/pessoa.png';

function Profile() {
    // teste
    const userData = {
        nome: 'João Silva',
        cpf: '123.456.789-00',
        email: 'joao.silva@email.com',
        role: 'MEMBER'
    };

    const handleSubmit = (formData) => {
        console.log('Profile update:', formData);
        // teste
    };

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
                        <ProfileForm onSubmit={handleSubmit} initialData={userData} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Profile;
