function ReportCard({ report, isOwn = false }) {
    const statusColors = {
        'resolved': 'bg-green-100 text-green-700 border-green-300',
        'in_progress': 'bg-yellow-100 text-yellow-700 border-yellow-300',
        'open': 'bg-red-100 text-red-700 border-red-300'
    };

    const statusLabels = {
        'resolved': 'Resolvida',
        'in_progress': 'Em Andamento',
        'open': 'Em Aberto'
    };

    return (
        <div className={`p-4 rounded-lg border-2 ${isOwn ? 'bg-(--color-light) border-(--color-tertiary-light)' : 'bg-gray-50 border-gray-200'} hover:shadow-md transition-all`}>
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">{report.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                    <p className="text-xs text-gray-500">📍 {report.location}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${statusColors[report.status]} whitespace-nowrap ml-2`}>
                    {statusLabels[report.status]}
                </span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-200">
                <span> {report.date}</span>
                {isOwn && <span className="font-semibold text-blue-600">Sua denúncia</span>}
                {!isOwn && <span> {report.user}</span>}
            </div>
        </div>
    );
}

export default ReportCard;
