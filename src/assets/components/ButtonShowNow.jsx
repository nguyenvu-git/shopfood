export default function ButtonShowNow({bg="bg-white-500",width="w-[162px]",height="h-[45px]",text="text-green-500"}){
    return<>
        <div className={`flex ${bg} ${width} ${height} ${text} rounded-[42px] justify-center items-center gap-3 py-4 px-6 cursor-pointer select-none` }>
            <p className="font-semibold">Shop Now</p>
            <img className="w-[15px]" src="/img/Group.svg" alt="" />
        </div>
    </>
}