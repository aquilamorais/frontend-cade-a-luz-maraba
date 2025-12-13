import logo2 from '../../assets/logo2.png';
import logo from '../../assets/logo.png';
import back from '../../assets/back.png';
import { Link } from 'react-router';

function ProfileHeader() {
    return (
        <header className="sticky top-0 z-50 flex flex-row justify-between items-center px-8 py-3 bg-white border-b border-gray-200">
            <div className="flex flex-row justify-center items-center gap-4">
                <Link to="/home" className="flex flex-row items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 border-none font-bold rounded-lg text-gray-700 cursor-pointer">
                    <img src={back} alt="" className='w-5 h-5' />
                    <span className='font-bold text-sm'>Voltar</span>
                </Link>
            </div>
            <Link to="/home" className="flex flex-row justify-center items-center gap-2">
                <div className="bg-green-600 p-2 rounded-lg">
                    <img style={{ width: '40px', height: '40px' }} src={logo} alt="Logo" />
                </div>
                <img style={{ width: '110px', height: '45px' }} src={logo2} alt="Logo2" />
            </Link>
        </header>
    );
}

export default ProfileHeader;
