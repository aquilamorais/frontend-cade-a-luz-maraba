import { RegisterTitleProps } from './Types';

function RegisterTitle({ title, subtitle }: RegisterTitleProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-4 text-center mb-6 w-full max-w-3xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                {title}
            </h1>
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">{subtitle}</p>
        </div>
    );
}

export default RegisterTitle;
