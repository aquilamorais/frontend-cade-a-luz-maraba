import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import back from '../../assets/back.png';

function CreateReportHeader() {
    return (
        <header className="flex flex-row justify-between items-center px-6 py-4 bg-white shadow-sm">
            <div className="flex items-center gap-3">
                <Link to="/home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <img src={back} alt="Voltar" className="w-6 h-6" />
                    <span className="text-sm font-semibold text-(--color-secondary)">Voltar</span>
                </Link>
            </div>

            <Link to="/home" className="flex flex-row absolute left-1/2 transform gap-1 -translate-x-1/2">
                <img src={logo} alt="Logo Cadê a Luz" className="h-12" />
                <img src={logo2} alt="" className="h-12" />
            </Link>

            <div className="w-20"></div>
        </header>
    );
}

export default CreateReportHeader;
