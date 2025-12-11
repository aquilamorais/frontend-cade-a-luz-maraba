import { ProfileTitleProps } from './Types';

function ProfileTitle({ title, subtitle }: ProfileTitleProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-3 text-center w-full max-w-md px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {title}
            </h1>
            <p className="text-white text-sm md:text-base leading-relaxed opacity-90">{subtitle}</p>
        </div>
    );
}

export default ProfileTitle;
