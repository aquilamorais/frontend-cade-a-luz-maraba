import { ReportDetailsInfoProps, StatusColorMap, StatusLabelMap, TypeColorMap } from './Types';

function ReportDetailsInfo({ report }: ReportDetailsInfoProps){
    const statusColors: StatusColorMap = {
        'RESOLVIDO': 'bg-green-100 text-green-700 border-green-300',
        'EM_ANDAMENTO': 'bg-yellow-100 text-yellow-700 border-yellow-300',
        'ABERTO': 'bg-red-100 text-red-700 border-red-300'
    };

    const statusLabels: StatusLabelMap = {
        'RESOLVIDO': 'Resolvida',
        'EM_ANDAMENTO': 'Em Andamento',
        'ABERTO': 'Em Aberto'
    };

    const typeColors: TypeColorMap = {
        'Falta de Energia': 'bg-red-50 text-red-600',
        'Oscilação de Energia': 'bg-orange-50 text-orange-600',
        'Incêndio': 'bg-yellow-50 text-yellow-600',
        'Poste em Manutenção': 'bg-blue-50 text-blue-600',
        'Outros': 'bg-gray-50 text-gray-600'
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${typeColors[report.option] || 'bg-gray-50 text-gray-600'}`}>
                            {report.option}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${statusColors[report.status]}`}>
                            {statusLabels[report.status]}
                        </span>
                        {report.isOwn && (
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">
                                Sua denúncia
                            </span>
                        )}
                    </div>
                    <h1 className="text-3xl font-bold text-(--color-secondary) mb-2">
                        {report.title}
                    </h1>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Descrição</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    {report.description}
                </p>

                {report.img && (
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-600 mb-2">Imagem</h3>
                        <img 
                            src={report.img} 
                            alt="Imagem da denúncia" 
                            className="max-w-full h-auto rounded-lg border border-gray-200"
                            style={{ maxHeight: '300px' }}
                        />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-semibold text-gray-600">📍 Localização</h3>
                        <p className="text-gray-800">{report.location.address}</p>
                        <p className="text-sm text-gray-600">
                            {report.location.neighborhood}, {report.location.city} - {report.location.state}
                        </p>
                        {report.location.cep && (
                            <p className="text-sm text-gray-600">CEP: {report.location.cep}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-semibold text-gray-600">Data de Criação</h3>
                        <p className="text-gray-800">{report.createdAt}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-semibold text-gray-600">Última Atualização</h3>
                        <p className="text-gray-800">{report.updatedAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportDetailsInfo;
