import { UserListProps } from './Types';
import UserCard from './UserCard';

function UserList({ users, onEdit, onDelete, onUserClick }: UserListProps) {
    if (users.length === 0) {
        return (
            <div className="bg-white rounded-lg p-12 text-center border border-gray-200">
                <p className="text-gray-500 font-medium">Nenhum usuário encontrado.</p>
                <p className="text-gray-400 text-sm mt-1">O sistema ainda não possui usuários registrados</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <div className="bg-green-600 px-6 py-5">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-white">Usuários Registrados</h2>
                        <p className="text-green-100 text-sm">Gerencie os usuários do sistema</p>
                    </div>
                    <span className="px-4 py-2 bg-white/20 text-white text-sm font-bold rounded-lg">
                        {users.length} usuário(s)
                    </span>
                </div>
            </div>
            <div className="p-4 grid gap-3 max-h-[600px] overflow-y-auto">
                {users.map((user) => (
                    <UserCard 
                        key={user.id} 
                        user={user} 
                        onEdit={onEdit} 
                        onDelete={onDelete}
                        onUserClick={onUserClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default UserList;
