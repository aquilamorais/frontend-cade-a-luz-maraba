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
        <section className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                Resumo das Denúncias
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="grid grid-cols-3 gap-4">
                    <StatsCard
                        title="Total"
                        count={stats.total}
                        color="text-blue-600"
                        bgColor="bg-blue-50"
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
                        color="text-orange-600"
                        bgColor="bg-orange-50"
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
                                    paddingAngle={2}
                                    dataKey="value"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    labelLine={false}
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    formatter={(value: number) => [`${value} denúncia(s)`, '']}
                                    contentStyle={{ 
                                        backgroundColor: 'white', 
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}
                                />
                                <Legend 
                                    verticalAlign="bottom" 
                                    height={36}
                                    formatter={(value) => <span className="text-sm text-gray-600">{value}</span>}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-400">
                            Nenhuma denúncia registrada
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default StatsOverview;
