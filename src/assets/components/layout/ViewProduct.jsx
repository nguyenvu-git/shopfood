import { useEffect, useState } from "react";
import { Products } from "../../../../data/product";
import { useNavigate, useParams } from "react-router-dom";
import ButtonAddToCart from "../ButtonAddToCart";
import Header from "../page/Header";
import Footer from "../page/Footer";
import { Comments } from "../../../../data/comments";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ViewProduct() {
  const [quanlity, setQuanlity] = useState(1);
  const increase = () => {
    setQuanlity((prev) => prev + 1);
  };
  const decrease = () => {
    setQuanlity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const { id } = useParams();
  const [dataPr, setDataPr] = useState(null);
  useEffect(() => {
    const product = Products.find((p) => p.id === parseInt(id));
    setDataPr(product);
  }, [id]);

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
    // dispatch(addToCart(product));
  };

  const [clickItem, setClickItem] = useState(false);
  const handleClickItem = () => {
    setClickItem(true);
  };

  const [changreTab, setChangreTap] = useState(false);
  const handleChargeTab = () => {
    setChangreTap(true);
  };
  const handleBackTab = () => {
    setChangreTap(false);
  };
  if (!dataPr) {
    return <p></p>;
  }

  return (
    <>
      <Header></Header>
      <div className="sm:w-[1320px] mx-auto mt-62">
        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-14">
            <img className="w-6 h-6" src="/img/up.svg" alt="" />
            <div className="">
              <img className="" src="/img/Productmini.jpg" alt="" />
              <img className="" src="/img/Productmini2.jpg" alt="" />
              <img className="" src="/img/Productmini2.jpg" alt="" />
              <img className="" src="/img/Productmini2.jpg" alt="" />
            </div>
            <img className="w-6 h-6" src="/img/down.svg" alt="" />
          </div>
          <div className="">
            <img
              src={dataPr.image}
              alt={dataPr.name}
              className="w-[556px] h-[556px] object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-4xl font-semibold">{dataPr.name}</h2>
            <div className="flex items-center gap-1 mt-4">
              <div className="flex gap-0 items-center">
                <img className="w-[18px] h-[18px]" src={dataPr.rate} alt="" />
                <img className="w-[18px] h-[18px]" src={dataPr.rate} alt="" />
                <img className="w-[18px] h-[18px]" src={dataPr.rate} alt="" />
                <img className="w-[18px] h-[18px]" src={dataPr.rate} alt="" />
                <img className="w-[18px] h-[18px]" src={dataPr.rate} alt="" />
              </div>
              <p className="text-[14px] text-[#666]"> 4 Review</p>
              <p className="ml-[31px] text-[#333] font-medium text-[14px]">
                SKU:
                <span className="text-[#666] font-normal">2,51,594</span>
              </p>
            </div>
            <div className="">
              <p className="text-[24px] text-[#2C742F] font-medium flex gap-2 items-center">
                <p className="">{dataPr.price}</p>
                <p className="text-[#808080] text-[16px]">{dataPr.priceSell}</p>
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
                  <img className="w-[18px] h-[18px]" src="/img/fb.svg" alt="" />
                  <img className="w-[18px] h-[18px]" src="/img/tw.svg" alt="" />
                  <img
                    className="w-[18px] h-[18px]"
                    src="/img/pin.svg"
                    alt=""
                  />
                  <img className="w-[18px] h-[18px]" src="/img/ig.svg" alt="" />
                </div>
              </div>
            </div>
            <p className="w-[568px] mt-[16px] text-[14px] text-[#808080]">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
            </p>

            <div className="h-[1px] w-[586px] bg-[#E5E5E5] mt-6"></div>

            <div className="flex justify-between mt-[18px] select-none">
              <div className="flex gap-2 border-2 rounded-4xl w-[124px] justify-between p-2 items-center">
                <div
                  className="bg-[#F2F2F2] rounded-full p-[10px] flex items-center justify-center "
                  onClick={increase}
                >
                  <img
                    className="w-[14px] h-[14px]"
                    src="/img/add.svg"
                    alt=""
                  />
                </div>
                <p>{quanlity}</p>
                <div
                  className="bg-[#F2F2F2] rounded-full p-[10px] flex items-center justify-center "
                  onClick={decrease}
                >
                  <img
                    className="w-[14px] h-[14px]"
                    src="/img/del.svg"
                    alt=""
                  />
                </div>
              </div>
              <ButtonAddToCart
                onClick={(e) => handleAddToCart(dataPr)}
                width={"w-[420px]"}
              ></ButtonAddToCart>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex gap-4 justify-center cursor-pointer">
            <p
              onClick={() => handleBackTab()}
              className={`p-4 font-medium ${
                changreTab ? "text-[#808080]" : "text-black"
              }`}
            >
              Additional Information
            </p>
            <p
              onClick={() => handleChargeTab()}
              className={`p-4 font-medium ${
                !changreTab ? "text-[#808080]" : "text-black"
              }`}
            >
              Customer Feedback
            </p>
          </div>
          {!changreTab && (
            <div className="flex mt-[32px] justify-between">
              <div className="flex gap-12">
                <div className="">
                  <p className="mb-3 text-[14px]">Weight:</p>
                  <p className="mb-3 text-[14px]">Color:</p>
                  <p className="mb-3 text-[14px]">Type:</p>
                  <p className="mb-3 text-[14px]">Category:</p>
                  <p className="mb-3 text-[14px]">Stock Status:</p>
                </div>
                <div className="">
                  <p className="mb-3 text-[14px] text-[#666]">03</p>
                  <p className="mb-3 text-[14px] text-[#666]">Green</p>
                  <p className="mb-3 text-[14px] text-[#666]">Organic</p>
                  <p className="mb-3 text-[14px] text-[#666]">Vegetables</p>
                  <p className="mb-3 text-[14px] text-[#666]">
                    Available (5,413)
                  </p>
                </div>
              </div>
              <div className="">
                <img src="\img\imgprd.jpg" alt="" />
              </div>
            </div>
          )}
        </div>

        {changreTab && (
          <div className="mt-[22px]">
            {Comments.slice(0, 3).map((comment, index) => (
              <div className="" key={comment.id}>
                <div className="flex mt-5">
                  <img className="mr-3" src={comment.img} alt="" />
                  <div className="">
                    <p className="text-[14px] font-medium">{comment.name}</p>
                    <div className="flex mt-[2px]">
                      <img className="w-4 h-4" src={comment.start} alt="" />
                      <img className="w-4 h-4" src={comment.start} alt="" />
                      <img className="w-4 h-4" src={comment.start} alt="" />
                      <img className="w-4 h-4" src={comment.start} alt="" />
                      <img className="w-4 h-4" src={comment.start} alt="" />
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-[14px] text-[#808080]">
                  {comment.comment}
                </p>
                <p className="w-full h-[1px] bg-[#E5E5E5] mt-5"></p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="sm:w-[1320px] mx-auto mt-20">
        <p className="flex justify-center text-[32px] font-semibold">
          Related Products
        </p>
        <div className="flex justify-between mt-8">
          {Products.slice(5, 10).map((product, index) => (
            <Link
              to={`/product/${product.id}`}
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

      <Footer></Footer>
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
