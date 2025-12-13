import ReportCard from './ReportCard';
import { ReportsListProps } from './Types';

function AllReportsList({ reports }: ReportsListProps){
    return (
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-700 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-white">Todas as Denúncias</h2>
                        <p className="text-gray-300 text-sm">Registros da comunidade</p>
                    </div>
                    <span className="px-4 py-2 bg-white/20 text-white text-sm font-bold rounded-lg">
                        {reports.length} registro(s)
                    </span>
                </div>
            </div>
            <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
                {reports.length > 0 ? (
                    reports.map((report) => (
                        <ReportCard key={report.id} report={report} isOwn={false} />
                    ))
                ) : (
                    <div className="text-center py-16">
                        <p className="text-gray-500 font-medium">Nenhuma denúncia registrada</p>
                        <p className="text-gray-400 text-sm mt-1">A comunidade ainda não registrou denúncias</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AllReportsList;
