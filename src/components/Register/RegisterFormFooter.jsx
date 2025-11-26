import { Link } from 'react-router';

function RegisterFormFooter() {
    return (
        <div className="flex flex-row justify-center items-center gap-2.5 mt-6">
            <span className="text-white">Já tem uma conta?</span>{' '}
            <Link to="/login" className="text-(--color-tertiary) font-bold cursor-pointer hover:underline hover:underline-offset-2 transition-colors">Fazer login</Link>
        </div>
    );
}

export default RegisterFormFooter;
