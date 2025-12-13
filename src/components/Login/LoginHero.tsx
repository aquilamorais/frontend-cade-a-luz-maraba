import { LoginHeroProps } from './Types';

function LoginHero({ imageSrc, altText = "Login" }: LoginHeroProps){
    return (
        <div className="hidden lg:flex flex-col justify-center items-center w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-[10px]">
            <img src={imageSrc} alt={altText} className="w-full h-auto object-contain" />
        </div>
    );
}

export default LoginHero;
