import smile from "Icons/smile.svg"
import headphone from "Icons/headphone.svg"
import location from "Icons/location.svg"
import email from "Icons/email.svg"
import instagram from "Icons/instagram.svg"
import linkedin from "Icons/linkedin.svg"
import telegram from "Icons/telegram.svg"
import logo from "Images/brands/hydroderm.svg"

const Footer = () => {
    const socialMedia = [
        {
            img: instagram,
            alt: "instagram"
        },
        {
            img: linkedin,
            alt: "linkedin"
        },
        {
            img: telegram,
            alt: "telegram"
        }
    ]
    return (
        <footer>
            <div className="bg-blue p-6 mt-16 rounded-xl flex lg:flex-row flex-col gap-4 lg:justify-between justify-center items-center">
                <div>
                    <div className="flex lg:justify-start justify-center items-center gap-2">
                        <div>
                            <h6 className="text-xl font-bold text-white lg:text-right text-center">با ما حرف بزنید؛ خوشحال می‌شویم
                            </h6>
                        </div>
                        <img className="lg:block hidden" src={smile} alt="smile" />
                    </div>
                    <span className="text-[#F5F5F5] text-sm block mt-4 lg:text-right text-center">مشاوران ما در تیم پشتیبانی هیدرودرم در روزهای کاری از ساعت ۹ الی ۱۷ آماده پاسخگویی به سوالات شما هستند.</span>
                </div>
                <button className="bg-blue-light text-white flex items-center gap-2 text-sm rounded-lg py-3 px-6 shadow-md h-fit">
                    مشاوره تخصصی رایگان
                    <img src={headphone} alt="headphone" />
                </button>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-12">
                <div className="lg:col-span-2">
                    <img src={logo} alt="logo" />
                    <p className="text-gray text-justify lg:text-base text-sm">داستان هیدرودم در سال ۱۳۸۶ زمانی آغاز شد که محققین ما متوجه شدند بسیاری از مشکلات پوست و مو در یک موضوع مشترک هستند: آبرسانی و حفظ و بازسازی سد محافظ طبیعی پوست، که بر همین اساس طیف گسترده ای از محصولات بهداشتی در زمینه پوست، مو، مراقبت در برابر آفتاب، محافظت از ناخن، مراقبت از لب، اسپری های دئودورانت آنتی پرسپیرانت و محصولات بهداشت شخصی با ویژگی آبرسانی که در بالاترین سطح استاندارده ی جهانی و با بهترین مواد اولیه و فرمولاسیون را تولید و وارد بازار ایران، خاورمیانه و دیگر کشورهای منطقه کرد. هم‌اکنون بیش از ۱۷۰ قلم محصول در برند هیدرودرم با بهترین مواد اولیه و در بالاترین سطح استانداردها تولید و روانه بازار ایران و کشورهای منطقه می‌گردد.
                    </p>
                </div>
                <div>
                    <div className="flex gap-2">
                        <img src={location} alt="location" />
                        <span className="text-gray lg:text-base text-sm">تهران، بلوار نلسون ماندلا، خیابان عاطفی شرقی، پلاک 33
                        </span>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <img src={email} alt="email" />
                        <span className="text-gray lg:text-base text-sm">info@hydroderm.co
                        </span>
                    </div>
                    <div className="flex gap-2 bg-white items-center justify-between p-4 rounded-xl mt-4 shadow-sm">
                        <span className="block text-blue lg:text-base text-sm">شبکه‌های اجتماعی</span>
                        <div className="flex gap-4">
                            {socialMedia.map(({ img, alt }) => (
                                <button className="p-2 bg-blue-lightest flex items-center justify-center rounded-lg">
                                    <img src={img} alt={AudioWorkletNode} />
                                </button>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <div className=" mt-12">
           <span className="block bg-gradient-to-r from-transparent from-0% via-[#D3DCEE] via-50% to-transparent to-100% h-[2px] w-[100%]"></span>
           <span className="text-xs block mt-4 mb-8 text-center">تمامی حقوق مادی و معنوی این وبسایت متعلق به شرکت داروسازی پارس حیان است.
</span>
            </div>
        </footer>
    );
}

export default Footer;