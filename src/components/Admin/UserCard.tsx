import { UserCardProps } from './Types';
import smsIcon from '../../assets/sms.png';
import cpfIcon from '../../assets/cpf.png';
import editIcon from '../../assets/edit.png';
import deleteIcon from '../../assets/delete.png';

function UserCard({ user, onEdit, onDelete }: UserCardProps) {
    const isAdmin = user.role === 'ADMIN';
    
    return (
        <div className={`bg-white rounded-lg border p-5 ${
            isAdmin ? 'border-purple-200' : 'border-gray-200'
        }`}>
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold ${
                        isAdmin 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-green-600 text-white'
                    }`}>
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-gray-800">{user.name}</h3>
                            <span 
                                className={`px-3 py-1 text-xs font-bold rounded-lg ${
                                    isAdmin 
                                        ? 'bg-purple-100 text-purple-700' 
                                        : 'bg-green-100 text-green-700'
                                }`}
                            >
                                {isAdmin ? 'Admin' : 'Membro'}
                            </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                <img src={smsIcon} alt="" className="w-4 h-4 opacity-50" />
                                {user.email}
                            </span>
                            <span className="flex items-center gap-2">
                                <img src={cpfIcon} alt="" className="w-4 h-4 opacity-50" />
                                {user.cpf}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onEdit(user)}
                        className="p-2.5 bg-blue-50 text-blue-600 rounded-lg"
                        title="Editar usuário"
                    >
                        <img src={editIcon} alt="" className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => onDelete(user.id)}
                        className="p-2.5 bg-red-50 text-red-600 rounded-lg"
                        title="Excluir usuário"
                    >
                        <img src={deleteIcon} alt="" className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
