import { ProfileTitleProps } from './Types';

function ProfileTitle({ title, subtitle }: ProfileTitleProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-4 text-center w-full max-w-md px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                {title}
            </h1>
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">{subtitle}</p>
        </div>
    );
}

export default ProfileTitle;
