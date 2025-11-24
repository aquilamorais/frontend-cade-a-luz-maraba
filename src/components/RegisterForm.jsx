import { useState } from 'react';

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
        <div className="flex flex-col justify-center items-center gap-[30px] bg-[--color-white] w-full h-full rounded-[10px] p-8">
            <h2 className="text-[2rem] font-bold text-[--color-secondary]">Criar conta</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                <input
                    type="text"
                    name="nome"
                    className="w-full p-2.5 border-2 border-[--color-secondary] rounded-md bg-[--color-white]"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="cpf"
                    className="w-full p-2.5 border-2 border-[--color-secondary] rounded-md bg-[--color-white]"
                    placeholder="CPF"
                    value={formData.cpf}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="telefone"
                    className="w-full p-2.5 border-2 border-[--color-secondary] rounded-md bg-[--color-white]"
                    placeholder="Telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    className="w-full p-2.5 border-2 border-[--color-secondary] rounded-md bg-[--color-white]"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="senha"
                    className="w-full p-2.5 border-2 border-[--color-secondary] rounded-md bg-[--color-white]"
                    placeholder="Senha"
                    value={formData.senha}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmarSenha"
                    className="w-full p-2.5 border-2 border-[--color-secondary] rounded-md bg-[--color-white]"
                    placeholder="Confirmar senha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    className="flex p-2.5 justify-center items-center cursor-pointer w-full border-none rounded-md bg-[--color-secondary] font-bold text-white hover:bg-[--color-primary]"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default RegisterForm;
