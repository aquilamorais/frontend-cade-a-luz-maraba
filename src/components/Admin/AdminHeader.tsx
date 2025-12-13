import { useNavigate } from 'react-router';
import logo from '../../assets/logo.png';
import logo2branco from '../../assets/logo2branco.png';

function AdminHeader() {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-3 bg-green-700">
            <div 
                className="flex flex-row items-center gap-3 cursor-pointer" 
                onClick={() => navigate('/home')}
            >
                <div className="p-1.5 rounded-lg bg-white/20">
                    <img className="w-9 h-9" src={logo} alt="Logo" />
                </div>
                <img className="h-9" src={logo2branco} alt="Logo2" />
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-white text-sm font-medium">Painel Administrativo</span>
                </div>
                <button 
                    className="px-4 py-2 bg-white/20 text-white font-medium rounded-lg flex items-center gap-2"
                    onClick={() => navigate('/home')}
                >
                    Voltar
                </button>
            </div>
        </header>
    );
}

export default AdminHeader;
