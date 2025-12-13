import { DeleteConfirmModalProps } from './Types';

function DeleteConfirmModal({ isOpen, userName, onClose, onConfirm }: DeleteConfirmModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-sm p-8">
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 text-2xl font-bold">!</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                        Confirmar Exclusão
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Tem certeza que deseja excluir o usuário <span className="font-bold text-gray-700">{userName}</span>? 
                        Esta ação não pode ser desfeita.
                    </p>
                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-lg"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={onConfirm}
                            className="flex-1 py-3 px-4 bg-red-600 text-white font-semibold rounded-lg"
                        >
                            Excluir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteConfirmModal;
