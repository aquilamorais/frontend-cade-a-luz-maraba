export interface User {
    id: string;
    name: string;
    email: string;
    cpf: string;
    role: 'ADMIN' | 'MEMBER';
    createAt?: string;
}

export interface UserCardProps {
    user: User;
    onEdit: (user: User) => void;
    onDelete: (userId: string) => void;
}

export interface UserListProps {
    users: User[];
    onEdit: (user: User) => void;
    onDelete: (userId: string) => void;
}

export interface EditUserModalProps {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
    onSave: (userId: string, data: Partial<User>) => void;
}

export interface DeleteConfirmModalProps {
    isOpen: boolean;
    userName: string;
    onClose: () => void;
    onConfirm: () => void;
}
