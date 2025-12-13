import { ReportDetailsActionsProps } from './Types';

function ReportDetailsActions({ onEdit, onDelete }: ReportDetailsActionsProps){
    return (
        <div className="bg-white rounded-lg p-6 h-full border border-gray-200">
            <h2 className="text-xl font-extrabold text-green-700 mb-5">
                Ações
            </h2>

            <div className="flex flex-col gap-4">
                <button
                    onClick={onEdit}
                    className="w-full py-3.5 px-4 bg-green-600 text-white font-bold rounded-lg transition-transform duration-150 active:scale-95"
                >
                    Editar Denúncia
                </button>

                <div className="border-t border-gray-200 my-2"></div>

                <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                    <p className="text-sm text-red-700 font-bold mb-2">Zona de Perigo</p>
                    <p className="text-xs text-gray-600 mb-4">
                        Esta ação não pode ser desfeita. Todos os dados serão permanentemente removidos.
                    </p>
                    <button
                        onClick={onDelete}
                        className="w-full py-3 px-4 bg-white text-red-600 font-bold text-sm border border-red-200 rounded-lg transition-transform duration-150 active:scale-95"
                    >
                        Excluir Denúncia
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReportDetailsActions;
