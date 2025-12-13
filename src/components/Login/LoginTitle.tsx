import { LoginTitleProps } from './Types';

function LoginTitle({ title, subtitle }: LoginTitleProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-3 text-center mb-6">
            <h1 className="text-3xl font-bold text-green-700">
                {title}
            </h1>
            <p className="text-gray-500 text-base max-w-md">{subtitle}</p>
        </div>
    );
}

export default LoginTitle;
