function ReportDetailsActions({ onEdit, onDelete }) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 h-full">
            <h2 className="text-xl font-bold text-(--color-secondary) mb-4">Ações</h2>

            <div className="flex flex-col gap-3">
                <button
                    onClick={onEdit}
                    className="w-full py-3 px-4 bg-(--color-secondary) text-white font-bold rounded-lg hover:bg-(--color-primary) focus:outline-none focus:ring-2 focus:ring-(--color-secondary) focus:ring-offset-2 transition-all"
                >
                    Editar Denúncia
                </button>

                <div className="border-t border-gray-200 my-2"></div>

                <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-xs text-red-600 font-semibold mb-2">Zona de Perigo</p>
                    <p className="text-xs text-gray-600 mb-3">
                        Esta ação não pode ser desfeita. Todos os dados serão permanentemente removidos.
                    </p>
                    <button
                        onClick={onDelete}
                        className="w-full py-2 px-4 bg-transparent text-red-600 font-bold text-sm border-2 border-red-300 rounded-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all"
                    >
                        Excluir Denúncia
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReportDetailsActions;
