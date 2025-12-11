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
            <div className="flex flex-col justify-center items-center gap-8 w-full max-w-md bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-3xl font-bold text-(--color-secondary)">Login</h2>

                <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col gap-5 w-full">
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
                        <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                            Senha
                        </label>
                        <div className="relative">
                            <img
                                src={cadeadoIcon}
                                alt=""
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50"
                            />
                            <input
                                id="password"
                                type="password"
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:border-(--color-secondary) focus:outline-none transition-colors"
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
                            <span className="relative h-5 w-5 rounded border-2 border-slate-300 bg-white flex items-center justify-center transition-all peer-checked:bg-(--color-secondary) peer-checked:border-(--color-secondary) peer-focus-visible:ring-2 peer-focus-visible:ring-(--color-secondary) peer-focus-visible:ring-offset-2">
                                <img
                                    src={checkIcon}
                                    alt="check icon"
                                    className={`w-3 h-3 transition-opacity duration-200 ${rememberMe ? 'opacity-100' : 'opacity-0'}`}
                                />
                            </span>
                            <span className="select-none text-sm text-slate-800">Lembrar-me</span>
                        </label>
                        <a
                            href="#"
                            onClick={handleForgotPassword}
                            className="text-sm text-(--color-secondary) hover:text-(--color-primary) font-medium hover:underline transition-colors"
                        >
                            Esqueceu a senha?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-(--color-secondary) text-white font-bold rounded-lg hover:bg-(--color-primary) focus:outline-none focus:ring-2 focus:ring-(--color-secondary) focus:ring-offset-2 transition-all mt-2"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
