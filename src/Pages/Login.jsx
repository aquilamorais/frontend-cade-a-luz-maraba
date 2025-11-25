import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginHero from '../components/LoginHero';
import LoginTitle from '../components/LoginTitle';
import LoginForm from '../components/LoginForm';
import LoginFormFooter from '../components/LoginFormFooter';
import pnglogin from '../assets/pnglogin.png';

function Login() {
    const handleSubmit = ({ email, password }) => {
        console.log('Login attempt:', { email, password });
    };

    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
                <div className="flex flex-row justify-between items-center w-full max-w-7xl gap-12">
                    <LoginHero imageSrc={pnglogin} altText="Logo" />
                    <div className="flex flex-col justify-center items-center w-full max-w-xl">
                        <LoginTitle
                            title="Faça seu login!"
                            subtitle="Após o login, você terá acesso ao seu histórico de denúncias e poder realizar novas denúncias, se necessário."
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
