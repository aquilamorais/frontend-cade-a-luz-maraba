export interface RegisterFormData {
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    confirmarSenha: string;
}

export interface RegisterFormProps {
    onSubmit: (data: RegisterFormData) => void;
}

export interface RegisterHeroProps {
    imageSrc: string;
    altText?: string;
}

export interface RegisterTitleProps {
    title: string;
    subtitle: string;
}
