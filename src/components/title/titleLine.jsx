import arrow from "Icons/arrowLeft.svg"

const TitleLine = ({name}) => {
    return ( 
        <div className="flex gap-6 items-center justify-between mt-16 mb-4">
            <h2 className="font-bold md:text-2xl text-xl text-blue">{name}</h2>
            <span className="block bg-gradient-to-r from-transparent from-0% via-[#D3DCEE] via-50% to-transparent to-100% h-[2px] w-[100%]"></span>
            <button className="text-blue whitespace-nowrap flex items-center gap-2 text-sm">مشاهده بیشتر
            <img src={arrow} alt="arrow" />
            </button>
        </div>
     );
}


 
export default TitleLine;