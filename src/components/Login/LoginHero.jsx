function LoginHero({ imageSrc, altText = "Login" }) {
    return (
        <div className="flex flex-col justify-center items-center w-[40dvw] h-[40dvh] rounded-[10px]">
            <img src={imageSrc} alt={altText} />
        </div>
    );
}

export default LoginHero;
