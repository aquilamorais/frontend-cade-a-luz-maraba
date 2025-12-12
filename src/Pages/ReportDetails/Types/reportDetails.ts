export type ReportStatus = 'ABERTO' | 'EM_ANDAMENTO' | 'RESOLVIDO';

export interface ReportLocation {
    address: string;
    neighborhood: string;
    city: string;
    state: string;
    cep?: string;
    latitude: number;
    longitude: number;
}

export interface ReportUser {
    id: string;
    name: string;
    email: string;
}

export interface ReportComment {
    id: number;
    author: string;
    text: string;
    date: string;
    isAdmin: boolean;
}

export interface ReportDetails {
    id: string;
    title: string;
    description: string;
    img?: string | null;
    option: string;
    status: ReportStatus;
    location: ReportLocation;
    createdAt: string;
    updatedAt: string;
    user: ReportUser;
    isOwn: boolean;
    comments: ReportComment[];
}
