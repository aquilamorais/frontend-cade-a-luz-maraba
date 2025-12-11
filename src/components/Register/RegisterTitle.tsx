import { RegisterTitleProps } from './Types';

function RegisterTitle({ title, subtitle }: RegisterTitleProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-3 text-center mb-6 w-full max-w-3xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                <span className="text-(--color-tertiary)">{title.split('?')[0]}?</span>
                {title.split('?')[1]}
            </h1>
            <p className="text-white text-sm md:text-base leading-relaxed opacity-90">{subtitle}</p>
        </div>
    );
}

export default RegisterTitle;
