import hero1 from "Images/hero/hero-img-01.png"
import hero2 from "Images/hero/hero-img-02.png"
import hero3 from "Images/hero/hero-img-03.png"
import hero4 from "Images/hero/hero-img-04.png"
import hero5 from "Images/hero/hero-img-05.png"
import hero6 from "Images/hero/hero-img-06.png"
import hero7 from "Images/hero/hero-img-07.png"

const HeroSection = () => {
    return (
        <div>
            <div className="md:mt-16 my-8 mb-8 flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl text-center mb-6"><span className="text-blue">هیدورودرم،</span> راز جوانی و شادابی پوست</h1>
                <button className="border border-blue text-blue py-2 px-4 rounded-lg text-xs mx-auto font-bold">مشاهده همه محصولات</button>
            </div>
            <div className="flex md:gap-4 gap-2 justify-center items-center">
                <div className="lg:block hidden">
                    <img src={hero1} alt="image" />
                </div>
                <div className="flex flex-col md:gap-4 gap-2">
                    <img src={hero2} alt="image" />
                    <img src={hero3} alt="image" />
                </div>
                <div>
                    <img src={hero4} alt="image" />
                </div>
                <div className="flex flex-col md:gap-4 gap-2">
                    <img src={hero5} alt="image" />
                    <img src={hero6} alt="image" />
                </div>
                <div className="lg:block hidden">
                    <img src={hero7} alt="image" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;