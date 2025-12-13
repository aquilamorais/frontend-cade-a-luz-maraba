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
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-8 w-full max-w-md bg-white p-10 rounded-lg shadow border border-gray-200">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-green-700">
                        Bem-vindo de volta!
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm">Entre com suas credenciais</p>
                </div>

                <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                            E-mail
                        </label>
                        <div className="relative">
                            <img
                                src={smsIcon}
                                alt=""
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40"
                            />
                            <input
                                id="email"
                                type="email"
                                className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-lg bg-gray-50 focus:border-green-500 focus:bg-white focus:outline-none"
                                placeholder="seu@email.com"
                                {...register("email")}
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                            Senha
                        </label>
                        <div className="relative">
                            <img
                                src={cadeadoIcon}
                                alt=""
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40"
                            />
                            <input
                                id="password"
                                type="password"
                                className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-lg bg-gray-50 focus:border-green-500 focus:bg-white focus:outline-none"
                                placeholder="••••••••"
                                {...register("password")}
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <div className="flex items-center justify-between">
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
                            <span className="select-none text-sm text-gray-600">Lembrar-me</span>
                        </label>
                        <a
                            href="#"
                            onClick={handleForgotPassword}
                            className="text-sm text-green-600 font-medium"
                        >
                            Esqueceu a senha?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 px-4 bg-green-600 text-white font-bold rounded-lg mt-2"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
