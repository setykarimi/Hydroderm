import special from 'Images/popular/special.svg'
import specialMobile from 'Images/popular/special-mobile.svg'
import flower2 from 'Images/flowers/flower-line-art-2.svg'
import flower1 from 'Images/flowers/flower-line-art-3.svg'

const SpecialProduct = () => {
    return (
        <div className="relative bg-blue md:py-12 py-6 mt-16 rounded-xl flex flex-col justify-center items-center text-white">
            
            <picture className="relative z-10 w-full">
                        <source srcset={special} media="(min-width: 600px)" />
                        <img src={specialMobile} alt="special" className="object-cover w-full"/>
                    </picture>
           
            <h3 className='md:text-4xl text-2xl font-bold md:-mt-10'>کرم وازلین قوطی فلزی!</h3>
            <span className='block mt-4 font-light text-center px-4'>همراه با امگا۳ مناسب برای رفع خشکی، زبری و ترک‌های پوستی</span>
            <button className='bg-blue-light mt-4 rounded-lg py-2 px-4 text-sm'>مشاهده محصول</button>

            <img src={flower1} alt="flower" className='absolute right-0 bottom-0'/>
            <img src={flower2} alt="flower" className='absolute left-0 bottom-0'/>
        </div>
    );
}

export default SpecialProduct;