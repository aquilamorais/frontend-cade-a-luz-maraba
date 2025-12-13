import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';

function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-green-700 mb-2">Cadê a Luz?</h3>
                        <p className="text-gray-500 text-sm max-w-xs">
                            Plataforma de denúncias de problemas elétricos em Marabá-PA
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-sm text-gray-500 font-medium">Siga-nos</p>
                        <div className="flex flex-row items-center gap-4">
                            <a href="#" className="p-3 bg-white rounded-lg border border-gray-200 transition-transform duration-150 active:scale-95">
                                <img src={instagram} alt="Instagram" className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-white rounded-lg border border-gray-200 transition-transform duration-150 active:scale-95">
                                <img src={facebook} alt="Facebook" className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-white rounded-lg border border-gray-200 transition-transform duration-150 active:scale-95">
                                <img src={twitter} alt="Twitter" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center md:items-end gap-2">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-sm text-gray-500">Sistema Online</span>
                        </div>
                        <p className="text-green-600 font-semibold text-sm">
                            © 2025 Cade A Luz
                        </p>
                        <p className="text-xs text-gray-400">Todos os direitos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
