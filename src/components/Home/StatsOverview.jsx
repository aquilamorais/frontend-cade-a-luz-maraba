function StatsOverview({ stats }) {
    return (
        <div className="w-full bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-(--color-secondary) mb-6">Estatísticas das Denúncias</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center p-6 bg-(--color-light) rounded-lg border-2 border-green-200 hover:shadow-md transition-all">

                    <h3 className="text-3xl font-bold text-green-600 mb-1">{stats.resolved || 0}</h3>
                    <p className="text-sm font-medium text-gray-600">Resolvidas</p>
                </div>

                <div className="flex flex-col items-center justify-center p-6 bg-yellow-50 rounded-lg border-2 border-yellow-200 hover:shadow-md transition-all">

                    <h3 className="text-3xl font-bold text-yellow-600 mb-1">{stats.inProgress || 0}</h3>
                    <p className="text-sm font-medium text-gray-600">Em Andamento</p>
                </div>

                <div className="flex flex-col items-center justify-center p-6 bg-red-50 rounded-lg border-2 border-red-200 hover:shadow-md transition-all">

                    <h3 className="text-3xl font-bold text-red-600 mb-1">{stats.open || 0}</h3>
                    <p className="text-sm font-medium text-gray-600">Em Aberto</p>
                </div>
            </div>
        </div>
    );
}

export default StatsOverview;
