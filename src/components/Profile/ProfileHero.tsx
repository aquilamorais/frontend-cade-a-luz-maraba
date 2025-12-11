import { ProfileHeroProps } from './Types';

function ProfileHero({ imageSrc, altText }: ProfileHeroProps){
    return (
        <div className="hidden lg:block relative h-full">
            <img
                src={imageSrc}
                alt={altText}
                className="h-[80%] max-h-[600px] w-auto object-contain object-bottom pointer-events-none xl:h-[85%] xl:max-h-[700px] 2xl:h-[90%] 2xl:max-h-[800px]"
            />
        </div>
    );
}

export default ProfileHero;
