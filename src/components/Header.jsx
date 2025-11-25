import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';

function Header() {
    return (
        <header className="flex flex-row justify-between items-center px-8 py-2 bg-white bg-center">
            <div className="flex flex-row justify-center items-center gap-2.5">
                <img style={{ width: '50px', height: '50px' }} src={logo} alt="Logo" />
                <img style={{ width: '120px', height: '50px' }} src={logo2} alt="Logo2" />
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
                <button className="px-5 py-2.5 bg-transparent border-none font-medium rounded-md text-gray-700 cursor-pointer hover:text-(--color-secondary) transition-colors">Home</button>
                <button className="px-5 py-2.5 bg-transparent border-none font-medium rounded-md text-gray-700 cursor-pointer hover:text-(--color-secondary) transition-colors">Sobre</button>
                <button className="px-5 py-2.5 bg-transparent border-none font-medium rounded-md text-gray-700 cursor-pointer hover:text-(--color-secondary) transition-colors">Contatos</button>
                <button className="px-5 py-2.5 bg-transparent border-none font-medium rounded-md text-gray-700 cursor-pointer hover:text-(--color-secondary) transition-colors">Ajuda</button>
                <button className="px-5 py-2.5 border-none font-bold rounded-md bg-(--color-secondary) text-white cursor-pointer hover:bg-(--color-primary) transition-colors">Faça seu login</button>
            </div>
        </header>
    );
}

export default Header;
