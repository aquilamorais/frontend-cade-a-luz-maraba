// RegisterForm Types
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

// RegisterHero Types
export interface RegisterHeroProps {
    imageSrc: string;
    altText?: string;
}

// RegisterTitle Types
export interface RegisterTitleProps {
    title: string;
    subtitle: string;
}
