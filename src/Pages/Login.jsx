import LoginHeader from '../components/Login/LoginHeader';
import Footer from '../components/Footer';
import LoginHero from '../components/Login/LoginHero';
import LoginTitle from '../components/Login/LoginTitle';
import LoginForm from '../components/Login/LoginForm';
import LoginFormFooter from '../components/Login/LoginFormFooter';
import pnglogin from '../assets/pnglogin.png';
import { Link } from 'react-router';

function Login() {
    const handleSubmit = ({ email, password }) => {
        console.log('Login attempt:', { email, password });
    };

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
