import { useNavigate } from 'react-router';
import { ReportCardProps, ReportStatus } from './Types';

function ReportCard({ report, isOwn = false }: ReportCardProps) {
    const navigate = useNavigate();

    const statusConfig: Record<ReportStatus, { bg: string; text: string }> = {
        'RESOLVIDO': { bg: 'bg-green-100', text: 'text-green-700' },
        'EM_ANDAMENTO': { bg: 'bg-amber-100', text: 'text-amber-700' },
        'ABERTO': { bg: 'bg-red-100', text: 'text-red-700' }
    };

    const statusLabels: Record<ReportStatus, string> = {
        'RESOLVIDO': 'Resolvida',
        'EM_ANDAMENTO': 'Em Andamento',
        'ABERTO': 'Em Aberto'
    };

    const handleClick = (): void => {
        navigate(`/report/${report.id}`);
    };

    const config = statusConfig[report.status];

    return (
        <div
            onClick={handleClick}
            className={`p-5 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl border border-gray-200 active:scale-98 ${
                isOwn 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-white border-gray-200'
            }`}
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                        {isOwn && (
                            <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-bold rounded-md">
                                Minha
                            </span>
                        )}
                        <h4 className="font-bold text-gray-800 truncate">
                            {report.title}
                        </h4>
                    </div>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{report.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>{report.address}</span>
                        <span>•</span>
                        <span>{report.neighborhood}</span>
                    </div>
                </div>
                <span className={`px-3 py-1.5 rounded-lg text-xs font-bold ${config.bg} ${config.text} whitespace-nowrap`}>
                    {statusLabels[report.status]}
                </span>
            </div>           
        </div>
    );
}

export default ReportCard;
