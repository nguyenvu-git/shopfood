import { useSelector } from "react-redux";
export default function HeaderMobile() {
  const count = useSelector((state) => state.cart.totalQuantity);
  return (
    <>
      <header className="sm:hidden py-2  fixed top-0 w-full bg-white">
        <div className="flex justify-between p-4">
          <img src="/img/Logo.svg" alt="" />
          <div className="relative">
            <p className="bg-[#2C742F] absolute top-[-10] right-0 w-[18px] h-[18px] rounded-full flex justify-center items-center text-[10px] text-white" >{count}</p>
            <img src="/img/Bag.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-between px-6 gap-0.5">
          <img src="\img\menu.svg" alt="" />
          <div className="flex">
            <div className="flex relative border-2 w-[230px] py-3 border-gray-300 rounded-l-xl  focus-within:border-black overflow-hidden">
              <img
                src="\img\iconSearch.svg"
                alt=""
                className="absolute top-1/2 left-3 -translate-y-1/2"
              />
              <input
                className="pl-10 outline-none"
                type=""
                placeholder="Search"
              />
            </div>
            <button
              className="font-semibold bg-[#00B207] px-2 rounded-r-xl "
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
