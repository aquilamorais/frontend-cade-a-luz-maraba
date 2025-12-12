import { FieldErrors } from 'react-hook-form';

export interface LoginFormData {
    email: string;
    password: string;
}

export interface LoginFormProps {
    onSubmit: (data: LoginFormData) => void;
}

export interface LoginHeroProps {
    imageSrc: string;
    altText?: string;
}

export interface LoginTitleProps {
    title: string;
    subtitle: string;
}

export type { FieldErrors };
