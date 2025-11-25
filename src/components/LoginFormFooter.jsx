import { Link } from 'react-router';

function LoginFormFooter() {
    return (
        <div className="flex flex-row justify-center items-center gap-2.5 mt-6">
            <span className="text-gray-600">Ainda não tem uma conta?</span>{' '}
            <Link to="/register" className="text-[var(--color-secondary)] font-bold cursor-pointer hover:text-[var(--color-primary)] hover:underline hover:underline-offset-2 transition-colors">Fazer registro</Link>
        </div>
    );
}

export default LoginFormFooter;
