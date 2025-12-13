import LoginHeader from '../../components/Login/LoginHeader';
import Footer from '../../components/Footer';
import LoginHero from '../../components/Login/LoginHero';
import LoginTitle from '../../components/Login/LoginTitle';
import LoginForm from '../../components/Login/LoginForm';
import LoginFormFooter from '../../components/Login/LoginFormFooter';
import pnglogin from '../../assets/pnglogin.png';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { api } from '../../services/api';
import { LoginFormData } from './Types';

function Login() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (formData: LoginFormData) => {
        setIsLoading(true);
        console.log('Login attempt:', formData);

        api.post('/login', {
            email: formData.email,
            password: formData.password,
        })
            .then((response) => {
                const { token } = response.data;
                localStorage.setItem('token', token);

                console.log("Login com sucesso:", response.data);

                alert('Login realizado com sucesso! Bem-vindo de volta.');
                navigate('/home');
            })
            .catch((error) => {
                console.error('Erro no login:', error.response?.data || error.message);
                alert('Erro ao fazer login. Verifique os dados e tente novamente.');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <>
            <LoginHeader />
            <main className="min-h-[calc(100vh-200px)] w-full flex items-center justify-center py-12 px-4 bg-gray-50">
                <div className="flex flex-row justify-between items-center max-w-7xl gap-16 w-screen">
                    <LoginHero imageSrc={pnglogin} altText="Logo" />
                    <div className="flex flex-col justify-center items-center max-w-xl">
                        <LoginTitle
                            title="Faça seu login!"
                            subtitle="Após o login, você terá acesso ao seu histórico de denúncias e poderá realizar novas denúncias."
                        />
                        <LoginForm onSubmit={handleSubmit} />
                        <LoginFormFooter />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Login;
