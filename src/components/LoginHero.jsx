function LoginHero({ imageSrc, altText = "Login" }) {
    return (
        <div className="flex flex-col justify-center items-center w-[40%] h-[40%] ml-[50px] rounded-[10px]">
            <img style={{ width: '40dvw', height: '80dvh' }} src={imageSrc} alt={altText} />
        </div>
    );
}

export default LoginHero;
