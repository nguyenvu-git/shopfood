export default function Banner(){
    const Items = [
        {image:"/img/delivery-truck 1.svg",header:"Free Shipping", text:"Free shipping on all your order"},
        {image:"/img/delivery-truck 1.svg",header:"Customer Support 24/7", text:"Instant access to Support"},
        {image:"/img/delivery-truck 1.svg",header:"100% Secure Payment", text:"We ensure your money is save"},
        {image:"/img/delivery-truck 1.svg",header:"Money-Back Guarantee", text:"30 Days Money-Back Guarantee"}
    ]
    return<>
        <div className="sm:w-[1320px] mx-auto w-[400px]">
            <div className="sm:pt-[200px] flex flex-col sm:flex-row pt-[160px] justify-center items-center">
                <div className="bg-[url('/img/BannarBig.jpg')] w-[387px]  h-[228px] sm:w-[872px] sm:h-[600px] bg-cover rounded-xl bg-center"></div>
                 <div className="ml-6">
                    <div className="hidden sm:block bg-[url('/img/Bannar.jpg')] w-[423px] h-[288px]"></div>
                    <div className="hidden sm:block bg-[url('/img/BG.jpg')] w-[423px] h-[288px] mt-6"></div>
                </div>
            </div>
            <div className="hidden sm:flex shadow-[0_8px_40px_0_rgba(0,38,3,0.08)] p-10 justify-center items-center gap-2.5 rounded-[8px] mt-6" >
                {Items.map((item,index)=>(
                    <div className="flex gap-4 justify-center items-center" key={index}>
                        <img src={item.image} alt="" />
                        <div className="">
                            <p className="text-[16px] font-semibold leading-5">{item.header}</p>
                            <p className="text-[#999] text-[14px]">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
}