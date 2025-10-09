export default function ButtonAddToCart({width,hight}){
    return<>
        <div className={`flex ${width} ${hight} bg-[#00B207] justify-center items-center py-4 rounded-4xl gap-4 cursor-pointer select-none`}>
            <p className="text-white font-semibold">Add to Cart</p>
            <img className="w-[24px] h-[24px]" src="/public/img/Bagw.svg" alt="" />
        </div>
    </>
}