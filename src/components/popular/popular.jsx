import TitleLine from "../title/titleLine";

import deoderant from "Images/popular/deoderant.png"
import abresan from "Images/popular/abresan.png"
import bodySplash from "Images/popular/body-splash.png"

const Popular = () => {
    return (
        <div>
            <TitleLine name="محبوب‌ترین‌ها" />
            <div className="grid lg:grid-cols-12 justify-center items-end lg:gap-8 gap-4">
                <Deoderant />
                <MaskeAbresan />
                </div>
                <BodySplash />
            
        </div>
    );
}

export default Popular;

const Deoderant = () => {
    const items = [
        "اسپری ضد تعریق بدن", "کنترل‌کننده باکتری‌های مولد بو", "کاهش‌دهنده حساست ناحیه زیر بفل"
    ]
    return (
        <div className="bg-gradient-to-l from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex justify-between items-center shadow-xs lg:col-span-6 ">
            <div className="py-4 pr-4 flex flex-col md:items-start items-center">

                <span className="block font-bold text-xl ">
                    اسپری دئودرانت
                </span>
                <ul className="mt-2 list-disc mr-4">
                    {items.map((item) => <li className="text-gray md:text-base text-xs">{item}</li>)}
                </ul>
                <button className="mt-4 text-xs font-bold bg-blue text-white shadow-md py-2 px-4 rounded-lg">مشاهده همه محصولات</button>
            </div>
            <div className="md:w-fit w-1/2">
                <img src={deoderant} alt="img" />
            </div>
        </div>
    )
}

const MaskeAbresan = () => {
    const items = [
        "جوان کننده و احیا‌کننده پوست", "تغذیه‌کننده و شفاف‌کننده پوست", "آب‌رسان و التیام بخش پوست", "ضد چروک و روشن‌کننده پوست"
    ]
    return (
        <div className="bg-gradient-to-l from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex justify-between items-center shadow-xs lg:col-span-6">
            <div className="py-4 pr-4 flex flex-col md:items-start items-center">

                <span className="block font-bold text-xl ">
                    ماسک آب‌رسان صورت
                </span>
                <ul className="mt-2 list-disc mr-4">
                    {items.map((item) => <li className="text-gray md:text-base text-xs">{item}</li>)}
                </ul>
                <button className="mt-4 text-xs font-bold bg-blue text-white shadow-md py-2 px-4 rounded-lg">مشاهده همه محصولات</button>
            </div>
            <div className="md:w-fit w-1/2">
                <img src={abresan} alt="img" />
            </div>
        </div>
    )
}

const BodySplash = () => {
    const items = [
        "اسپرس خوشبو‌کننده بدن", "با ماندگاری و پخش بوی بالا", "ضد حساسیت و آب‌رسان بدن"
    ]
    return (
        <div className="bg-gradient-to-l from-[#E9EEF7] from-0% to-[#D3DCEE] to-100% rounded-xl flex justify-between items-center shadow-xs lg:w-10/12 w-full mx-auto lg:mt-8 mt-4">
            <div className="py-4 pr-4 flex flex-col md:items-start items-center">

                <span className="block font-bold text-xl ">
                    بادی اسپلش
                </span>
                <ul className="mt-2 list-disc mr-4">
                    {items.map((item) => <li className="text-gray md:text-base text-xs">{item}</li>)}
                </ul>
                <button className="mt-4 text-xs font-bold bg-blue text-white shadow-md py-2 px-4 rounded-lg">مشاهده همه محصولات</button>
            </div>
            <div className="md:w-fit w-1/2">
                <img src={bodySplash} alt="img" />
            </div>
        </div>
    )
}