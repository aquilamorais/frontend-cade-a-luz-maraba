import { StatsOverviewProps } from './Types';
import StatsCard from './StatsCard';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = {
    resolved: '#10B981',
    inProgress: '#F59E0B',
    open: '#EF4444'
};

function StatsOverview({ stats }: StatsOverviewProps) {
    const chartData = [
        { name: 'Resolvidas', value: stats.resolved, color: COLORS.resolved },
        { name: 'Em Andamento', value: stats.inProgress, color: COLORS.inProgress },
        { name: 'Em Aberto', value: stats.open, color: COLORS.open }
    ].filter(item => item.value > 0);

    return (
        <section className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800">Resumo das Denúncias</h3>
                <p className="text-sm text-gray-500">Estatísticas em tempo real</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="grid grid-cols-3 gap-4">
                    <StatsCard
                        title="Total"
                        count={stats.total}
                        color="text-green-600"
                        bgColor="bg-green-50"
                    />
                    <StatsCard
                        title="Resolvidas"
                        count={stats.resolved}
                        color="text-green-600"
                        bgColor="bg-green-50"
                    />
                    <StatsCard
                        title="Pendentes"
                        count={stats.pending}
                        color="text-amber-600"
                        bgColor="bg-amber-50"
                    />
                </div>

                <div className="h-[200px]">
                    {stats.total > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={80}
                                    paddingAngle={3}
                                    dataKey="value"
                                    label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                                    labelLine={false}
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={2} stroke="#fff" />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    formatter={(value: number) => [`${value} denúncia(s)`, '']}
                                    contentStyle={{ 
                                        backgroundColor: 'white', 
                                        border: 'none',
                                        borderRadius: '12px',
                                        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)'
                                    }}
                                />
                                <Legend 
                                    verticalAlign="bottom" 
                                    height={36}
                                    formatter={(value) => <span className="text-sm text-gray-600 font-medium">{value}</span>}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-2">

                            <span>Nenhuma denúncia registrada</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default StatsOverview;
