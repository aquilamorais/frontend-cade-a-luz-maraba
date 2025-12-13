import { useState, ChangeEvent, MouseEvent } from 'react';
import smsIcon from '../../assets/sms.png';
import cadeadoIcon from '../../assets/cadeado.png';
import checkIcon from '../../assets/check.png';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { LoginFormProps, LoginFormData } from './Types';

const loginSchema = z.object({
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

function LoginForm({ onSubmit }: LoginFormProps){
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const handleSubmitForm = (data: LoginFormData): void => {
        console.log(data);
        onSubmit(data);
    };

    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const handleForgotPassword = (e: MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        console.log('Forgot password clicked');
    };

    return (
        <div className="flex flex-col justify-center items-center w-full px-2 sm:px-0">
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-8 w-full max-w-sm sm:max-w-md bg-white p-5 sm:p-10 rounded-lg shadow border border-gray-200">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-green-700">
                        Bem-vindo de volta!
                    </h2>
                    <p className="text-gray-500 mt-2 text-xs sm:text-sm">Entre com suas credenciais</p>
                </div>

                <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col gap-4 sm:gap-5 w-full">
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                            E-mail
                        </label>
                        <div className="relative">
                            <img
                                src={smsIcon}
                                alt=""
                                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 opacity-40"
                            />
                            <input
                                id="email"
                                type="email"
                                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-3.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg bg-gray-50 focus:border-green-500 focus:bg-white focus:outline-none"
                                placeholder="seu@email.com"
                                {...register("email")}
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                            Senha
                        </label>
                        <div className="relative">
                            <img
                                src={cadeadoIcon}
                                alt=""
                                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 opacity-40"
                            />
                            <input
                                id="password"
                                type="password"
                                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-3.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg bg-gray-50 focus:border-green-500 focus:bg-white focus:outline-none"
                                placeholder="••••••••"
                                {...register("password")}
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                        <label className="inline-flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
                                className="peer sr-only"
                            />
                            <span className="relative h-5 w-5 rounded-md border-2 border-gray-300 bg-white flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-500">
                                <img
                                    src={checkIcon}
                                    alt="check icon"
                                    className={`w-3 h-3 ${rememberMe ? 'opacity-100' : 'opacity-0'}`}
                                />
                            </span>
                            <span className="select-none text-xs sm:text-sm text-gray-600">Lembrar-me</span>
                        </label>
                        <a
                            href="#"
                            onClick={handleForgotPassword}
                            className="text-xs sm:text-sm text-green-600 font-medium"
                        >
                            Esqueceu a senha?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 sm:py-4 px-4 bg-green-600 text-white text-sm sm:text-base font-bold rounded-lg mt-2 transition-transform duration-150 active:scale-95"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
