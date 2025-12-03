import nomeIcon from '../../assets/nome.png';
import cpfIcon from '../../assets/cpf.png';
import telefoneIcon from '../../assets/telefone.png';
import smsIcon from '../../assets/sms.png';
import cadeadoIcon from '../../assets/cadeado.png';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const registerSchema = z.object({
    nome: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
    cpf: z.string().length(11, "O CPF deve ter 12 caracteres"),
    email: z.email("E-mail inválido"),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmarSenha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
}).refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"]
});

function RegisterForm({ onSubmit }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const handleSubmitForm = (data) => {
        console.log(data);
        onSubmit(data);
    };

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div alt="Register Form" className="flex flex-col justify-center items-center gap-8 w-full max-w-md bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-3xl font-bold text-(--color-secondary)">Criar conta</h2>

                <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome" className="text-sm font-semibold text-gray-700">
                            Nome completo
                        </label>
                        <div className="relative">
                            <img
                                src={nomeIcon}
                                alt=""
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50"
                            />
                            <input
                                id="nome"
                                type="text"
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:border-(--color-secondary) focus:outline-none transition-colors"
                                placeholder="Seu nome completo"
                                {...register("nome")}
                            />
                        </div>
                        {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="cpf" className="text-sm font-semibold text-gray-700">
                            CPF
                        </label>
                        <div className="relative">
                            <img
                                src={cpfIcon}
                                alt=""
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50"
                            />
                            <input
                                id="cpf"
                                type="text"
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:border-(--color-secondary) focus:outline-none transition-colors"
                                placeholder="000.000.000-00"
                                {...register("cpf")}
                            />
                        </div>
                        {errors.cpf && <p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>}
                    </div>

                    {/*<div className="flex flex-col gap-2">
                        <label htmlFor="telefone" className="text-sm font-semibold text-gray-700">
                            Telefone
                        </label>
                        <div className="relative">
                            <img
                                src={telefoneIcon}
                                alt=""
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50"
                            />
                            <input
                                id="telefone"
                                type="tel"
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:border-(--color-secondary) focus:outline-none transition-colors"
                                placeholder="(00) 00000-0000"
                                {...register("telefone")}
                            />
                        </div>
                        {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone.message}</p>}
                    </div>*/}

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                            E-mail
                        </label>
                        <div className="relative">
                            <img
                                src={smsIcon}
                                alt=""
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50"
                            />
                            <input
                                id="email"
                                type="email"
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:border-(--color-secondary) focus:outline-none transition-colors"
                                placeholder="seu@email.com"
                                {...register("email")}
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="senha" className="text-sm font-semibold text-gray-700">
                            Senha
                        </label>
                        <div className="relative">
                            <img
                                src={cadeadoIcon}
                                alt=""
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50"
                            />
                            <input
                                id="senha"
                                type="password"
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:border-(--color-secondary) focus:outline-none transition-colors"
                                placeholder="••••••••"
                                {...register("senha")}
                            />
                        </div>
                        {errors.senha && <p className="text-red-500 text-xs mt-1">{errors.senha.message}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="confirmarSenha" className="text-sm font-semibold text-gray-700">
                            Confirmar senha
                        </label>
                        <div className="relative">
                            <img
                                src={cadeadoIcon}
                                alt=""
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50"
                            />
                            <input
                                id="confirmarSenha"
                                type="password"
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:border-(--color-secondary) focus:outline-none transition-colors"
                                placeholder="••••••••"
                                {...register("confirmarSenha")}
                            />
                        </div>
                        {errors.confirmarSenha && <p className="text-red-500 text-xs mt-1">{errors.confirmarSenha.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-(--color-tertiary) text-white font-bold rounded-lg hover:bg-(--color-secondary) focus:outline-none focus:ring-2 focus:ring-(--color-secondary) focus:ring-offset-2 transition-all mt-2"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
