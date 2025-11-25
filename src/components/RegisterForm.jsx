import { useState } from 'react';
import nomeIcon from '../assets/nome.png';
import cpfIcon from '../assets/cpf.png';
import telefoneIcon from '../assets/telefone.png';
import smsIcon from '../assets/sms.png';
import cadeadoIcon from '../assets/cadeado.png';

function RegisterForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        telefone: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div alt="Register Form" className="flex flex-col justify-center items-center gap-8 w-full max-w-md bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-3xl font-bold text-(--color-secondary)">Criar conta</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
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
                                name="nome"
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:border-(--color-secondary) focus:outline-none transition-colors"
                                placeholder="Seu nome completo"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>
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
                                name="cpf"
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:border-(--color-secondary) focus:outline-none transition-colors"
                                placeholder="000.000.000-00"
                                value={formData.cpf}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
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
                                name="telefone"
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:border-(--color-secondary) focus:outline-none transition-colors"
                                placeholder="(00) 00000-0000"
                                value={formData.telefone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

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
                                name="email"
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:border-(--color-secondary) focus:outline-none transition-colors"
                                placeholder="seu@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
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
                                name="senha"
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:border-(--color-secondary) focus:outline-none transition-colors"
                                placeholder="••••••••"
                                value={formData.senha}
                                onChange={handleChange}
                                required
                            />
                        </div>
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
                                name="confirmarSenha"
                                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:border-(--color-secondary) focus:outline-none transition-colors"
                                placeholder="••••••••"
                                value={formData.confirmarSenha}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-(--color-secondary) text-white font-bold rounded-lg hover:bg-(--color-primary) focus:outline-none focus:ring-2 focus:ring-(--color-secondary) focus:ring-offset-2 transition-all mt-2"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
