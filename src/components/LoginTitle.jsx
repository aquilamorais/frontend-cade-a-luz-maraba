function LoginTitle({ title, subtitle }) {
    return (
        <div className="flex flex-col justify-center items-start gap-2.5">
            <h1 className="text-[2rem] font-bold text-[#02644f]">{title}</h1>
            <h3 className="text-wrap">{subtitle}</h3>
        </div>
    );
}

export default LoginTitle;
