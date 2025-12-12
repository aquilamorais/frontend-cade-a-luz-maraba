export type ReportStatus = 'resolved' | 'in_progress' | 'open';

export type ReportType = 
    | 'Falta de Energia' 
    | 'Poste Danificado' 
    | 'Fiação Exposta' 
    | 'Lâmpada Queimada' 
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

export interface ReportDetail {
    id: string;
    title: string;
    description: string;
    type: ReportType | string;
    status: ReportStatus;
    location: ReportLocation;
    createdAt: string;
    updatedAt: string;
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
