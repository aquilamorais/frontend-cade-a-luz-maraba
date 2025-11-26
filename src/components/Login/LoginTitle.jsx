function LoginTitle({ title, subtitle }) {
    return (
        <div className="flex flex-col justify-center items-center gap-3 text-center mb-4">
            <h1 className="text-3xl font-bold text-(--color-secondary)">{title}</h1>
            <p className="text-gray-600 text-base max-w-md">{subtitle}</p>
        </div>
    );
}

export default LoginTitle;
