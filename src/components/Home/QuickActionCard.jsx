function QuickActionCard({ title, description, icon, onClick, bgColor, hoverColor, textColor }) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center justify-center p-8 ${bgColor} ${hoverColor} rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 w-full`}
        >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className={`text-xl font-bold ${textColor} mb-2`}>{title}</h3>
            <p className="text-sm text-gray-600 text-center">{description}</p>
        </button>
    );
}

export default QuickActionCard;
