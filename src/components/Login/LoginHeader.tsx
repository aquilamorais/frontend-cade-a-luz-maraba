import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';

function LoginHeader() {
    const token = localStorage.getItem('token');

    return (
        <header className="sticky top-0 z-50 flex flex-row justify-between items-center px-8 py-3 bg-white border-b border-gray-200">
            <Link to="/" className="flex flex-row items-center gap-3">
                <div className="p-1 rounded-lg bg-green-600">
                    <img className="w-10 h-10" src={logo} alt="Logo" />
                </div>
                <img className="h-10" src={logo2} alt="Logo2" />
            </Link>
            <nav className="flex flex-row items-center gap-2">
                {token && (
                    <Link 
                        to="/home" 
                        className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600"
                    >
                        Home
                    </Link>
                )}
                <button className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600">
                    Sobre
                </button>
                <button className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600">
                    Contatos
                </button>
                <button className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600">
                    Ajuda
                </button>
                <Link 
                    to="/register" 
                    className="ml-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-lg"
                >
                    Registrar-se
                </Link>
            </nav>
        </header>
    );
}

export default LoginHeader;
