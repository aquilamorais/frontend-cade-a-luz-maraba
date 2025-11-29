import LoginHeader from '../components/Login/LoginHeader';
import Footer from '../components/Footer';
import LoginHero from '../components/Login/LoginHero';
import LoginTitle from '../components/Login/LoginTitle';
import LoginForm from '../components/Login/LoginForm';
import LoginFormFooter from '../components/Login/LoginFormFooter';
import pnglogin from '../assets/pnglogin.png';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { api } from '../services/api';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        console.log('Login attempt:', formData);

        try {
            const userResponse = await api.post('/login', {
                email: formData.email,
                password: formData.senha,
            });

            const { token } = userResponse.data;
            localStorage.setItem('token', token);

            console.log("Login com sucesso:", userResponse.data);

            alert('Login realizado com sucesso! Bem-vindo de volta.');
            navigate('/home');
        } catch (error) {
            console.error('Erro no login:', error.response?.data || error.message);
            alert('Erro ao fazer login. Verifique os dados e tente novamente.');
        }
    }

    return (
        <>
            <LoginHeader />
            <main className="min-h-[calc(100vh-200px)] w-full flex items-center justify-center py-12 px-4">
                <div className="flex flex-row justify-between items-center max-w-7xl gap-12 w-screen">
                    <LoginHero imageSrc={pnglogin} altText="Logo" />
                    <div className="flex flex-col justify-center items-center max-w-xl">
                        <LoginTitle
                            title="Faça seu login!"
                            subtitle="Após o login, você terá acesso ao seu histórico de denúncias e poder realizar novas denúncias, se necessário."
                        />
                        <LoginForm onSubmit={handleSubmit} />
                        <LoginFormFooter />
                    </div>
                </div>
            </main>
            <Link to="/user">Usuário exemplo</Link>
            <Footer />
        </>
    );
}

export default Login;
