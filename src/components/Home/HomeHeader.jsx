import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import user from '../../assets/nome.png';
import sair from '../../assets/sair.png';

function HomeHeader() {
    return (
        <header className="flex flex-row justify-between items-center px-8 py-2 bg-white bg-center">
            <div className="flex flex-row justify-center items-center gap-2.5">
                <img style={{ width: '50px', height: '50px' }} src={logo} alt="Logo" />
                <img style={{ width: '120px', height: '50px' }} src={logo2} alt="Logo2" />
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
                <button className="px-5 py-2.5 bg-transparent border-none font-medium rounded-md text-(--gray) cursor-pointer hover:text-(--color-secondary) transition-colors">Home</button>
                <button className="px-5 py-2.5 bg-transparent border-none font-medium rounded-md text-(--gray) cursor-pointer hover:text-(--color-secondary) transition-colors">Sobre</button>
                <button className="px-5 py-2.5 bg-transparent border-none font-medium rounded-md text-(--gray) cursor-pointer hover:text-(--color-secondary) transition-colors">Contatos</button>
                <button className="px-5 py-2.5 bg-transparent border-none font-medium rounded-md text-(--gray) cursor-pointer hover:text-(--color-secondary) transition-colors">Ajuda</button>
                <div className="flex flex-row justify-center items-center gap-4 w-26">
                    <Link to="/user" className='flex flex-col justify-center items-center py-2.5 w-1/2 border-none font-bold rounded-md bg-(--color-tertiary cursor-pointer hover:bg-(--gray-light) focus:outline-none focus:ring-2 focus:ring-(--gray-light) focus:ring-offset-2 transition-all mt-2'>
                        <img src={user} alt="" style={{ width: '60%', height: '60%' }} />
                    </Link>
                    <Link to="/login" className='flex flex-col justify-center items-center py-2.5 w-1/2 border-none font-bold rounded-md bg-(--color-tertiary cursor-pointer hover:bg-(--gray-light) focus:outline-none focus:ring-2 focus:ring-(--gray-light) focus:ring-offset-2 transition-all mt-2'>
                        <img src={sair} alt="" style={{ width: '60%', height: '60%' }} />
                    </Link>
                </div>

            </div>
        </header>
    );
}

export default HomeHeader;
