import nomeIcon from '../../assets/nome.png';
import cpfIcon from '../../assets/cpf.png';
import smsIcon from '../../assets/sms.png';
import cadeadoIcon from '../../assets/cadeado.png';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { RegisterFormProps, RegisterFormData } from './Types';

const registerSchema = z.object({
    nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    cpf: z.string().min(11, "O CPF deve ter 11 dígitos").max(14, "CPF inválido"),
    email: z.email("E-mail inválido"),
    senha: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
    confirmarSenha: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
}).refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"]
});

function RegisterForm({ onSubmit }: RegisterFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const handleSubmitForm = (data: RegisterFormData): void => {
        console.log(data);
        onSubmit(data);
    };

    return (
        <div className="flex flex-col justify-center items-center w-full px-2 sm:px-0">
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-8 w-full max-w-sm sm:max-w-md bg-white p-5 sm:p-8 rounded-lg shadow border border-gray-200">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg sm:text-xl font-bold">U</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-green-700">
                        Criar conta
                    </h2>
                </div>

                <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col gap-4 sm:gap-5 w-full">
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label htmlFor="nome" className="text-sm font-bold text-gray-700">
                            Nome completo
                        </label>
                        <div className="relative">
                            <img
                                src={nomeIcon}
                                alt=""
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 opacity-50"
                            />
                            <input
                                id="nome"
                                type="text"
                                className="w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg bg-white focus:border-green-500 focus:outline-none"
                                placeholder="Seu nome completo"
                                {...register("nome")}
                            />
                        </div>
                        {errors.nome && <p className="text-red-500 text-xs mt-1 font-medium">{errors.nome.message}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label htmlFor="cpf" className="text-sm font-bold text-gray-700">
                            CPF
                        </label>
                        <div className="relative">
                            <img
                                src={cpfIcon}
                                alt=""
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 opacity-50"
                            />
                            <input
                                id="cpf"
                                type="text"
                                maxLength={11}
                                className="w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg bg-white focus:border-green-500 focus:outline-none"
                                placeholder="000.000.000-00"
                                {...register("cpf")}
                            />
                        </div>
                        {errors.cpf && <p className="text-red-500 text-xs mt-1 font-medium">{errors.cpf.message}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label htmlFor="email" className="text-sm font-bold text-gray-700">
                            E-mail
                        </label>
                        <div className="relative">
                            <img
                                src={smsIcon}
                                alt=""
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 opacity-50"
                            />
                            <input
                                id="email"
                                type="email"
                                className="w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg bg-white focus:border-green-500 focus:outline-none"
                                placeholder="seu@email.com"
                                {...register("email")}
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label htmlFor="senha" className="text-sm font-bold text-gray-700">
                            Senha
                        </label>
                        <div className="relative">
                            <img
                                src={cadeadoIcon}
                                alt=""
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 opacity-50"
                            />
                            <input
                                id="senha"
                                type="password"
                                className="w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg bg-white focus:border-green-500 focus:outline-none"
                                placeholder="••••••••"
                                {...register("senha")}
                            />
                        </div>
                        {errors.senha && <p className="text-red-500 text-xs mt-1 font-medium">{errors.senha.message}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label htmlFor="confirmarSenha" className="text-sm font-bold text-gray-700">
                            Confirmar senha
                        </label>
                        <div className="relative">
                            <img
                                src={cadeadoIcon}
                                alt=""
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 opacity-50"
                            />
                            <input
                                id="confirmarSenha"
                                type="password"
                                className="w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg bg-white focus:border-green-500 focus:outline-none"
                                placeholder="••••••••"
                                {...register("confirmarSenha")}
                            />
                        </div>
                        {errors.confirmarSenha && <p className="text-red-500 text-xs mt-1 font-medium">{errors.confirmarSenha.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 sm:py-3.5 px-4 bg-green-600 text-white text-sm sm:text-base font-bold rounded-lg mt-2 transition-transform duration-150 active:scale-95"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
