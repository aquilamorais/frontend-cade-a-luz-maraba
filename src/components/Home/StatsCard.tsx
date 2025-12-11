import { StatsCardProps } from './Types';

function StatsCard({ title, count, color, bgColor }: StatsCardProps){
    return (
        <div className={`${bgColor} rounded-xl p-4 text-center transition-transform hover:scale-105`}>
            <p className={`text-2xl font-bold ${color}`}>{count}</p>
            <p className={`text-sm ${color} opacity-80`}>{title}</p>
        </div>
    );
}

export default StatsCard;
