import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import back from '../../assets/back.png';

function CreateReportHeader() {
    return (
        <header className="sticky top-0 z-50 flex flex-row justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
            <div className="flex items-center gap-3">
                <Link to="/home" className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg transition-transform duration-150 active:scale-95">
                    <img src={back} alt="Voltar" className="w-5 h-5" />
                    <span className="text-sm font-bold text-gray-700">Voltar</span>
                </Link>
            </div>

            <Link to="/home" className="flex flex-row absolute left-1/2 transform gap-1 -translate-x-1/2">
                <div className="p-2 rounded-lg">
                    <img src={logo} alt="Logo Cadê a Luz" className="h-10" />
                </div>
                <img src={logo2} alt="" className="h-14" />
            </Link>

            <div className="w-28"></div>
        </header>
    );
}

export default CreateReportHeader;
