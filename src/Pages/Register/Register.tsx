import Header from '../../components/Register/Header';
import Footer from '../../components/Footer';
import RegisterForm from '../../components/Register/RegisterForm';
import RegisterFormFooter from '../../components/Register/RegisterFormFooter';
import RegisterTitle from '../../components/Register/RegisterTitle';
import pessoa from '../../assets/images/pessoa.png';
import { api } from '../../services/api';
import { useNavigate } from 'react-router';
import { AxiosError } from "axios";
import { useState } from 'react';
import { RegisterFormData } from './Types';

function Register() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (formData: RegisterFormData): Promise<void> => {
        setIsLoading(true);

        const cpfLimpo = formData.cpf.replace(/\D/g, '');

        console.log('Register attempt:', {
            name: formData.nome,
            cpf: cpfLimpo,
            email: formData.email,
            password: formData.senha,
        });

        api.post('/users', {
            name: formData.nome,
            cpf: cpfLimpo,
            email: formData.email,
            password: formData.senha,
        })
            .then((response) => {
                console.log("Registro com sucesso:", response.data);
                alert('Registro realizado com sucesso! Agora você pode fazer login.');
                navigate('/login');
            })
            .catch((error) => {
                if (error instanceof AxiosError) return alert(error.response?.data.message);
                console.error('Erro no registro:', error.response?.data || error.message);
                alert('Erro ao fazer registro. Verifique os dados e tente novamente.');
            })
            .finally(() => {
                setIsLoading(false);
            });
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
