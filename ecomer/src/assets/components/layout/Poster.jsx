import ButtonShowNow from "../ButtonShowNow";

export default function Poster() {
  return (
    <>
      <div className="hidden sm:flex w-[1320px] mx-auto gap-1.5 justify-center items-center mt-[60px]">
        <div className="bg-[url('public/img/poster1.jpg')] w-[424px] h-[536px] flex flex-col items-center ">
          <p className="font-medium text-white mt-[35px]">Best Deals</p>
          <p className="text-[40px] font-semibold text-white mt-2">
            Sale of the Month
          </p>

          <div className="flex gap-2 mt-2 mb-6">
            <div className="">
              <p className="text-[24px] text-white">00</p>
              <p className="text-[14px] text-white">Days</p>
            </div>
            <p className="text-[24px] text-white">:</p>
            <div className="">
              <p className="text-[24px] text-white">02</p>
              <p className="text-[14px] text-white">Hours</p>
            </div>
            <p className="text-[24px] text-white">:</p>
            <div className="">
              <p className="text-[24px] text-white">18</p>
              <p className="text-[14px] text-white">Mins</p>
            </div>
            <p className="text-[24px] text-white">:</p>
            <div className="">
              <p className="text-[24px] text-white">46</p>
              <p className="text-[14px] text-white">Secs</p>
            </div>
          </div>
          <ButtonShowNow bg="bg-white"></ButtonShowNow>
        </div>
        <div className="bg-[url('public/img/poster2.jpg')] w-[424px] h-[536px] flex flex-col items-center">
          <p className="text-white text-sm font-medium tracking-[0.25px] mt-[35px]">85% Fat Free</p>
          <h1 className="text-white text-[40px] font-semibold mt-[16px]">Low-Fat Meat</h1>
          <h3 className="text-white text-[18px] mt-[14px]">Started at <span className="font-semibold text-[#FF8A00]">$79.99</span></h3>
          <ButtonShowNow bg="bg-white mt-[30px]"></ButtonShowNow>
        </div>
        <div className="bg-[url('public/img/poster3.jpg')] w-[424px] h-[536px] flex flex-col items-center">
            <p className=" text-sm font-medium tracking-[0.25px] mt-[35px]">Summer Sale</p>
          <h1 className=" text-[40px] font-semibold mt-[16px]">100% Fresh Fruit</h1>
          <h3 className=" text-[18px] mt-[14px]">Up to <span className="font-semibold text-[#FCC900] bg-black py-[6px] px-3 rounded-[5px]" >64% OFF</span></h3>
          <ButtonShowNow bg="bg-white mt-[30px]"></ButtonShowNow>
        </div>
      </div>
    </>
  );
}
