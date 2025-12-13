import { UserListProps } from './Types';
import UserCard from './UserCard';

function UserList({ users, onEdit, onDelete }: UserListProps) {
    if (users.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <p className="text-gray-500">Nenhum usuário encontrado.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-(--color-secondary) px-6 py-4">
                <h2 className="text-xl font-bold text-white">Usuários Registrados</h2>
                <p className="text-sm text-gray-200 mt-1">
                    {users.length} usuário(s) no sistema
                </p>
            </div>
            <div className="p-4 grid gap-3">
                {users.map((user) => (
                    <UserCard 
                        key={user.id} 
                        user={user} 
                        onEdit={onEdit} 
                        onDelete={onDelete} 
                    />
                ))}
            </div>
        </div>
    );
}

export default UserList;
