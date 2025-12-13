import { useNavigate } from 'react-router';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';

function EditReportHeader() {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-50 flex justify-between items-center p-4 px-8 bg-green-700">
            <div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate('/home')}
            >
                <div className="bg-white/20 p-2 rounded-lg">
                    <img src={logo} alt="Logo" className="h-8" />
                </div>
                <img src={logo2} alt="Logo2" className="h-10" />
            </div>
            <button 
                className="px-5 py-2.5 bg-white/20 text-white font-bold rounded-lg transition-transform duration-150 active:scale-95"
                onClick={() => navigate('/home')}
            >
                Voltar
            </button>
        </header>
    );
}

export default EditReportHeader;
