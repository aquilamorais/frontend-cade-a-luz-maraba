import { Report } from '../Home/Types';
import AdminReportCard from './AdminReportCard';

interface AdminReportListProps {
    reports: Report[];
    onEdit: (reportId: string) => void;
    onDelete: (reportId: string) => void;
    onResolve: (reportId: string) => void;
}

function AdminReportList({ reports, onEdit, onDelete, onResolve }: AdminReportListProps) {
    if (reports.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <p className="text-gray-500">Nenhuma denúncia encontrada.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-(--color-secondary) px-6 py-4">
                <h2 className="text-xl font-bold text-white">Todas as Denúncias</h2>
                <p className="text-sm text-gray-200 mt-1">
                    {reports.length} denúncia(s) no sistema
                </p>
            </div>
            <div className="p-4 grid gap-3 max-h-[500px] overflow-y-auto">
                {reports.map((report) => (
                    <AdminReportCard 
                        key={report.id} 
                        report={report} 
                        onEdit={onEdit} 
                        onDelete={onDelete}
                        onResolve={onResolve}
                    />
                ))}
            </div>
        </div>
    );
}

export default AdminReportList;
