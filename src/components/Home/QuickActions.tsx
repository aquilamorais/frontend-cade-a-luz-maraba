import { QuickActionsProps } from './Types';

function QuickActions({ onNewReport, onViewProfile }: QuickActionsProps): JSX.Element {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
                onClick={onNewReport}
                className="flex flex-col items-center justify-center p-8 bg-linear-to-br bg-(--color-secondary) hover:bg-(--color-tertiary) rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
            >
                <h3 className="text-xl font-bold text-white mb-2">Nova Denúncia</h3>
                <p className="text-sm text-gray-200 text-center">Registre uma nova falta de energia</p>
            </button>

            <button
                onClick={onViewProfile}
                className="flex flex-col items-center justify-center p-8 bg-white hover:bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 border-2 border-(--color-secondary)"
            >
                <h3 className="text-xl font-bold text-(--color-secondary) mb-2">Meu Perfil</h3>
                <p className="text-sm text-gray-600 text-center">Gerencie suas informações pessoais</p>
            </button>
        </div>
    );
}

export default QuickActions;
