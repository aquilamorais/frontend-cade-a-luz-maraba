export interface UserData {
    id: string;
    nome: string;
    cpf: string;
    email: string;
    role: string;
}

export interface ProfileFormData {
    nome: string;
    email: string;
}

export interface LoggedUser {
    id: string;
    name: string;
    email: string;
    cpf?: string;
    role: string;
}
