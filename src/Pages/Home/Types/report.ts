export type ReportStatus = 'ABERTO' | 'EM_ANDAMENTO' | 'RESOLVIDO';

export interface Report {
    id: string;
    title: string;
    description: string;
    address: string;
    neighborhood: string;
    latitude?: number | null;
    longitude?: number | null;
    status: ReportStatus;
    hour: string;
    createAt: string;
    option: string;
    img?: string | null;
    user: {
        name: string;
        email: string;
    };
}
