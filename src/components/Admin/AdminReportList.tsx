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
            <div className="bg-white rounded-lg p-12 text-center border border-gray-200">
                <p className="text-gray-500 font-medium">Nenhuma denúncia encontrada.</p>
                <p className="text-gray-400 text-sm mt-1">O sistema ainda não possui denúncias registradas</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <div className="bg-green-600 px-6 py-5">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-white">Todas as Denúncias</h2>
                        <p className="text-green-100 text-sm">Gerencie as denúncias do sistema</p>
                    </div>
                    <span className="px-4 py-2 bg-white/20 text-white text-sm font-bold rounded-lg">
                        {reports.length} registro(s)
                    </span>
                </div>
            </div>
            <div className="p-4 grid gap-3 max-h-[600px] overflow-y-auto">
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
