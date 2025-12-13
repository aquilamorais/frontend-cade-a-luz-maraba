import { LoginTitleProps } from './Types';

function LoginTitle({ title, subtitle }: LoginTitleProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 text-center mb-4 sm:mb-6 px-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-green-700">
                {title}
            </h1>
            <p className="text-gray-500 text-sm sm:text-base max-w-md">{subtitle}</p>
        </div>
    );
}

export default LoginTitle;
