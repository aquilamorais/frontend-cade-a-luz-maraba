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
            <main>
                <div className="flex flex-row justify-between items-center">
                    <LoginHero imageSrc={pnglogin} altText="Logo" />
                    <div className="flex flex-col justify-center items-center w-full h-[90%]">
                        <div className="flex flex-col justify-center items-center gap-10 w-1/2 h-1/2 rounded-[10px]">
                            <LoginTitle
                                title="Faça seu login!"
                                subtitle="Após o login, você terá acesso ao seu histórico de denúncias e poder realizar novas denúncias, se necessário."
                            />
                            <LoginForm onSubmit={handleSubmit} />
                            <LoginFormFooter />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Login;
