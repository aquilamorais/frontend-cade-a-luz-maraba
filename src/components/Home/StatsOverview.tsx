import { StatsOverviewProps } from './Types';
import StatsCard from './StatsCard';

function StatsOverview({ stats }: StatsOverviewProps): JSX.Element {
    return (
        <section className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                📈 Resumo das Denúncias
            </h3>
            <div className="grid grid-cols-3 gap-4">
                <StatsCard
                    title="Total"
                    count={stats.total}
                    icon="📋"
                    color="text-blue-600"
                    bgColor="bg-blue-50"
                />
                <StatsCard
                    title="Resolvidas"
                    count={stats.resolved}
                    icon="✅"
                    color="text-green-600"
                    bgColor="bg-green-50"
                />
                <StatsCard
                    title="Pendentes"
                    count={stats.pending}
                    icon="⏳"
                    color="text-orange-600"
                    bgColor="bg-orange-50"
                />
            </div>
        </section>
    );
}

export default StatsOverview;
