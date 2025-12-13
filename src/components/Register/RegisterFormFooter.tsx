import { Link } from 'react-router';

function RegisterFormFooter(){
    return (
        <div className="flex flex-row justify-center items-center gap-2.5 mt-6">
            <span className="text-white/90 font-medium">Já tem uma conta?</span>{' '}
            <Link to="/login" className="text-yellow-300 font-bold cursor-pointer">Fazer login</Link>
        </div>
    );
}

export default RegisterFormFooter;
