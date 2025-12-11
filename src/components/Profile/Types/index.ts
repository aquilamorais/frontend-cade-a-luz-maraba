export type UserRole = 'ADMIN' | 'MEMBER';

export interface ProfileFormData {
    nome: string;
    cpf: string;
    email: string;
    role: UserRole | string;
}

export interface ProfileFormProps {
    onSubmit: (data: ProfileFormData) => void;
    initialData?: Partial<ProfileFormData>;
}

export interface ProfileHeroProps {
    imageSrc: string;
    altText: string;
}

export interface ProfileTitleProps {
    title: string;
    subtitle: string;
}
