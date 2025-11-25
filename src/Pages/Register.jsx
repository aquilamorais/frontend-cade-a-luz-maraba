import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterTitle from '../components/RegisterTitle';
import RegisterForm from '../components/RegisterForm';
import RegisterFormFooter from '../components/RegisterFormFooter';
import RegisterHero from '../components/RegisterHero';
import map from '../assets/map.png';

function Register() {
    const handleSubmit = (formData) => {
        console.log('Register attempt:', formData);
    };

    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
                <div className="flex flex-row justify-between items-center w-full max-w-7xl gap-12">
                    <div className="flex flex-col justify-center items-center w-full max-w-xl">
                        <RegisterTitle
                            title="Faltou energia? Denuncie agora e ajude a resolver mais rápido!"
                            subtitle="Contribua para uma cidade mais segura e iluminada. Registre aqui a falta de energia."
                        />
                        <RegisterForm onSubmit={handleSubmit} />
                        <RegisterFormFooter />
                    </div>
                    <div className="flex flex-col justify-center items-center w-full max-w-xl">
                        <RegisterHero imageSrc={map} altText="Mapa" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Register;
