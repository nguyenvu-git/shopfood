import { useState } from "react";
import ButtonAddToCart from "../ButtonAddToCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import { Products } from "../../../../data/product";
import { Link } from "react-router-dom";
export default function BestSeller() {
  const dispatch = useDispatch();
    const handleAddToCart = (product)=>{
      dispatch(addToCart(product));
    }
  const Products = [
    {
      id:1,
      image: "/img/pr1.jpg",
      name: "Apple",
      price: "$14.99",
      priceSell: "$20.99",
      cart: "/img/Bag2.svg",
      rate: "/img/Star.svg",
    },
    {
      id:2,
      image: "/img/pr2.jpg",
      name: "Fresh Indian Malta",
      price: "$20.00",
      priceSell: "",
      cart: "/img/Bag2.svg",
      rate: "/img/Star.svg",
    },
    {
      id:3,
      image: "/img/pr3.jpg",
      name: "Chinese cabbage",
      price: "$12.00",
      priceSell: "",
      cart: "/img/Bag2.svg",
      rate: "/img/Star.svg",
    },
    {
      id:4,
      image: "/img/pr4.jpg",
      name: "Green Lettuce",
      price: "$9.00",
      priceSell: "",
      cart: "/img/Bag2.svg",
      rate: "/img/Star.svg",
    },
    {
      id:5,
      image: "/img/pr5.jpg",
      name: "Eggplant",
      price: "$34.00",
      priceSell: "",
      cart: "/img/Bag2.svg",
      rate: "/img/Star.svg",
    },
  ];

  const ProductSells = [
    {
      img: "/img/s1.jpg",
      name: "Green Apple",
      price: "$14.99",
      rate: "/img/Star.svg",
    },
    {
      img: "/img/s2.jpg",
      name: "Indian Malta",
      price: "$14.99",
      rate: "/img/Star.svg",
    },
    {
      img: "/img/s3.jpg",
      name: "Green Lettuce",
      price: "$14.99",
      rate: "/img/Star.svg",
    },
    {
      img: "/img/s4.jpg",
      name: "Eggplant",
      price: "$14.99",
      rate: "/img/Star.svg",
    },
    {
      img: "/img/s5.jpg",
      name: "Red Capsicum",
      price: "$14.99",
      rate: "/img/Star.svg",
    },
    {
      img: "/img/s6.jpg",
      name: "Red Tomatos",
      price: "$14.99",
      rate: "/img/Star.svg",
    },
    {
      img: "/img/s7.jpg",
      name: "Big Potatos",
      price: "$14.99",
      rate: "/img/Star.svg",
    },
    {
      img: "/img/s8.jpg",
      name: "Corn",
      price: "$14.99",
      rate: "/img/Star.svg",
    },
    {
      img: "/img/s9.jpg",
      name: "Fresh cauliflower",
      price: "$14.99",
      rate: "/img/Star.svg",
    },
  ];

  const [open, setOpen] = useState(false);
  const [dataPr, setDataPr] = useState(null);
  const openProducts = (product) => {
    setDataPr(product);
    setOpen(true);
  };

  const closeProducts = (product) => {
    setDataPr(null);
    setOpen(false);
  };

  const [quanlity,setQuanlity] = useState(1);
  const increase = ()=>{(setQuanlity((prev)=>prev+1))}
  const decrease = ()=>{(setQuanlity((prev)=>prev>1?prev-1:1))}
  return (
    <>
      <div className="sm:w-[1320px] mx-auto sm:pt-[80px] pt-12 w-[400px]">
        <p className="text-[32px] font-semibold block text-center">
          Featured Products
        </p>
        <div className="flex flex-wrap sm:justify-between justify-center items-center py-8 sm:gap-[20px] gap-4">
          {Products.slice(0,5).map((product, index) => (
            <Link to={`/product/${product.id}`}
              className="border group cursor-pointer select-none"
              key={product.id}
            >
              <img className="sm:w-[230px] w-[150px]" src={product.image} alt="" />
              <p className="px-2 pt-3 text-[#4D4D4D] text-[14px] group-hover:text-[#2C742F]">
                {product.name}
              </p>
              <div className="flex justify-between px-2 items-center">
                <div className="flex items-center justify-center gap-1">
                  <p className="font-medium sm:text-[16px] text-[12px]">{product.price}</p>
                  <p className="sm:text-[16px] text-[12px] text-[#999]">{product.priceSell}</p>
                </div>
                <div onClick={()=>handleAddToCart(product)} className=" w-[40px] h-[40px] bg-[#F2F2F2] group-hover:bg-[#00B207] rounded-full flex items-center justify-center">
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
            </Link>
          ))}
        </div>

        <div className="sm:flex hidden justify-between">
          <div className="">
            <p className="text-[24px] font-medium mb-[30px]">Hot Deals</p>
            <div className="grid grid-flow-col sm:grid-rows-3 grid-rows-10 gap-x-6 gap-y-4">
              {ProductSells.map((prSell, index) => (
                <div className="cursor-pointer group" key={index}>
                  <div className="flex border-1 sm:w-[312px] w-[230px]">
                    <img
                      className="w-[102px] h-[102px] p-2"
                      src={prSell.img}
                      alt=""
                    />
                    <div className="flex flex-col justify-center ml-[15px]">
                      <p className="text-[#4D4D4D] text-[14px] group-hover:text-[#2C742F]">
                        {prSell.name}
                      </p>
                      <div className="group-hover:hidden">
                        <p className="font-semibold">{prSell.price}</p>
                        <div className="flex gap-0 mt-[6px]">
                          <img className="w-4 h-4" src={prSell.rate} alt="" />
                          <img className="w-4 h-4" src={prSell.rate} alt="" />
                          <img className="w-4 h-4" src={prSell.rate} alt="" />
                          <img className="w-4 h-4" src={prSell.rate} alt="" />
                          <img className="w-4 h-4" src={prSell.rate} alt="" />
                        </div>
                      </div>
                      <div className="hidden group-hover:flex mt-[7px]">
                        <div className="flex gap-3">
                          <div className="border rounded-full border-black p-[10px] hover:bg-[#00B207]">
                            <img
                              className=" w-5 h-5 flex center"
                              src="/img/Bag2.svg"
                              alt=""
                            />
                          </div>
                          <div
                            className="border rounded-full border-black p-[10px] hover:bg-[#00B207]"
                            onClick={() => {
                              openProducts(prSell);
                            }}
                          >
                            <img
                              className="w-5 h-5"
                              src="/img/eye.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img className="sm:block hidden" src="/img/ps.jpg" alt="" />
        </div>
        {open && dataPr && (
          <div className="fixed inset-0 flex items-center justify-center z-100 backdrop-brightness-50">
            <div className="bg-white w-[1320px] h-[600px] p-6 rounded-lg relative">
              {/* Nút đóng */}
              <button
                className="absolute top-4 right-4 text-black text-2xl"
                onClick={closeProducts}
              >
                ✕
              </button>

              {/* Nội dung chi tiết sản phẩm */}
              <div className="">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center gap-14">
                    <img className="w-6 h-6" src="/img/up.svg" alt="" />
                    <div className="">
                      <img
                        className=""
                        src="/img/Productmini.jpg"
                        alt=""
                      />
                      <img
                        className=""
                        src="/img/Productmini2.jpg"
                        alt=""
                      />
                      <img
                        className=""
                        src="/img/Productmini2.jpg"
                        alt=""
                      />
                      <img
                        className=""
                        src="/img/Productmini2.jpg"
                        alt=""
                      />
                    </div>
                    <img
                      className="w-6 h-6"
                      src="/img/down.svg"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <img
                      src={dataPr.img || dataPr.image}
                      alt={dataPr.name}
                      className="w-[556px] h-[556px] object-cover"
                    />
                  </div>
                  <div className="">
                    <h2 className="text-4xl font-semibold">{dataPr.name}</h2>
                    <div className="flex items-center gap-1 mt-4">
                      <div className="flex gap-0 items-center">
                        <img
                          className="w-[18px] h-[18px]"
                          src={dataPr.rate}
                          alt=""
                        />
                        <img
                          className="w-[18px] h-[18px]"
                          src={dataPr.rate}
                          alt=""
                        />
                        <img
                          className="w-[18px] h-[18px]"
                          src={dataPr.rate}
                          alt=""
                        />
                        <img
                          className="w-[18px] h-[18px]"
                          src={dataPr.rate}
                          alt=""
                        />
                        <img
                          className="w-[18px] h-[18px]"
                          src={dataPr.rate}
                          alt=""
                        />
                      </div>
                      <p className="text-[14px] text-[#666]"> 4 Review</p>
                      <p className="ml-[31px] text-[#333] font-medium text-[14px]">
                        SKU:
                        <span className="text-[#666] font-normal">
                          2,51,594
                        </span>
                      </p>
                    </div>
                    <div className="">
                      <p className="text-[24px] text-[#2C742F] font-medium flex gap-2">
                        {dataPr.price}
                        {dataPr.priceSell}
                      </p>
                    </div>
                    <div className="h-[1px] w-[586px] bg-[#E5E5E5] mt-5"></div>
                    <div className="flex justify-between items-center mt-6">
                      <div className="flex gap-2 items-center">
                        <p className="text-[14px]">Brand:</p>
                        <img
                          className="w-[56px] h-[56px]"
                          src="/img/image.png"
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-[14px]">Share item:</p>
                        <div className="flex gap-6">
                          <img
                            className="w-[18px] h-[18px]"
                            src="/img/fb.svg"
                            alt=""
                          />
                          <img
                            className="w-[18px] h-[18px]"
                            src="/img/tw.svg"
                            alt=""
                          />
                          <img
                            className="w-[18px] h-[18px]"
                            src="/img/pin.svg"
                            alt=""
                          />
                          <img
                            className="w-[18px] h-[18px]"
                            src="/img/ig.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <p className="w-[568px] mt-[16px] text-[14px] text-[#808080]">
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Nulla nibh diam,
                      blandit vel consequat nec, ultrices et ipsum. Nulla varius
                      magna a consequat pulvinar.
                    </p>

                    <div className="h-[1px] w-[586px] bg-[#E5E5E5] mt-6"></div>

                    <div className="flex justify-between mt-[18px] select-none">
                      <div className="flex gap-2 border-2 rounded-4xl w-[124px] justify-between p-2 items-center">
                        <div className="bg-[#F2F2F2] rounded-full p-[10px] flex items-center justify-center " onClick={increase}>
                          <img
                            className="w-[14px] h-[14px]"
                            src="/img/add.svg"
                            alt=""
                          />
                        </div>
                        <p>{quanlity}</p>
                        <div className="bg-[#F2F2F2] rounded-full p-[10px] flex items-center justify-center "onClick={decrease}>
                          <img
                            className="w-[14px] h-[14px]"
                            src="/img/del.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <ButtonAddToCart width={"w-[420px]"}></ButtonAddToCart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
