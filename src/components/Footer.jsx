import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';

function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center gap-2.5 mt-[35px]">
            <div className="flex flex-row justify-center items-center gap-5">
                <img src={instagram} alt="Instagram" className="w-[30px] h-[30px] cursor-pointer" />
                <img src={facebook} alt="Facebook" className="w-[30px] h-[30px] cursor-pointer" />
                <img src={twitter} alt="Twitter" className="w-[30px] h-[30px] cursor-pointer" />
            </div>
            <p className="text-(--color-secondary) font-bold text-[1rem]">© 2025 Cade A Luz. Todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;
