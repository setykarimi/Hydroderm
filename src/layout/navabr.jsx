import headphone from "Icons/headphone.svg"
import menu from "Icons/menu.svg"
import search from "Icons/search.svg"
import logo from "Images/logo.svg"
import { useState } from "react"

const Navbar = ({showMenu, setShowMenu}) => {
    const navItem = [
        "محصولات", "برند‌ها", "ارتباط با ما", "بلاگ"
    ]

    const showMenuHandler = () => {
        setShowMenu(!showMenu)
    }
    return (
        <nav className="md:flex grid grid-cols-3 justify-between items-center py-4">
            <button className="md:hidden block py-2 md:px-4 px-2" onClick={showMenuHandler}>
                <img src={menu} alt="search" />
            </button>
            <div className="flex items-center md:justify-start justify-center gap-12">
                <img src={logo} alt="logo" />
                <div className={`flex md:flex-row flex-col md:static absolute md:bg-transparent bg-white top-0 md:p-0 p-5 md:w-fit w-2/3 ${showMenu ? "right-0" : "-right-[50rem]"} md:h-fit h-full z-50 gap-8 transition-all`}>
                    {navItem.map((name) => <span className="md:text-sm text-md text-gray-700">{name}</span>)}
                </div>
            </div>
            <div className="flex gap-4 justify-end">
                <button className=" bg-blue py-2 shadow-md md:px-4 px-2 md:w-auto md:h-auto w-8 h-8 rounded-lg">
                    <img src={search} alt="search" />
                </button>
                <button className=" bg-blue py-2 shadow-md md:px-4 px-2 md:w-auto md:h-auto w-8 h-8 rounded-lg flex gap-2 items-center">
                    <span className="text-sm text-white font-bold md:block hidden">مشاوره تخصصی</span>
                    <img src={headphone} alt="search" />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;