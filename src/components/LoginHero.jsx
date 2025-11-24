function LoginHero({ imageSrc, altText = "Login" }) {
    return (
        <div className="flex flex-col justify-center items-center w-[80dvw] h-[80dvh] ml-[50px] rounded-[10px]">
            <img src={imageSrc} alt={altText} />
        </div>
    );
}

export default LoginHero;
