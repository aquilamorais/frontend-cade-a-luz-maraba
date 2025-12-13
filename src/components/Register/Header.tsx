import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';

function Header() {
    return (
        <header className="sticky top-0 z-50 flex flex-row justify-between items-center px-4 sm:px-8 py-3 bg-white border-b border-gray-200">
            <Link to="/" className="flex flex-row justify-center items-center gap-2">
                <div className="p-1 sm:p-2 rounded-lg">
                    <img className="w-8 h-8 sm:w-10 sm:h-10" src={logo} alt="Logo" />
                </div>
                <img className="h-8 sm:h-[45px] w-auto" src={logo2} alt="Logo2" />
            </Link>
            <div className="flex flex-row justify-center items-center gap-2">
                <button className="hidden md:block px-4 py-2.5 bg-transparent border-none font-semibold rounded-lg text-gray-600 cursor-pointer transition-transform duration-150 active:scale-95">Home</button>
                <button className="hidden md:block px-4 py-2.5 bg-transparent border-none font-semibold rounded-lg text-gray-600 cursor-pointer transition-transform duration-150 active:scale-95">Sobre</button>
                <button className="hidden md:block px-4 py-2.5 bg-transparent border-none font-semibold rounded-lg text-gray-600 cursor-pointer transition-transform duration-150 active:scale-95">Contatos</button>
                <button className="hidden md:block px-4 py-2.5 bg-transparent border-none font-semibold rounded-lg text-gray-600 cursor-pointer transition-transform duration-150 active:scale-95">Ajuda</button>
                <Link to="/login" className='px-4 sm:px-5 py-2 sm:py-2.5 border-none font-bold text-sm sm:text-base rounded-lg bg-green-600 text-white cursor-pointer md:ml-2 transition-transform duration-150 active:scale-95'>
                    Faça seu login
                </Link>
            </div>
        </header>
    );
}

export default Header;
