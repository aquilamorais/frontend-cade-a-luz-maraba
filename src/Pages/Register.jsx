import Header from '../components/Register/Header';
import Footer from '../components/Footer';
import RegisterTitle from '../components/Register/RegisterTitle';
import RegisterForm from '../components/Register/RegisterForm';
import RegisterFormFooter from '../components/Register/RegisterFormFooter';
import RegisterHero from '../components/Register/RegisterHero';
import map from '../assets/map.png';
import pessoa from '../assets/pessoa.png';
import { api } from '../services/api';
import { useNavigate } from 'react-router';

function Register() {
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        console.log('Register attempt:', formData);

        try {
            const userResponse = await api.post('/users', {
                nome: formData.nome,
                cpf: formData.cpf,
                telefone: formData.telefone,
                email: formData.email,
                senha: formData.senha
            });

            console.log('Registrado com sucesso:', userResponse.data);

            alert('Cadastro realizado com sucesso! Faça login para continuar.');
            navigate('/login');

        } catch (error) {
            console.error('Erro no registro:', error.response?.data || error.message);
            alert('Erro ao registrar. Verifique os dados e tente novamente.');
        }
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
