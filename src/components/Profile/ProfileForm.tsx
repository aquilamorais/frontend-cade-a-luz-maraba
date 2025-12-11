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
            <div className="flex flex-col justify-center items-center gap-8 w-full max-w-2xl bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-3xl font-bold text-(--color-secondary)">Meu Perfil</h2>

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
                                className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg transition-colors ${isEditing
                                    ? 'border-gray-300 bg-white focus:border-(--color-secondary) focus:outline-none'
                                    : 'border-gray-200 bg-gray-50 cursor-not-allowed'
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
                                className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg transition-colors ${isEditing
                                    ? 'border-gray-300 bg-white focus:border-(--color-secondary) focus:outline-none'
                                    : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                                    }`}
                                placeholder="seu@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={!isEditing}
                                required
                            />
                        </div>
                    </div>

                    <div className="border-t-2 border-gray-200 pt-5 mt-2">
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">Informações da conta</h3>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <span className="text-sm font-medium text-gray-600">Tipo de Conta</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${formData.role === 'ADMIN'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-(--color-tertiary-light) text-(--color-secondary)'
                                }`}>
                                {formData.role || 'MEMBER'}
                            </span>
                        </div>
                    </div>

                    {isEditing ? (
                        <div className="flex gap-3 mt-2">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="flex-1 py-3 px-4 bg-(--color-secondary) text-white font-bold rounded-lg hover:bg-(--color-primary) focus:outline-none focus:ring-2 focus:ring-(--color-secondary) focus:ring-offset-2 transition-all"
                            >
                                Salvar
                            </button>
                        </div>
                    ) : (
                        <div className="flex w-full justify-center transition-all">
                            <button
                                type="button"
                                onClick={() => setIsEditing(true)}
                                className="min-w-sm py-3 px-4 bg-(--color-secondary) text-white font-bold rounded-lg hover:bg-(--color-primary) focus:outline-none focus:ring-2 focus:ring-(--color-secondary) focus:ring-offset-2 transition-all mt-2"
                            >
                                Editar Perfil
                            </button>
                        </div>

                    )}
                </form>
                <div className="border-t-2 border-red-200 pt-5 mt-2 w-full">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-semibold text-red-600">Zona de perigo</span>
                        <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-bold rounded">CUIDADO</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Ações irreversíveis relacionadas à sua conta</p>
                    <button
                        type="button"
                        onClick={onDelete}
                        className="w-[45%] py-3 px-4 bg-transparent text-red-500 font-bold text-sm border-red-300 border rounded-lg hover:bg-red-200 focus:outline-none focus:ring-2 hover:text-black focus:ring-red-500 focus:ring-offset-2 transition-all"
                    >
                        Excluir conta
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileForm;
