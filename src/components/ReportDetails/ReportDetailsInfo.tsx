import { ReportDetailsInfoProps, StatusColorMap, StatusLabelMap, TypeColorMap } from './Types';

function ReportDetailsInfo({ report }: ReportDetailsInfoProps){
    const statusColors: StatusColorMap = {
        'RESOLVIDO': 'bg-green-100 text-green-700 border-green-300',
        'EM_ANDAMENTO': 'bg-amber-100 text-amber-700 border-amber-300',
        'ABERTO': 'bg-red-100 text-red-700 border-red-300'
    };

    const statusLabels: StatusLabelMap = {
        'RESOLVIDO': 'Resolvida',
        'EM_ANDAMENTO': 'Em Andamento',
        'ABERTO': 'Em Aberto'
    };

    const typeColors: TypeColorMap = {
        'Falta de Energia': 'bg-red-50 text-red-600 border-red-200',
        'Oscilação de Energia': 'bg-orange-50 text-orange-600 border-orange-200',
        'Incêndio': 'bg-yellow-50 text-yellow-600 border-yellow-200',
        'Poste em Manutenção': 'bg-blue-50 text-blue-600 border-blue-200',
        'Outros': 'bg-gray-50 text-gray-600 border-gray-200'
    };

    return (
        <div className="bg-white rounded-lg p-8 mb-6 border border-gray-200">
            <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`px-4 py-1.5 rounded-lg text-xs font-bold border ${typeColors[report.option] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                            {report.option}
                        </span>
                        <span className={`px-4 py-1.5 rounded-lg text-xs font-bold border ${statusColors[report.status]}`}>
                            {statusLabels[report.status]}
                        </span>
                        {report.isOwn && (
                            <span className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-xs font-bold">
                                Sua denúncia
                            </span>
                        )}
                    </div>
                    <h1 className="text-3xl font-extrabold text-green-700 mb-2">
                        {report.title}
                    </h1>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
                <h2 className="text-lg font-bold text-gray-800 mb-3">
                    Descrição
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 bg-gray-50 p-4 rounded-lg">
                    {report.description}
                </p>

                {report.img && (
                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-gray-700 mb-3">
                            Imagem
                        </h3>
                        <img 
                            src={report.img} 
                            alt="Imagem da denúncia" 
                            className="max-w-full h-auto rounded-lg border border-gray-200"
                            style={{ maxHeight: '300px' }}
                        />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex flex-col gap-2 p-4 bg-green-50 rounded-lg border border-green-100">
                        <h3 className="text-sm font-bold text-green-700">
                            Localização
                        </h3>
                        <p className="text-gray-800 font-medium">{report.location.address}</p>
                        <p className="text-sm text-gray-600">
                            {report.location.neighborhood}, {report.location.city} - {report.location.state}
                        </p>
                        {report.location.cep && (
                            <p className="text-sm text-gray-600">CEP: {report.location.cep}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h3 className="text-sm font-bold text-gray-700 mb-1">
                                Data de Criação
                            </h3>
                            <p className="text-gray-800 font-medium">{report.createdAt}</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h3 className="text-sm font-bold text-gray-700 mb-1">
                                Última Atualização
                            </h3>
                            <p className="text-gray-800 font-medium">{report.updatedAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportDetailsInfo;
