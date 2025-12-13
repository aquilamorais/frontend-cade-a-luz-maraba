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

export interface Stats {
    resolved: number;
    total: number;
    pending: number;
    inProgress: number;
    open: number;
}

export interface ReportCardProps {
    report: Report;
    isOwn?: boolean;
}

export interface ReportsListProps {
    reports: Report[];
}

export interface StatsOverviewProps {
    stats: Stats;
    reports?: Report[];
}

export interface QuickActionsProps {
    onNewReport: () => void;
    onViewProfile: () => void;
}

export interface QuickActionCardProps {
    title: string;
    description: string;
    icon: string;
    onClick: () => void;
    bgColor: string;
    hoverColor: string;
    textColor: string;
}

export interface StatsCardProps {
    title: string;
    count: number;
    color: string;
    bgColor: string;
}
