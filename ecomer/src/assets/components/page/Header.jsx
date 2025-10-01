import { useCart } from "../../contexts/CartContext";
export default function Header() {
  const {cartCount} =useCart();
  return (
    <>
      <header className=" fixed top-0 left-0 w-full ">
        <div className="bg-white py-2">
            <div className="hidden w-full max-w-[1200px] mx-auto px-4 py-2 sm:flex flex-wrap  sm:justify-between ">
                <img
                  className="flex items-center mb-2 sm:mb-0"
                  src="/public/img/Logo.svg"
                  alt=""
                />
                <div className="flex justify-center">
                  <div className="flex relative sm:w-[500px] min-w-[200px] border border-gray-300 rounded-l-xl overflow-hidden focus-within:border-black  sm:mb-0">
                    <img
                      src="\public\img\iconSearch.svg"
                      alt=""
                      className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5"
                    />
                    <input
                      className="w-full pl-10 pr-4 py-2 text-sm sm:text-base outline-none"
                      type="search"
                      placeholder="Search"
                    />
                  </div>
                  <button className="font-semibold bg-[#00B207] px-2 rounded-r-xl" type="submit">Search</button>
                </div>
                <div className="hidden sm:flex divide-x  ">
                  {/* <img src="\public\img\Heart.svg" alt="" /> */}
                 <div className="relative select-none">
                  <div className="bg-[#2C742F] flex justify-center items-center w-[18px] h-[18px] rounded-full text-[10px] font-medium text-white absolute -top-0 -right-0">{cartCount}</div>
                  <img className="w-[34px] h-[34px]" src="\public\img\Bag.svg" alt="" />
                  </div>
                </div>
        
                <div className="flex sm:hidden sm:mt-0 ml-4 justify-center items-center">
                  <img src="\public\img\Bag.svg" alt="Menu" className="w-6 h-6 items-center justify-center" />
                </div>
            </div>
        </div>

       <div className=" hidden sm:block w-full bg-[#333] py-2">
            <div className="hidden max-w-[1200px] sm:flex mx-auto items-center sm:justify-between ">
                <ul className="flex items-center">
                    <li className="p-5 text-sm font-semibold hover:text-white text-[#999] "><a href="">Home</a></li>
                    <li className="p-5 text-sm font-semibold hover:text-white text-[#999]"><a href="">Shop</a></li>
                    <li className="p-5 text-sm font-semibold hover:text-white text-[#999]"><a href="">Pages</a></li>
                    <li className="p-5 text-sm font-semibold hover:text-white text-[#999]"><a href="">Blog</a></li>
                    <li className="p-5 text-sm font-semibold hover:text-white text-[#999]"><a href="">About Us</a></li>
                    <li className="p-5 text-sm font-semibold hover:text-white text-[#999]"><a href="">Contact Us</a></li>
                </ul>
                <div className="flex items-center gap-2">
                    <img src="/public/img/PhoneCall.svg" alt="" />
                    <p className="text-sm text-white font-medium">0393293422</p>
                </div>
            </div>
       </div>
      </header>
    </>
  );
}
