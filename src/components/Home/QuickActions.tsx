import { QuickActionsProps } from './Types';

function QuickActions({ onNewReport, onViewProfile }: QuickActionsProps){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
                onClick={onNewReport}
                className="flex flex-col items-center justify-center p-8 bg-green-600 rounded-lg transition-all transform hover:scale-95 active:scale-95"
            >
                <h3 className="text-xl font-bold text-white mb-2">Nova Denúncia</h3>
                <p className="text-sm text-green-100 text-center">Registre uma nova falta de energia</p>
            </button>

            <button
                onClick={onViewProfile}
                className="flex flex-col items-center justify-center p-8 bg-white rounded-lg border border-gray-200 transition-all transform hover:scale-95 active:scale-95"
            >
                <h3 className="text-xl font-bold text-green-700 mb-2">Meu Perfil</h3>
                <p className="text-sm text-gray-500 text-center">Gerencie suas informações pessoais</p>
            </button>
        </div>
    );
}

export default QuickActions;
