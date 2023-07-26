import TitleLine from "../title/titleLine";

import flower from "Images/flowers/flower-line-art.svg"

import hydrodermEssenseLogo from "Images/brands/hydroderm-essense.svg"
import hydrodermEssenseImage from "Images/brands/hydroderm-essense.png"

import hydrodermMaleLogo from "Images/brands/hydroderm-male.svg"
import hydrodermMaleImage from "Images/brands/hydroderm-male.png"

import hydrodermSeptizoneLogo from "Images/brands/hydroderm-septizone.svg"
import hydrodermSeptizoneImage from "Images/brands/hydroderm-septizone.png"

import hydrodermFemaleLogo from "Images/brands/hydroderm-female.svg"
import hydrodermFemaleImage from "Images/brands/hydroderm-female.png"

import hydrodermLogo from "Images/brands/hydroderm.svg"
import hydrodermImage from "Images/brands/hydroderm.png"

import hydrodermChildrenLogo from "Images/brands/hydroderm-children.svg"
import hydrodermChildrenImage from "Images/brands/hydroderm-children.png"

import hydrodermCBDLogo from "Images/brands/hydroderm-CBD.svg"
import hydrodermCBDImage from "Images/brands/hydroderm-CBD.png"

const Brands = () => {
    return (<div>
        <TitleLine name="بِرندها" />
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
            <HydrodermEsssense />
            <HydrodermMale />
            <HydrodermSeptiZone />
            <HydrodermFemale />
            <Hydroderm />
            <HydrodermChildren />
            <HydrodermCBD/>
        </div>
    </div>);
}

export default Brands;


const HydrodermEsssense = () => {
    return (
        <div className="bg-gradient-to-r from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex justify-between items-center  shadow-xs">
            <div className="py-4 pr-4 flex flex-col md:items-start items-center">
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-lg shadow-sm">
                    <img src={hydrodermEssenseLogo} />
                </div>
                <span className="block font-bold text-xl mt-4 ">
                    هیدرودرم اِسنس
                </span>
                <span className="block text-gray mt-1 md:text-right text-center md:text-base text-xs">ایجاد طراوتی خوش در کنار آبرسانی پوست</span>
            </div>

            <div className="mt-auto md:block hidden">
                <img src={hydrodermEssenseImage} />
            </div>
            <div className="mt-auto md:block hidden"><img src={flower} alt="flower" /></div>
        </div>
    )
}

const HydrodermMale = () => {
    return (
        <div className="bg-gradient-to-r from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex justify-between items-center lg:col-span-2 col-span-1 shadow-xs">
            <div className="py-4 pr-4 flex flex-col md:items-start items-center">
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-lg shadow-sm">
                    <img src={hydrodermMaleLogo} />
                </div>
                <span className="block font-bold text-xl mt-4 ">
                    هیدرودرم آقایان
                </span>
                <span className="block text-gray mt-1 md:text-right text-center md:text-base text-xs">نگاهی متمایز به نیازها و علایق بهداشتی آقایان</span>
            </div>

            <div className="mt-auto md:block hidden">
                <img src={hydrodermMaleImage} alt="product" />
            </div>
            <div className="mt-auto md:block hidden"><img src={flower} alt="flower" /></div>
        </div>
    )
}

const HydrodermSeptiZone = () => {
    return (
        <div className="bg-gradient-to-r from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex justify-between items-center lg:col-span-2  shadow-xs">
            <div className="py-4 pr-4 flex flex-col md:items-start items-center">
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-lg shadow-sm">
                    <img src={hydrodermSeptizoneLogo} />
                </div>
                <span className="block font-bold text-xl mt-4 ">
                    هیدرودرم سپتی زون
                </span>
                <span className="block text-gray mt-1 md:text-right text-center md:text-base text-xs">سد دفاعی پوست در برابر انواع ویروس و باکتری</span>
            </div>

            <div className="mt-auto md:block hidden">
                <img src={hydrodermSeptizoneImage} alt="product" />
            </div>
            <div className="mt-auto md:block hidden"><img src={flower} alt="flower" /></div>
        </div>
    )
}

const HydrodermFemale = () => {
    return (
        <div className="bg-gradient-to-r from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex justify-between items-center shadow-xs">
            <div className="py-4 pr-4 flex flex-col md:items-start items-center">
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-lg shadow-sm">
                    <img src={hydrodermFemaleLogo} />
                </div>
                <span className="block font-bold text-xl mt-4 ">
                    هیدرودرم بانوان
                </span>
                <span className="block text-gray mt-1 md:text-right text-center md:text-base text-xs">برای سلامت بانوان در مراحل مختلف زندگی</span>
            </div>

            <div className=" md:block hidden h-full">
                <img src={hydrodermFemaleImage} className="h-full object-cover" />
            </div>
            <div className="mt-auto md:block hidden"><img src={flower} alt="flower" /></div>
        </div>
    )
}

const Hydroderm = () => {
    return (
        <div className="bg-gradient-to-r from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex justify-between items-center  shadow-xs">
            <div className="py-4 pr-4 flex flex-col md:items-start items-center">
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-lg shadow-sm">
                    <img src={hydrodermLogo} />
                </div>
                <span className="block font-bold text-xl mt-4 ">
                    هیدرودرم
                </span>
                <span className="block text-gray mt-1 md:text-right text-center md:text-base text-xs">
                    بالاترین استاندارد محصولات آرایشی بهداشتی
                </span>
            </div>

            <div className="mb-auto md:block hidden ">
                <img src={hydrodermImage} className="h-28 object-contain" />
            </div>
            <div className="mt-auto md:block hidden"><img src={flower} alt="flower" /></div>
        </div>
    )
}

const HydrodermChildren = () => {
    return (
        <div className="bg-gradient-to-r from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex justify-between items-center  shadow-xs">
            <div className="py-4 pr-4 flex flex-col md:items-start items-center">
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-lg shadow-sm">
                    <img src={hydrodermChildrenLogo} />
                </div>
                <span className="block font-bold text-xl mt-4 ">
                    هیدرودرم کودکان
                </span>
                <span className="block text-gray mt-1 md:text-right text-center md:text-base text-xs">
                    سلامت و لبخند برای کودکان دلبندتان
                </span>
            </div>

            <div className="mb-auto md:block hidden ">
                <img src={hydrodermChildrenImage} className="h-28 object-contain" />
            </div>
            <div className="mt-auto md:block hidden"><img src={flower} alt="flower" /></div>
        </div>
    )
}

const HydrodermCBD = () => {
    return (
        <div className="bg-gradient-to-r from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex justify-between items-center  shadow-xs">
            <div className="py-4 pr-4 flex flex-col md:items-start items-center">
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-lg shadow-sm">
                    <img src={hydrodermCBDLogo} />
                </div>
                <span className="block font-bold text-xl mt-4 ">
                    هیدرودرم CBD
                </span>
                <span className="block text-gray mt-1 md:text-right text-center md:text-base text-xs">
التیام بخش قوی و بدون عوارش جانبی
                </span>
            </div>

            <div className="mb-auto md:block hidden ">
                <img src={hydrodermCBDImage} className="h-28 object-contain" />
            </div>
            <div className="mt-auto md:block hidden"><img src={flower} alt="flower" /></div>
        </div>
    )
}