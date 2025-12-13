import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';

function Header() {
    return (
        <header className="sticky top-0 z-50 flex flex-row justify-between items-center px-8 py-3 bg-white border-b border-gray-200">
            <Link to="/" className="flex flex-row justify-center items-center gap-2">
                <div className="bg-green-600 p-2 rounded-lg">
                    <img style={{ width: '40px', height: '40px' }} src={logo} alt="Logo" />
                </div>
                <img style={{ width: '110px', height: '45px' }} src={logo2} alt="Logo2" />
            </Link>
            <div className="flex flex-row justify-center items-center gap-2">
                <button className="px-4 py-2.5 bg-transparent border-none font-semibold rounded-lg text-gray-600 cursor-pointer transition-transform duration-150 active:scale-95">Home</button>
                <button className="px-4 py-2.5 bg-transparent border-none font-semibold rounded-lg text-gray-600 cursor-pointer transition-transform duration-150 active:scale-95">Sobre</button>
                <button className="px-4 py-2.5 bg-transparent border-none font-semibold rounded-lg text-gray-600 cursor-pointer transition-transform duration-150 active:scale-95">Contatos</button>
                <button className="px-4 py-2.5 bg-transparent border-none font-semibold rounded-lg text-gray-600 cursor-pointer transition-transform duration-150 active:scale-95">Ajuda</button>
                <Link to="/login" className='px-5 py-2.5 border-none font-bold rounded-lg bg-green-600 text-white cursor-pointer ml-2 transition-transform duration-150 active:scale-95'>
                    Faça seu login
                </Link>
            </div>
        </header>
    );
}

export default Header;
