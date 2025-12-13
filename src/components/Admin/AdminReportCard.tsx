import { Report } from '../Home/Types';
import editIcon from '../../assets/edit.png';
import deleteIcon from '../../assets/delete.png';
import checkVerde from '../../assets/checkverde.png';

interface AdminReportCardProps {
    report: Report;
    onEdit: (reportId: string) => void;
    onDelete: (reportId: string) => void;
    onResolve: (reportId: string) => void;
}

const statusConfig: Record<string, { bg: string; text: string; border: string }> = {
    'ABERTO': { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
    'EM_ANDAMENTO': { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
    'RESOLVIDO': { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' }
};

const statusLabels: Record<string, string> = {
    'ABERTO': 'Em Aberto',
    'EM_ANDAMENTO': 'Em Andamento',
    'RESOLVIDO': 'Resolvida'
};

const optionLabels: Record<string, string> = {
    'FALTOUENERGIA': 'Falta de Energia',
    'OSCILACAO': 'Oscilação de Energia',
    'INCENDIO': 'Incêndio',
    'MANUTENCAO': 'Poste em Manutenção'
};

function AdminReportCard({ report, onEdit, onDelete, onResolve }: AdminReportCardProps) {
    const isResolved = report.status === 'RESOLVIDO';
    const config = statusConfig[report.status];

    return (
        <div className={`bg-white rounded-lg border ${config.border} p-5`}>
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-bold text-gray-800 truncate">{report.title}</h3>
                        <span className={`px-3 py-1 text-xs font-bold rounded-lg ${config.bg} ${config.text}`}>
                            {statusLabels[report.status]}
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{report.description}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                        <span>{report.address}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="px-2 py-1 bg-gray-100 rounded-md">{optionLabels[report.option] || report.option}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>{report.user?.name || 'Desconhecido'}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {!isResolved && (
                        <button
                            onClick={() => onResolve(report.id)}
                            className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-medium"
                            title="Marcar como resolvida"
                        >
                            <img src={checkVerde} alt="" className="w-4 h-4" />
                            <span className="hidden sm:inline">Resolver</span>
                        </button>
                    )}
                    <button
                        onClick={() => onEdit(report.id)}
                        className="p-2.5 bg-blue-50 text-blue-600 rounded-lg"
                        title="Editar denúncia"
                    >
                        <img src={editIcon} alt="" className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => onDelete(report.id)}
                        className="p-2.5 bg-red-50 text-red-600 rounded-lg"
                        title="Excluir denúncia"
                    >
                        <img src={deleteIcon} alt="" className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminReportCard;
