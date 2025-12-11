import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';

function Footer(): JSX.Element {
    return (
        <footer className="flex flex-col justify-center items-center gap-4 py-8 mt-12 border-t border-gray-200">
            <div className="flex flex-row justify-center items-center gap-5">
                <img src={instagram} alt="Instagram" className="w-[30px] h-[30px] cursor-pointer hover:opacity-70 transition-opacity" />
                <img src={facebook} alt="Facebook" className="w-[30px] h-[30px] cursor-pointer hover:opacity-70 transition-opacity" />
                <img src={twitter} alt="Twitter" className="w-[30px] h-[30px] cursor-pointer hover:opacity-70 transition-opacity" />
            </div>
            <p className="text-(--color-secondary) font-semibold text-sm">© 2025 Cade A Luz. Todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;
