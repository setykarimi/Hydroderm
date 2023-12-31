import TitleLine from "../title/titleLine";

import flower from "Images/flowers/flower-line-art.svg"

import hydrodermEssenseLogo from "Images/brands/hydroderm-essense.svg"
import hydrodermEssenseImage from "Images/brands/hydroderm-essense-1.svg"

import hydrodermMaleLogo from "Images/brands/hydroderm-male.svg"
import hydrodermMaleImage from "Images/brands/hydroderm-male-1.svg"

import hydrodermSeptizoneLogo from "Images/brands/hydroderm-septizone.svg"
import hydrodermSeptizoneImage from "Images/brands/hydroderm-septizone-1.svg"

import hydrodermFemaleLogo from "Images/brands/hydroderm-female.svg"
import hydrodermFemaleImage from "Images/brands/hydroderm-female-1.svg"

import hydrodermLogo from "Images/brands/hydroderm.svg"
import hydrodermImage from "Images/brands/hydroderm-1.svg"

import hydrodermChildrenLogo from "Images/brands/hydroderm-children.svg"
import hydrodermChildrenImage from "Images/brands/hydroderm-children-1.svg"

import hydrodermCBDLogo from "Images/brands/hydroderm-CBD.svg"
import hydrodermCBDImage from "Images/brands/hydroderm-CBD-1.svg"

const Brands = () => {
    return (<div>
        <TitleLine name="بِرندها" />
        <div className="grid md:grid-cols-12 grid-cols-2 gap-4">
            <HydrodermEsssense />
            <HydrodermMale />
      
            <HydrodermSeptiZone />
            <HydrodermFemale />
            <Hydroderm />

            <HydrodermChildren />
            <HydrodermCBD />
        </div>
    </div>);
}

export default Brands;


const HydrodermEsssense = () => {
    return (
        <div className="lg:col-span-5 md:col-span-6 col-span-1 bg-gradient-to-r from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex md:justify-between justify-center items-center  shadow-xs">
            <div className="py-4 md:pr-4 flex flex-col md:items-start items-center">
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-lg shadow-sm">
                    <img src={hydrodermEssenseLogo} />
                </div>
                <span className="block font-bold text-lg mt-4 ">
                    هیدرودرم اِسنس
                </span>
                <span className="block text-gray mt-1 md:text-right md:whitespace-nowrap text-center text-xs">ایجاد طراوتی خوش در کنار آبرسانی پوست</span>
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
        <div className="lg:col-span-7 md:col-span-6 col-span-1 bg-gradient-to-r from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex md:justify-between justify-center items-center shadow-xs">
            <div className="py-4 md:pr-4 flex flex-col md:items-start items-center">
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-lg shadow-sm">
                    <img src={hydrodermMaleLogo} />
                </div>
                <span className="block font-bold text-lg mt-4 ">
                    هیدرودرم آقایان
                </span>
                <span className="block text-gray mt-1 md:text-right md:whitespace-nowrap text-center text-xs">نگاهی متمایز به نیازها و علایق بهداشتی آقایان</span>
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
        <div className="lg:col-span-7 md:col-span-6 col-span-1 bg-gradient-to-r from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex md:justify-between justify-center items-center shadow-xs">
            <div className="py-4 md:pr-4 flex flex-col md:items-start items-center">
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-lg shadow-sm">
                    <img src={hydrodermSeptizoneLogo} />
                </div>
                <span className="block font-bold text-lg mt-4 ">
                    هیدرودرم سپتی زون
                </span>
                <span className="block text-gray mt-1 md:text-right md:whitespace-nowrap text-center text-xs">سد دفاعی پوست در برابر انواع ویروس و باکتری</span>
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
        <div className="lg:col-span-5 md:col-span-6 col-span-1 bg-gradient-to-r from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex md:justify-between justify-center items-center shadow-xs relative">
            <div className="py-4 md:pr-4 flex flex-col md:items-start items-center">
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-lg shadow-sm">
                    <img src={hydrodermFemaleLogo} />
                </div>
                <span className="block font-bold text-lg mt-4 ">
                    هیدرودرم بانوان
                </span>
                <span className="block text-gray mt-1 md:text-right md:whitespace-nowrap text-center text-xs">برای سلامت بانوان در مراحل مختلف زندگی</span>
            </div>

            <div className="md:block hidden h-full absolute left-4">
                <img src={hydrodermFemaleImage} className="h-full object-container" />
            </div>
            <div className="mt-auto md:block hidden"><img src={flower} alt="flower" /></div>
        </div>
    )
}

const Hydroderm = () => {
    return (
        <div className="lg:col-span-4 md:col-span-6 col-span-1 bg-gradient-to-r from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex md:justify-between justify-center items-center shadow-xs relative">
            <div className="py-4 md:pr-4 flex flex-col md:items-start items-center">
                <div className="bg-white w-14 h-14 px-2 flex items-center justify-center rounded-lg shadow-sm">
                    <img src={hydrodermLogo} />
                </div>
                <span className="block font-bold text-lg mt-4 ">
                    هیدرودرم
                </span>
                <span className="block text-gray mt-1 md:text-right md:whitespace-nowrap text-center text-xs">
                    بالاترین استاندارد محصولات آرایشی بهداشتی
                </span>
            </div>

            <div className="mb-auto md:block hidden absolute left-4 top-0">
                <img src={hydrodermImage} className="h-28 object-contain" />
            </div>
            <div className="mt-auto md:block hidden"><img src={flower} alt="flower" /></div>
        </div>
    )
}

const HydrodermChildren = () => {
    return (
        <div className="lg:col-span-4 md:col-span-6 col-span-1 bg-gradient-to-r from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex md:justify-between justify-center items-center shadow-xs relative">
            <div className="py-4 md:pr-4 flex flex-col md:items-start items-center">
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-lg shadow-sm">
                    <img src={hydrodermChildrenLogo} />
                </div>
                <span className="block font-bold text-lg mt-4 ">
                    هیدرودرم کودکان
                </span>
                <span className="block text-gray mt-1 md:text-right md:whitespace-nowrap text-center text-xs">
                    سلامت و لبخند برای کودکان دلبندتان
                </span>
            </div>

            <div className="mb-auto md:block hidden h-full absolute left-10">
                <img src={hydrodermChildrenImage} className="h-full object-cover" />
            </div>
            <div className="mt-auto md:block hidden"><img src={flower} alt="flower" /></div>
        </div>
    )
}

const HydrodermCBD = () => {
    return (
        <div className="lg:col-span-4 md:col-span-6 col-span-1 bg-gradient-to-r from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex md:justify-between justify-center items-center shadow-xs relative">
            <div className="py-4 md:pr-4 flex flex-col md:items-start items-center">
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-lg shadow-sm">
                    <img src={hydrodermCBDLogo} />
                </div>
                <span className="block font-bold text-lg mt-4 ">
                    هیدرودرم CBD
                </span>
                <span className="block text-gray mt-1 md:text-right md:whitespace-nowrap text-center text-xs">
                    التیام بخش قوی و بدون عوارش جانبی
                </span>
            </div>

            <div className="mb-auto md:block hidden h-full absolute top-0 left-6">
                <img src={hydrodermCBDImage} className="h-full object-contain" />
            </div>
            <div className="mt-auto md:block hidden"><img src={flower} alt="flower" /></div>
        </div>
    )
}