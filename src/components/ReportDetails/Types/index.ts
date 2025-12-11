// Common Types
export type ReportStatus = 'resolved' | 'in_progress' | 'open';

export type ReportType = 
    | 'Falta de Energia' 
    | 'Poste Danificado' 
    | 'Fiação Exposta' 
    | 'Lâmpada Queimada' 
    | 'Outros';

// Location Types
export interface ReportLocation {
    address: string;
    neighborhood: string;
    city: string;
    state: string;
    cep?: string;
    latitude: number;
    longitude: number;
}

// Report Types
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

// ReportDetailsActions Types
export interface ReportDetailsActionsProps {
    onEdit: () => void;
    onDelete: () => void;
}

// ReportDetailsInfo Types
export interface ReportDetailsInfoProps {
    report: ReportDetail;
}

// ReportDetailsMap Types
export interface ReportDetailsMapProps {
    location: ReportLocation;
}

// Status and Type color mappings
export type StatusColorMap = Record<ReportStatus, string>;
export type StatusLabelMap = Record<ReportStatus, string>;
export type TypeColorMap = Record<string, string>;
