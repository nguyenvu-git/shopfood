import Header from "../page/Header";
import Footer from "../page/Footer";
import { Products } from "../../../../data/product";
export default function ShoppingCart() {
  return (
    <>
      <Header></Header>
      <div className="w-[1320px] mx-auto mt-70">
        <p className="flex justify-center text-[32px] font-semibold">
          My Shopping Cart
        </p>
      </div>

      <div className="flex justify-between w-[1320px] mx-auto mt-8 relative">
        <div className="w-[70%] border rounded-2xl  overflow-hidden">
          <table className="w-full h-[300px]">
            <thead className="">
              <tr className=" text-left border px-5 py-4 ">
                <th className="px-5 py-3 uppercase text-[14px] text-[#808080]">
                  Product
                </th>
                <th className="px-5 py-3 uppercase text-[14px] text-[#808080]">
                  price
                </th>
                <th className="px-5 py-3 uppercase text-[14px] text-[#808080]">
                  Quantity
                </th>
                <th className="px-5 py-3 uppercase text-[14px] text-[#808080]">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody className="">
              {Products.map((product) => (
                <tr key={product.id} className=" text-left border">
                  <td className="flex px-5 py-3 items-center gap-3">
                    <img className="w-25 h-25" src={product.image} alt="" />
                    <p>{product.name}</p>
                  </td>
                  <td className=" px-5 py-3 gap-3">{product.price}</td>
                  <td className="px-5 py-3 gap-3">
                    <div className="flex gap-2 border-2 rounded-4xl w-[124px] justify-between p-2 items-center">
                      <div className="bg-[#F2F2F2] rounded-full p-[10px] flex items-center justify-center cursor-pointer">
                        <img
                          className="w-[14px] h-[14px]"
                          src="/img/add.svg"
                          alt=""
                        />
                      </div>
                      <p>1</p>
                      <div className="bg-[#F2F2F2] rounded-full p-[10px] flex items-center justify-center cursor-pointer">
                        <img
                          className="w-[14px] h-[14px]"
                          src="/img/del.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </td>

                  <td className=" px-5 py-3 gap-3"> 1</td>
                  <td className=" px-5 py-3 gap-3">
                    <img
                      className="cursor-pointer w-6 h-6"
                      src="\img\cclose.svg"
                      alt=""
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sticky right-0 top-60 w-[28%] h-[296px] border rounded-2xl ">
          <div className="p-6">
            <p className="text-[20px] font-medium">Cart Total </p>
            <div className="flex justify-between mt-5">
              <p className="text-[14px] text-[#4D4D4D]">Subtotal: </p>
              <p className="text-[14px] font-medium">$84.00</p>
            </div>
            <p className="w-full bg-[#E6E6E6] h-[1px] mt-3"></p>
            <div className="flex justify-between mt-3">
              <p className="text-[14px] text-[#4D4D4D]">Shipping: </p>
              <p className="text-[14px] font-medium">Free</p>
            </div>
            <p className="w-full bg-[#E6E6E6] h-[1px] mt-3"></p>
            <div className="flex justify-between">
              <p className="text-[#4D4D4D] mt-3">Total: </p>
              <p className="font-semibold">$84.00</p>
            </div>
            <button className="bg-[#00B207] rounded-4xl w-full py-[14px] mt-5 cursor-pointer text-[14px] font-semibold text-white">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
