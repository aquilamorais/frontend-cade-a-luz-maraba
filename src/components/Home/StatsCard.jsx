function StatsCard({ title, count, icon, color, bgColor }) {
    return (
        <div className={`flex flex-col items-center justify-center p-6 ${bgColor} rounded-xl shadow-sm hover:shadow-md transition-all`}>
            <div className={`text-4xl mb-2`}>{icon}</div>
            <h3 className={`text-3xl font-bold ${color} mb-1`}>{count}</h3>
            <p className="text-sm font-medium text-gray-600 text-center">{title}</p>
        </div>
    );
}

export default StatsCard;
