import { useState, useEffect } from 'react';
import { EditUserModalProps, User } from './Types';

function EditUserModal({ user, isOpen, onClose, onSave }: EditUserModalProps) {
    const [formData, setFormData] = useState<Partial<User>>({
        name: '',
        email: '',
        cpf: '',
        role: 'MEMBER'
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                cpf: user.cpf,
                role: user.role
            });
        }
    }, [user]);

    if (!isOpen || !user) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(user.id, formData);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
                <div className="bg-(--color-secondary) px-6 py-4 rounded-t-xl">
                    <h2 className="text-xl font-bold text-white">Editar Usuário</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Nome
                        </label>
                        <input
                            type="text"
                            value={formData.name || ''}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-(--color-secondary) focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={formData.email || ''}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-(--color-secondary) focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            CPF
                        </label>
                        <input
                            type="text"
                            value={formData.cpf || ''}
                            onChange={(e) => setFormData(prev => ({ ...prev, cpf: e.target.value }))}
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-(--color-secondary) focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Papel
                        </label>
                        <select
                            value={formData.role || 'MEMBER'}
                            onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value as 'ADMIN' | 'MEMBER' }))}
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-(--color-secondary) focus:outline-none"
                        >
                            <option value="MEMBER">Membro</option>
                            <option value="ADMIN">Administrador</option>
                        </select>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-2 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="flex-1 py-2 px-4 bg-(--color-secondary) text-white font-semibold rounded-lg hover:bg-(--color-primary) transition-colors"
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditUserModal;
