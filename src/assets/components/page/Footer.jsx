export default function Footer() {
  return (
    <>
      <div className="bg-[#1A1A1A] mt-[80px]">
        <div className="sm:block hidden w-[1320px] mx-auto pt-[60px] bg-[#1A1A1A]">
          <div className="flex justify-between">
            <div className="">
              <div className="flex w-[336px]">
                <img src="\img\plant.svg" alt="" />
              </div>
              <p className="text-[#808080] w-[336px] mt-4">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
              <div className="flex gap-4 items-center mt-[22px]">
                <p className="text-[14px] font-medium text-white">
                  (219) 555-0114
                </p>
                <p className="text-[#808080]">or</p>
                <p className="text-[14px] font-medium text-white">
                  Proxy@gmail.com
                </p>
              </div>
            </div>
            <div className="flex text-[14px]">
              <div className="w-[95px] ">
                 <p className="text-white cursor-pointer mt-3 text-[16px] font-medium">My Account</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-5">My Account</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-3">Order History</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-3">Shoping Cart</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-3">Wishlist</p>
              </div>
              <div className="w-[130px] ml-[129px]">
                 <p className="text-white  cursor-pointer mt-3 text-[16px] font-medium">Helps</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-5">Contact</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-3">Faqs</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-3">Terms & Condition</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-3">Privacy Policy</p>
              </div>
              <div className="w-[82px] ml-[95px]">
                 <p className="text-white  cursor-pointer mt-3 text-[16px] font-medium">Proxy</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-5">About</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-3">Shop</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-3">Product</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-3">Track Order</p>
              </div>
              <div className="w-[128px] ml-[130px]">
                 <p className="text-white  cursor-pointer mt-3 text-[16px] font-medium">Categories</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-5">Fruit & Vegetables</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-3">Meat & Fish</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-3">Bread & Bakery</p>
                 <p className="hover:text-white text-[#999] cursor-pointer mt-3">Beauty & Health</p>
              </div>
            </div>
          </div>
          <div className="w-[1320px] h-[1px] bg-[#808080] mt-[60px]"></div>
          <div className="">
            <p className="text-[#808080] py-6">Ecobazar eCommerce © 2021. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
