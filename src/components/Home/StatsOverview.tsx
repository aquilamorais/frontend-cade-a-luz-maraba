import { useState } from 'react';
import { StatsOverviewProps } from './Types';
import StatsCard from './StatsCard';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { STATUS_COLORS, CHART_TYPE_COLORS, TYPE_LABELS, FALLBACK_COLOR } from '../../utils/colors';

function StatsOverview({ stats, reports = [] }: StatsOverviewProps) {
    const [activeView, setActiveView] = useState<'status' | 'type'>('status');

    const statusChartData = [
        { name: 'Resolvidas', value: stats.resolved, color: STATUS_COLORS.resolved },
        { name: 'Em Andamento', value: stats.inProgress, color: STATUS_COLORS.inProgress },
        { name: 'Em Aberto', value: stats.open, color: STATUS_COLORS.open }
    ].filter(item => item.value > 0);

    const typeStats = reports.reduce((acc, report) => {
        const type = report.option || 'FALTA_ENERGIA';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const typeChartData = Object.entries(typeStats).map(([type, count]) => ({
        name: TYPE_LABELS[type] || type,
        value: count,
        color: CHART_TYPE_COLORS[type as keyof typeof CHART_TYPE_COLORS] || FALLBACK_COLOR
    }));

    return (
        <section className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-800">Resumo das Denúncias</h3>
                    <p className="text-sm text-gray-500">Estatísticas em tempo real</p>
                </div>
                
                <div className="flex gap-2 p-1 bg-gray-100 rounded-lg w-fit">
                    <button
                        onClick={() => setActiveView('status')}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-transform duration-150 active:scale-95 ${
                            activeView === 'status'
                                ? 'bg-green-600 text-white'
                                : 'text-gray-600'
                        }`}
                    >
                        Por Status
                    </button>
                    <button
                        onClick={() => setActiveView('type')}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-transform duration-150 active:scale-95 ${
                            activeView === 'type'
                                ? 'bg-green-600 text-white'
                                : 'text-gray-600'
                        }`}
                    >
                        Por Tipo
                    </button>
                </div>
            </div>
            
            {activeView === 'status' ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="grid grid-cols-3 gap-4 content-center">
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
                                        data={statusChartData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={50}
                                        outerRadius={80}
                                        paddingAngle={3}
                                        dataKey="value"
                                        label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                                        labelLine={false}
                                    >
                                        {statusChartData.map((entry, index) => (
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
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="grid grid-cols-2 gap-4">
                        <StatsCard
                            title="Falta de Energia"
                            count={typeStats['FALTA_ENERGIA'] || typeStats['FALTOUENERGIA'] || 0}
                            color="text-red-600"
                            bgColor="bg-red-50"
                        />
                        <StatsCard
                            title="Incêndio"
                            count={typeStats['INCENDIO'] || 0}
                            color="text-orange-600"
                            bgColor="bg-orange-50"
                        />
                        <StatsCard
                            title="Oscilação"
                            count={typeStats['OSCILACAO'] || 0}
                            color="text-yellow-600"
                            bgColor="bg-yellow-50"
                        />
                        <StatsCard
                            title="Manutenção"
                            count={typeStats['MANUTENCAO'] || 0}
                            color="text-blue-600"
                            bgColor="bg-blue-50"
                        />
                    </div>

                    <div className="h-[200px]">
                        {typeChartData.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={typeChartData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={50}
                                        outerRadius={80}
                                        paddingAngle={3}
                                        dataKey="value"
                                        label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                                        labelLine={false}
                                    >
                                        {typeChartData.map((entry, index) => (
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
            )}
        </section>
    );
}

export default StatsOverview;
