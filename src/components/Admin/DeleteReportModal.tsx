interface DeleteReportModalProps {
    isOpen: boolean;
    reportTitle: string;
    onClose: () => void;
    onConfirm: () => void;
}

function DeleteReportModal({ isOpen, reportTitle, onClose, onConfirm }: DeleteReportModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-sm mx-4 p-6">
                <div className="text-center">
                    <div className="text-5xl mb-4">⚠️</div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                        Confirmar Exclusão
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Tem certeza que deseja excluir a denúncia <strong>"{reportTitle}"</strong>? 
                        Esta ação não pode ser desfeita.
                    </p>
                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 py-2 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={onConfirm}
                            className="flex-1 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Excluir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteReportModal;
