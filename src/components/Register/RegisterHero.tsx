import { RegisterHeroProps } from './Types';

function RegisterHero({ imageSrc, altText = "Mapa" }: RegisterHeroProps){
    return (
        <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
            <h2 className="text-[1.5rem] font-bold text-[--color-secondary]">Descubra onde pode está sem energia</h2>
            <img src={imageSrc} alt={altText} className="w-full max-w-[500px] rounded-[10px]" />
        </div>
    );
}

export default RegisterHero;
