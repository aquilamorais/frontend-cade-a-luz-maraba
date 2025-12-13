import { EditReportTitleProps } from './Types';

function EditReportTitle({ title, subtitle }: EditReportTitleProps) {
    return (
        <div className="flex flex-col items-center text-center gap-4">
            <h1 className="text-4xl font-extrabold text-white">
                {title}
            </h1>
            <p className="text-white/90 text-lg font-medium">
                {subtitle}
            </p>
        </div>
    );
}

export default EditReportTitle;
