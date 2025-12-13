import { CreateReportTitleProps } from './Types';

function CreateReportTitle({ title, subtitle }: CreateReportTitleProps) {
    return (
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
            <h1 className="text-4xl font-extrabold text-white">
                {title}
            </h1>
            <p className="text-lg text-white/90 font-medium">
                {subtitle}
            </p>
        </div>
    );
}

export default CreateReportTitle;
