function RegisterTitle({ title, subtitle }) {
    return (
        <div className="flex flex-col justify-center items-center gap-3 text-center mb-4">
            <h1 className="text-3xl font-bold text-(--color-secondary)">
                <span className="text-(--color-primary)">{title.split('?')[0]}?</span>
                {title.split('?')[1]}
            </h1>
            <p className="text-gray-600 text-base max-w-md text-[10px]">{subtitle}</p>
        </div>
    );
}

export default RegisterTitle;
