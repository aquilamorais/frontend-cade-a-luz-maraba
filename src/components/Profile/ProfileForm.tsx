import { useState, ChangeEvent, FormEvent } from 'react';
import nomeIcon from '../../assets/nome.png';
import smsIcon from '../../assets/sms.png';
import { ProfileFormProps, ProfileFormData } from './Types';

function ProfileForm({ onSubmit, onDelete, initialData = {} }: ProfileFormProps) {
    const [formData, setFormData] = useState<ProfileFormData>({
        nome: initialData.nome || '',
        cpf: initialData.cpf || '',
        email: initialData.email || '',
        role: initialData.role || ''
    });

    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        onSubmit(formData);
        setIsEditing(false);
    };

    const handleCancel = (): void => {
        setFormData({
            nome: initialData.nome || '',
            cpf: initialData.cpf || '',
            email: initialData.email || '',
            role: initialData.role || ''
        });
        setIsEditing(false);
    };

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-8 w-full max-w-2xl bg-white p-8 rounded-lg shadow border border-gray-200">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">U</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-green-700">
                        Meu Perfil
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome" className="text-sm font-bold text-gray-700">
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
                                className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg ${isEditing
                                    ? 'border-gray-200 bg-white focus:border-green-500 focus:outline-none'
                                    : 'border-gray-100 bg-gray-50 cursor-not-allowed text-gray-500'
                                    }`}
                                placeholder="Seu nome completo"
                                value={formData.nome}
                                onChange={handleChange}
                                disabled={!isEditing}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-bold text-gray-700">
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
                                className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg ${isEditing
                                    ? 'border-gray-200 bg-white focus:border-green-500 focus:outline-none'
                                    : 'border-gray-100 bg-gray-50 cursor-not-allowed text-gray-500'
                                    }`}
                                placeholder="seu@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={!isEditing}
                                required
                            />
                        </div>
                    </div>

                    <div className="border-t-2 border-gray-100 pt-5 mt-2">
                        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                            Informações da conta
                        </h3>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <span className="text-sm font-bold text-gray-600">Tipo de Conta</span>
                            <span className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase ${formData.role === 'ADMIN'
                                ? 'bg-purple-500 text-white'
                                : 'bg-green-500 text-white'
                                }`}>
                                {formData.role === 'ADMIN' ? 'Admin' : 'Membro'}
                            </span>
                        </div>
                    </div>

                    {isEditing ? (
                        <div className="flex gap-4 mt-2">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="flex-1 py-3.5 px-4 bg-gray-100 text-gray-700 font-bold rounded-lg transition-transform duration-150 active:scale-95"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="flex-1 py-3.5 px-4 bg-green-600 text-white font-bold rounded-lg transition-transform duration-150 active:scale-95"
                            >
                                Salvar
                            </button>
                        </div>
                    ) : (
                        <div className="flex w-full justify-center">
                            <button
                                type="button"
                                onClick={() => setIsEditing(true)}
                                className="min-w-sm py-3.5 px-6 bg-green-600 text-white font-bold rounded-lg mt-2 transition-transform duration-150 active:scale-95"
                            >
                                Editar Perfil
                            </button>
                        </div>

                    )}
                </form>
                <div className="border-t-2 border-red-100 pt-5 mt-2 w-full">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-bold text-red-600">Zona de perigo</span>
                        <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-bold rounded-lg">CUIDADO</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Ações irreversíveis relacionadas à sua conta</p>
                    <button
                        type="button"
                        onClick={onDelete}
                        className="py-3 px-6 bg-white text-red-600 font-bold text-sm border-2 border-red-200 rounded-lg transition-transform duration-150 active:scale-95"
                    >
                        Excluir conta
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileForm;
