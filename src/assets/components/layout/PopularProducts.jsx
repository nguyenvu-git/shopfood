import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import React from "react";
import { Products } from "../../../../data/product";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function PopularProducts() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const handleAddToCart = (product) => {
    const isDuplicate = cartItems.some((item) => item.id === product.id);
    if (isDuplicate) {
      toast.warning("This product is already in your cart !");
      return;
    }

    dispatch(addToCart(product));
    toast.success("Added to cart !");
  };

  const [clickItem, setClickItem] = useState(false);
  const handleClickItem = () => {
    setClickItem(true);
  };

  return (
    <>
      <div className="sm:w-[1320px] mx-auto pt-[50px] w-[400px]">
        <div className="flex items-center justify-between">
          <p className="text-2xl sm:text-[32px] font-semibold">
            Popular Products
          </p>
          <div className="flex gap-3 justify-center items-center cursor-pointer">
            <p className="text-[#00B207] font-medium">View All view</p>
            <img className="w-[15px]" src="\img\Group.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center py-8 gap-3 sm:gap-0">
          {Products.slice(0, 10).map((product, index) => (
            <Link
              to={`product/${product.id}`}
              className="flex flex-wrap justify-center items-center gap-3 sm:gap-0"
              key={product.id}
            >
              <div className="border group cursor-pointer select-none sm:px-[0px] px-3">
                <img
                  className="sm:w-[230px] w-[150px]"
                  src={product.image}
                  alt=""
                />
                <p className="px-2 pt-3 text-[#4D4D4D] text-[14px] group-hover:text-[#2C742F]">
                  {product.name}
                </p>
                <div className="flex justify-between px-2 items-center">
                  <div className="flex items-center justify-center gap-1">
                    <p className="font-medium sm:text-[16px] text-[12px]">
                      {product.price}
                    </p>
                    <p className="sm:text-[16px] text-[12px] text-[#999]">
                      {product.priceSell}
                    </p>
                  </div>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                    className=" w-[40px] h-[40px] bg-[#F2F2F2] group-hover:bg-[#00B207] rounded-full flex items-center justify-center "
                  >
                    <img
                      className="group-hover:hidden"
                      src={product.cart}
                      alt=""
                    />
                    <img
                      className="hidden group-hover:block"
                      src="\img\Bagw.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-0.5 px-2 pt-2 pb-3">
                  <img className="w-[12px]" src={product.rate} alt="" />
                  <img className="w-[12px]" src={product.rate} alt="" />
                  <img className="w-[12px]" src={product.rate} alt="" />
                  <img className="w-[12px]" src={product.rate} alt="" />
                  <img className="w-[12px]" src={product.rate} alt="" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}
