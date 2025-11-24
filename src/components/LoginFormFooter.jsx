import { Link } from 'react-router';

function LoginFormFooter() {
    return (
        <div className="flex flex-row justify-center items-center gap-2.5 mb-[30px]">
            <span>Ainda não tem uma conta?</span>{' '}
            <Link to="/register">Fazer registro</Link>
        </div>
    );
}

export default LoginFormFooter;
