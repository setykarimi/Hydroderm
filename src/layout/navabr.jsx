import logo from "Images/logo.svg"
import search from "Icons/search.svg"
import headphone from "Icons/headphone.svg"
import menu from "Icons/menu.svg"

const Navbar = () => {
    const navItem = [
        "محصولات", "برند‌ها", "ارتباط با ما", "بلاگ"
    ]
    return (
        <nav className="md:flex grid grid-cols-3 justify-between items-center py-4">
        <button className="md:hidden block py-2 md:px-4 px-2 ">
                    <img src={menu} alt="search" />
                </button>
            <div className="flex items-center md:justify-start justify-center gap-12"><img src={logo} alt="logo" />
                <div className="md:flex hidden gap-8">
                    {navItem.map((name) => <span className="text-sm text-gray-700">{name}</span>)}
                </div>
            </div>
            <div className="flex gap-4 justify-end">
                <button className=" bg-blue py-2 md:px-4 px-2 md:w-auto md:h-auto w-8 h-8 rounded-lg">
                    <img src={search} alt="search" />
                </button>
                <button className=" bg-blue py-2 md:px-4 px-2 md:w-auto md:h-auto w-8 h-8 rounded-lg flex gap-2 items-center">
                    <span className="text-sm text-white font-bold md:block hidden">مشاوره تخصصی</span>
                    <img src={headphone} alt="search" />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;