import { useSelector,useDispatch } from "react-redux";
// import { Products } from "../../../../data/product";
import {removeFromCart} from "../../../redux/cartSlice"
export default function CartRight({onClose}) {
  const dispatch =useDispatch();

  const {items,totalQuantity} = useSelector((state)=>state.cart);
  const totalPrice = items.reduce((sum,item)=>sum+parseFloat(item.price.replace("$",""))*item.quantity,0).toFixed(2);
  return (
    <>
    <div className="fixed inset-0 backdrop-brightness-50 z-50  transform transition-transform duration-1000 ease-in-out" onClick={onClose}>

    </div>
      <div className="w-[457px] top-0 right-0 z-200 fixed py-10 pl-10 bg-white h-full backdrop-brightness-50 transform transition-transform duration-1000 ease-in-out" >
        <div className="flex justify-between pr-10 items-center">
          <p className="text-[20px] font-medium">Shopping Card ({totalQuantity})</p>
          <button onClick={onClose} className=" text-black text-2xl">✕</button>
        </div>
      <div className="overflow-y-auto">
          <div className=" h-[500px] pr-10">
              {items.map((product,index)=>(
                  <div className=" w-[376px] h-[100px]" key={product.id}>
                      <div className="flex justify-between mt-6 items-center">
                          <div className="flex items-center gap-2">
                              <img className="w-[120px] h-[100px] object-cover \" src={product.image} alt="" />
                              <div className="">
                                  <p className="text-[14px]">{product.name}</p>
                                  <p className="text-[14px] font-semibold">{product.price}</p>
                              </div>
      
                          </div>
                          <img onClick={()=>dispatch(removeFromCart(product.id))} className="cursor-pointer w-6 h-6" src="\img\cclose.svg" alt="" />
                      </div>
                      <p className="w-[375px] my-3 bg-[#E6E6E6] h-[1px] "></p>
                  </div>
                  
              ))}
          </div>
      </div>
    
            <div className=" mt-6 flex flex-col justify-center">
              <div className="flex justify-between pr-6 ">
                <p>2 Product</p>
                <p className="font-semibold">${totalPrice}</p>
              </div>
              <div className="flex flex-col justify-center">
                <button className="bg-[#00B207] w-[376px] px-10 py-4 rounded-[40px] text-white font-semibold mt-6">Checkout</button>
                <button className="w-[376px] px-10 py-4 bg-[#56AC591A] rounded-[40px] text-[#00B207] font-semibold mt-3">Go to cart</button>
              </div>
            </div>
      </div>
    </>
  );
}
