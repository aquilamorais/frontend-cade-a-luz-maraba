import { Link } from 'react-router';

function LoginFormFooter() {
    return (
        <div className="flex flex-row justify-center items-center gap-2 mt-6">
            <span className="text-gray-500">Ainda não tem uma conta?</span>
            <Link 
                to="/register" 
                className="text-green-600 font-bold"
            >
                Criar conta
            </Link>
        </div>
    );
}

export default LoginFormFooter;
