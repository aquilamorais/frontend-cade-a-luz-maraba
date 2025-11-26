import ReportCard from './ReportCard';

function AllReportsList({ reports }) {
    return (
        <div className="w-full bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-(--color-secondary)">Todas as Denúncias</h2>
                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-bold rounded-full">
                    {reports.length}
                </span>
            </div>
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {reports.length > 0 ? (
                    reports.map((report) => (
                        <ReportCard key={report.id} report={report} isOwn={false} />
                    ))
                ) : (
                    <div className="text-center py-12">

                        <p className="text-gray-500">Nenhuma denúncia registrada</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AllReportsList;
