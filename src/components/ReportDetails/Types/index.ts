export type ReportStatus = 'ABERTO' | 'EM_ANDAMENTO' | 'RESOLVIDO';

export type ReportType = 
    | 'Falta de Energia' 
    | 'Oscilação de Energia'
    | 'Incêndio' 
    | 'Poste em Manutenção'
    | 'Outros';

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

export interface ReportDetail {
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
    isOwn?: boolean;
}

export interface ReportDetailsActionsProps {
    onEdit: () => void;
    onDelete: () => void;
}

export interface ReportDetailsInfoProps {
    report: ReportDetail;
}

export interface ReportDetailsMapProps {
    location: ReportLocation;
}

export type StatusColorMap = Record<ReportStatus, string>;
export type StatusLabelMap = Record<ReportStatus, string>;
export type TypeColorMap = Record<string, string>;
