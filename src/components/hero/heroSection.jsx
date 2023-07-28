
import hero from "Images/hero/hero-img.png"
import heroBlur from "Images/hero/hero-img-blur.png"
import heroMobile from "Images/hero/hero-img-mobile.png"

const HeroSection = () => {
    return (
        <div>
            <div className="md:mt-16 my-8 mb-8 flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl text-center mb-6"><span className="text-blue">هیدورودرم،</span> راز جوانی و شادابی پوست</h1>
                <button className="border border-blue text-blue py-2 px-4 rounded-lg text-xs mx-auto font-bold">مشاهده همه محصولات</button>
            </div>
                <div className="relative w-ful flex justify-center items-center">
                    <picture className="relative z-10 w-full">
                        <source srcset={hero} media="(min-width: 600px)" />
                        <img src={heroMobile} alt="hero" className="object-cover w-full"/>
                    </picture>
                    <picture className="absolute -top-10 left-0">
                        <source srcset={heroBlur} media="(min-width: 600px)" />
                        <img src="" />
                    </picture>
                </div>
        </div>
    );
}

export default HeroSection;