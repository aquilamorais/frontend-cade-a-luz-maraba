export type ReportStatus = 'open' | 'in_progress' | 'resolved';

export interface Report {
    id: number;
    title: string;
    description: string;
    location: string;
    status: ReportStatus;
    date: string;
    user: string;
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
