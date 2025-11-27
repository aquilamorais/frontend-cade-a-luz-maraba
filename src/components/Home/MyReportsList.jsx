import ReportCard from './ReportCard';

function MyReportsList({ reports }) {
    return (
        <div className="w-full bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-(--color-secondary)">Minhas Denúncias</h2>
                <span className="px-3 py-1 bg-(--color-tertiary-light) text-(--color-tertiary) text-sm font-bold rounded-full">
                    {reports.length}
                </span>
            </div>
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {reports.length > 0 ? (
                    reports.map((report) => (
                        <ReportCard key={report.id} report={report} isOwn={true} />
                    ))
                ) : (
                    <div className="text-center py-12">

                        <p className="text-gray-500">Você ainda não fez nenhuma denúncia</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyReportsList;
