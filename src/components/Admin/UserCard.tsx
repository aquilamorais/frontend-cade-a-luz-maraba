import { UserCardProps } from './Types';
import smsIcon from '../../assets/sms.png';
import cpfIcon from '../../assets/cpf.png';
import editIcon from '../../assets/edit.png';
import deleteIcon from '../../assets/delete.png';

function UserCard({ user, onEdit, onDelete }: UserCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-800">{user.name}</h3>
                        <span 
                            className={`px-2 py-0.5 text-xs font-bold rounded ${
                                user.role === 'ADMIN' 
                                    ? 'bg-purple-100 text-purple-700' 
                                    : 'bg-blue-100 text-blue-700'
                            }`}
                        >
                            {user.role === 'ADMIN' ? 'Administrador' : 'Membro'}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                        <img
                            src={smsIcon}
                            alt=""
                            className="w-4 h-4 opacity-60"
                        />
                        {user.email}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                        <img
                            src={cpfIcon}
                            alt=""
                            className="w-4 h-4 opacity-60"
                        />
                        CPF: {user.cpf}
                    </p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(user)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Editar usuário"
                    >
                        <img
                            src={editIcon}
                            alt=""
                            className="w-4 h-4 opacity-60"
                        />
                    </button>
                    <button
                        onClick={() => onDelete(user.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Excluir usuário"
                    >
                        <img
                            src={deleteIcon}
                            alt=""
                            className="w-4 h-4 opacity-60"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
