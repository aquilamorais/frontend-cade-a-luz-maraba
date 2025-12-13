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

const statusColors: Record<string, string> = {
    'ABERTO': '#EF4444',
    'EM_ANDAMENTO': '#F59E0B',
    'RESOLVIDO': '#10B981'
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

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-800">{report.title}</h3>
                        <span 
                            className="px-2 py-0.5 text-xs font-bold rounded"
                            style={{ 
                                backgroundColor: `${statusColors[report.status]}20`,
                                color: statusColors[report.status]
                            }}
                        >
                            {statusLabels[report.status]}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{report.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                        <span>📍 {report.address}</span>
                        <span>•</span>
                        <span>{optionLabels[report.option] || report.option}</span>
                        <span>•</span>
                        <span>{report.user?.name || 'Desconhecido'}</span>
                    </div>
                </div>
                <div className="flex gap-2 ml-4">
                    {!isResolved && (
                        <button
                            onClick={() => onResolve(report.id)}
                            className="flex flex-row gap-2 justify-center items-center p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="Marcar como resolvida"
                        >
                            Marcar como resolvida
                            <img
                            src={checkVerde}
                            alt=""
                            className="w-4 h-4 opacity-60"
                            />
                        </button>
                    )}
                    <button
                        onClick={() => onEdit(report.id)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Editar denúncia"
                    >
                        <img
                            src={editIcon}
                            alt=""
                            className="w-4 h-4 opacity-60"
                        />
                    </button>
                    <button
                        onClick={() => onDelete(report.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Excluir denúncia"
                    >
                        <img
                            src={deleteIcon}
                            alt=""
                            className="w-4 h-4 opacity-60"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminReportCard;
