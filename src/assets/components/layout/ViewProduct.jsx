import { useEffect, useState } from "react";
import { Products } from "../../../../data/product";
import { useNavigate, useParams } from "react-router-dom";
import ButtonAddToCart from "../ButtonAddToCart";
import Header from "../page/Header";
import Footer from "../page/Footer";
import { Navigate } from "react-router-dom";
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
  if (!dataPr) {
    return;
  }

  return (
    <>
    <Header></Header>
      <div className="sm:w-[1320px] mx-auto mt-50">
       
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
              <ButtonAddToCart width={"w-[420px]"}></ButtonAddToCart>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
