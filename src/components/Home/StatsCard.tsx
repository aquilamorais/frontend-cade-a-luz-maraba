import { StatsCardProps } from './Types';

function StatsCard({ title, count, icon, color, bgColor }: StatsCardProps): JSX.Element {
    return (
        <div className={`${bgColor} rounded-xl p-4 text-center transition-transform hover:scale-105`}>
            <div className={`text-3xl mb-2 ${color}`}>{icon}</div>
            <p className={`text-2xl font-bold ${color}`}>{count}</p>
            <p className={`text-sm ${color} opacity-80`}>{title}</p>
        </div>
    );
}

export default StatsCard;
