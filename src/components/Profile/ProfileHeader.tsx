import logo2 from '../../assets/logo2.png';
import logo from '../../assets/logo.png';
import back from '../../assets/back.png';
import { Link } from 'react-router';

function ProfileHeader() {
    return (
        <header className="flex flex-row justify-between items-center px-8 py-2 bg-white bg-center">
            <div className="flex flex-row justify-center items-center gap-4">
                <Link to="/home" className="flex flex-row items-center justify-center gap-2 py-2.5 bg-transparent border-none font-medium rounded-xl text-black cursor-pointer hover:text-(--color-secondary) transition-colors focus:bg-gray-300">
                    <img src={back} alt="" className='w-[15%] h-[15%]' />
                    <span className='font-medium text-xl'>Voltar</span>
                </Link>
            </div>
            <div className="flex flex-row justify-center items-center gap-2.5">
                <img style={{ width: '50px', height: '50px' }} src={logo} alt="Logo" />
                <img style={{ width: '120px', height: '50px' }} src={logo2} alt="Logo2" />
            </div>
        </header>
    );
}

export default ProfileHeader;
