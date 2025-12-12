import { EditReportTitleProps } from './Types';

function EditReportTitle({ title, subtitle }: EditReportTitleProps) {
    return (
        <div className="flex flex-col items-center text-center gap-2">
            <h1 className="text-3xl font-bold text-white">
                {title}
            </h1>
            <p className="text-white/80 text-lg">
                {subtitle}
            </p>
        </div>
    );
}

export default EditReportTitle;
