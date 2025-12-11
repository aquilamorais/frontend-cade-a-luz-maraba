import { FieldErrors } from 'react-hook-form';

// LoginForm Types
export interface LoginFormData {
    email: string;
    password: string;
}

export interface LoginFormProps {
    onSubmit: (data: LoginFormData) => void;
}

// LoginHero Types
export interface LoginHeroProps {
    imageSrc: string;
    altText?: string;
}

// LoginTitle Types
export interface LoginTitleProps {
    title: string;
    subtitle: string;
}

// Re-export for convenience
export type { FieldErrors };
