function RegisterTitle({ title, subtitle }) {
    return (
        <div className="flex flex-col justify-center items-start gap-2.5 w-full">
            <h1 className="text-[2rem] font-bold text-[--color-secondary]">
                <span className="text-[--color-primary]">{title.split('?')[0]}?</span>
                {title.split('?')[1]}
            </h1>
            <h3 className="text-base text-[--color-black]">{subtitle}</h3>
        </div>
    );
}

export default RegisterTitle;
