import { useNavigate } from 'react-router';

function AdminHeader() {
    const navigate = useNavigate();

    return (
        <header className="flex justify-between items-center p-4 px-8 bg-(--color-primary)">
            <h1 
                className="text-2xl text-white font-bold cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => navigate('/home')}
            >
                Cadê a Luz?
            </h1>
            <div className="flex items-center gap-4">
                <span className="text-white/80 text-sm">Painel Administrativo</span>
                <button 
                    className="text-white font-semibold hover:opacity-80 transition-opacity"
                    onClick={() => navigate('/home')}
                >
                    Voltar
                </button>
            </div>
        </header>
    );
}

export default AdminHeader;
