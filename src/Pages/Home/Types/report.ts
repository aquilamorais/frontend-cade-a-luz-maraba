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
