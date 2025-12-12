import { useNavigate } from 'react-router';
import { ReportCardProps, ReportStatus } from './Types';

function ReportCard({ report, isOwn = false }: ReportCardProps) {
    const navigate = useNavigate();

    const statusColors: Record<ReportStatus, string> = {
        'RESOLVIDO': 'bg-green-100 text-green-700 border-green-300',
        'EM_ANDAMENTO': 'bg-yellow-100 text-yellow-700 border-yellow-300',
        'ABERTO': 'bg-red-100 text-red-700 border-red-300'
    };

    const statusLabels: Record<ReportStatus, string> = {
        'RESOLVIDO': 'Resolvida',
        'EM_ANDAMENTO': 'Em Andamento',
        'ABERTO': 'Em Aberto'
    };

    const handleClick = (): void => {
        navigate(`/report/${report.id}`);
    };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div
            onClick={handleClick}
            className={`p-4 rounded-lg border-2 ${isOwn ? 'bg-(--color-light) border-(--color-tertiary-light)' : 'bg-gray-50 border-gray-200'} hover:shadow-md transition-all cursor-pointer`}
        >
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">{report.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                    <p className="text-xs text-gray-500">📍 {report.address} - {report.neighborhood}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${statusColors[report.status]} whitespace-nowrap ml-2`}>
                    {statusLabels[report.status]}
                </span>
            </div>           
        </div>
    );
}

export default ReportCard;
