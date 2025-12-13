import { StatsCardProps } from './Types';

function StatsCard({ title, count, color, bgColor }: StatsCardProps){
    return (
        <div className={`${bgColor} rounded-lg p-5 text-center border border-gray-200 flex justify-center flex-col items-center`}>
            <p className={`text-3xl font-bold ${color} mb-1`}>{count}</p>
            <p className={`text-sm font-medium ${color} opacity-70`}>{title}</p>
        </div>
    );
}

export default StatsCard;
