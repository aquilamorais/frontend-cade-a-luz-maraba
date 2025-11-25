import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterTitle from '../components/RegisterTitle';
import RegisterForm from '../components/RegisterForm';
import RegisterFormFooter from '../components/RegisterFormFooter';
import RegisterHero from '../components/RegisterHero';
import map from '../assets/map.png';
import pessoa from '../assets/pessoa.png';

function Register() {
    const handleSubmit = (formData) => {
        console.log('Register attempt:', formData);
    };

    return (
        <>
            <Header />
            <main className="min-h-screen min-w-screen flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full w-full bg-(--color-primary) relative overflow-hidden h-screen">
                    <div className="flex flex-col justify-center items-center h-full px-4 py-8 lg:py-0 z-10">
                        <RegisterForm onSubmit={handleSubmit} />
                        <RegisterFormFooter />
                    </div>
                    <div className="hidden lg:block relative py-8">
                        <RegisterTitle
                            title="Faltou energia? Denuncie agora e ajude a resolver mais rápido!"
                            subtitle="Contribua para uma cidade mais segura e iluminada. Registre aqui a falta de energia."
                        />
                    </div>

                    <img
                        src={pessoa}
                        alt="Pessoa"
                        className="hidden lg:block absolute bottom-0 right-0 h-[80%] max-h-[600px] w-auto object-contain object-bottom pointer-events-none xl:h-[85%] xl:max-h-[700px] 2xl:h-[90%] 2xl:max-h-[800px]"
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Register;
