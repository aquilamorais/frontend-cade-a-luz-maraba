import { QuickActionCardProps } from './Types';

function QuickActionCard({ title, description, icon, onClick, bgColor, hoverColor, textColor }: QuickActionCardProps){
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center justify-center p-8 ${bgColor} rounded-lg border border-gray-200 w-full`}
        >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className={`text-xl font-bold ${textColor} mb-2`}>{title}</h3>
            <p className="text-sm text-gray-600 text-center">{description}</p>
        </button>
    );
}

export default QuickActionCard;
