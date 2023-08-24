import TitleLine from "../title/titleLine"
import bgWaves from "Images/onlineShop/bg-waves.svg"

import mootanroLogo from "Images/onlineShop/mootanro.svg"
import mootanroWeb from "Images/onlineShop/mootanro-1.svg"

import rojaLogo from "Images/onlineShop/roja.svg"
import rojaWeb from "Images/onlineShop/roja-1.svg"

import shavajLogo from "Images/onlineShop/shavaj.svg"
import shavajWeb from "Images/onlineShop/shavaj-1.svg"

import khanoomiLogo from "Images/onlineShop/khanoomi.svg"
import khanoomiWeb from "Images/onlineShop/khanoomi-1.svg"


const OnlineShop = () => {
    const onlineShops = [
        {
            logo: mootanroLogo,
            web: mootanroWeb
        },
        {
            logo: rojaLogo,
            web: rojaWeb
        },
        {
            logo: shavajLogo,
            web: shavajWeb
        },
        {
            logo: khanoomiLogo,
            web: khanoomiWeb
        }
    ]
    return (
        <div>
            <TitleLine name="فروشگاه‌های همکار" />

            <div className="grid md:grid-cols-4 grid-cols-2  gap-4">
                {onlineShops.map(({ logo, web }) => (
                    <div className="px-4 flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center rounded-xl shadow-sm" style={{ background: `url(${bgWaves}) no-repeat`, backgroundSize: 'cover' }}>
                        <div className="bg-white rounded-lg w-20 p-4 shadow-xs h-fit mt-4">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="mt-4">
                            <img src={web} alt="web" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OnlineShop;