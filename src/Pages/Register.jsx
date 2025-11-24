import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterTitle from '../components/RegisterTitle';
import RegisterForm from '../components/RegisterForm';
import RegisterFormFooter from '../components/RegisterFormFooter';
import RegisterHero from '../components/RegisterHero';
import pessoa from '../assets/pessoa.png';
import map from '../assets/map.png';

function Register() {
    const handleSubmit = (formData) => {
        console.log('Register attempt:', formData);
    };

    return (
        <>
            <Header />
            <main className="px-8 py-10">
                <div className="flex flex-row justify-between items-start gap-10">
                    <div className="flex flex-col justify-center items-center w-1/2 gap-8">
                        <RegisterTitle
                            title="Faltou energia?Denuncie agora e ajude a resolver mais rápido!"
                            subtitle="Contribua para uma cidade mais segura e iluminada. Registre aqui a falta de energia."
                        />
                        <RegisterForm onSubmit={handleSubmit} />
                        <RegisterFormFooter />
                        <img src={pessoa} alt="Pessoa" className="w-full max-w-[300px]" />
                    </div>
                    <div className="flex flex-col justify-center items-center w-1/2">
                        <RegisterHero imageSrc={map} altText="Mapa" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Register;
