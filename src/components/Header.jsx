import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';

function Header() {
    return (
        <header className="flex flex-row justify-between items-center bg-[#eaecec] p-2.5 pr-[60px]">
            <div className="flex flex-row justify-center items-center gap-2.5">
                <img style={{ width: '80px', height: '80px' }} src={logo} alt="Logo" />
                <img style={{ width: '200px', height: '90px' }} src={logo2} alt="Logo2" />
            </div>
            <div>
                <button className="px-5 py-2.5 bg-transparent border-none rounded-md text-[#3d3d3d] cursor-pointer hover:text-[#02644f]">Home</button>
                <button className="px-5 py-2.5 bg-transparent border-none rounded-md text-[#3d3d3d] cursor-pointer hover:text-[#02644f]">Sobre</button>
                <button className="px-5 py-2.5 bg-transparent border-none rounded-md text-[#3d3d3d] cursor-pointer hover:text-[#02644f]">Contatos</button>
                <button className="px-5 py-2.5 bg-transparent border-none rounded-md text-[#3d3d3d] cursor-pointer hover:text-[#02644f]">Ajuda</button>
                <button className="px-5 py-2.5 border-none rounded-md bg-[#02644f] text-white font-bold cursor-pointer">Faça seu login</button>
            </div>
        </header>
    );
}

export default Header;
