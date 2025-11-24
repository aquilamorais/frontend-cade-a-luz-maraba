import { Link } from 'react-router';

function RegisterFormFooter() {
    return (
        <div className="flex flex-row justify-center items-center gap-2.5 mb-[30px]">
            <span>Já tem uma conta?</span>{' '}
            <Link to="/login" className="text-[--color-secondary] font-bold cursor-pointer hover:text-[--color-primary] hover:underline hover:underline-offset-2">Fazer login</Link>
        </div>
    );
}

export default RegisterFormFooter;
