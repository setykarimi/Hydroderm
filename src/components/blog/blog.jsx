import TitleLine from "../title/titleLine";

import hydrodermLogo from "Images/brands/hydroderm.svg"
import hydrodermBg from "Images/blog/hydroderm.png"

import hydrodermChildrenLogo from "Images/brands/hydroderm-children.svg"
import hydrodermChildrenBg from "Images/blog/hydroderm-children.png"

import hydrodermCBDLogo from "Images/brands/hydroderm-CBD.svg"
import hydrodermCBDbg from "Images/blog/hydroderm-CBD.png"


const Blog = () => {
    const blogs = [
        {
            logo: hydrodermLogo,
            bg: hydrodermBg,
            date: "۳۰ تیر ۱۴۰۲",
            title: "فوم شستشوی صورت و کاربرد‌های آن"
        },
        {
            logo: hydrodermChildrenLogo,
            bg: hydrodermChildrenBg,
            date: "۲۰ تیر ۱۴۰۲",
            title: "انواع بیماری‌های پوستی در کودکان"
        },
        {
            logo: hydrodermCBDLogo,
            bg: hydrodermCBDbg,
            date: "۲۸ مرداد ۱۴۰۲",
            title: "روغن CBD چیست و چه خواصی دارد؟"
        }
    ]


    return (
        <div>
            <TitleLine name="آخرین مطالب بلاگ" />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {blogs.map(({ logo, bg, date, title }) => (
                    <div className="rounded-xl flex flex-col gap-12 shadow-sm" style={{ background: `url(${bg}) no-repeat`, backgroundSize: 'cover' }}>
                        <div className="bg-white p-2 w-16 h-16 rounded-tr-xl rounded-bl-xl flex justify-center items-center">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="flex justify-between p-4 mt-auto backdrop-blur-md items-center rounded-b-xl" style={{background: 'rgba(49, 86, 164, 0.40)'}}>
                            <div>
                                <span className="block text-white text-xs">{date}</span>
                                <span className="block text-white mt-2 xl:text-base text-sm">{title}</span>
                            </div>
                            <button className="bg-blue text-white py-2 px-4 rounded-lg font-bold text-sm h-fit">مطالعه</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;