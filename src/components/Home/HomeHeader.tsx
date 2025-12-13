import { Link, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import user from '../../assets/nome.png';
import sair from '../../assets/sair.png';

interface JwtPayload {
    id: string;
    role: string;
}

function HomeHeader() {
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode<JwtPayload>(token);
                setIsAdmin(decoded.role === 'ADMIN');
            } catch {
                setIsAdmin(false);
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header className="sticky top-0 z-50 flex flex-row justify-between items-center px-8 py-3 bg-white border-b border-gray-200">
            <div className="flex flex-row justify-center items-center gap-3 cursor-pointer" onClick={() => navigate('/home')}>
                <div className="p-1 rounded-lg">
                    <img className="w-10 h-10" src={logo} alt="Logo" />
                </div>
                <img className="h-10" src={logo2} alt="Logo2" />
            </div>
            <nav className="hidden md:flex flex-row items-center gap-1">
                <button className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600 transition-transform duration-150 active:scale-95">
                    Home
                </button>
                <button className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600 transition-transform duration-150 active:scale-95">
                    Sobre
                </button>
                <button className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600 transition-transform duration-150 active:scale-95">
                    Contatos
                </button>
                <button className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600 transition-transform duration-150 active:scale-95">
                    Ajuda
                </button>
            </nav>
            <div className="flex flex-row items-center gap-3">
                {isAdmin && (
                    <Link 
                        to="/admin"
                        className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg transition-transform duration-150 active:scale-95"
                    >
                        Admin
                    </Link>
                )}
                <Link 
                    to="/user" 
                    className="p-2 rounded-lg bg-gray-100 transition-transform duration-150 active:scale-95"
                    title="Meu Perfil"
                >
                    <img src={user} alt="Perfil" className="w-5 h-5 opacity-70" />
                </Link>
                <button 
                    onClick={handleLogout}
                    className="p-2 rounded-lg bg-gray-100 transition-transform duration-150 active:scale-95"
                    title="Sair"
                >
                    <img src={sair} alt="Sair" className="w-5 h-5 opacity-70" />
                </button>
            </div>
        </header>
    );
}

export default HomeHeader;
