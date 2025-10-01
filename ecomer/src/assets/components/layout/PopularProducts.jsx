import { useCart } from "../../contexts/CartContext";
export default function PopularProducts() {
  const Products = [
    {
      image: "/public/img/pr1.jpg",
      name: "Apple",
      price: "$14.99",
      priceSell: "$20.99",
      cart: "/public/img/Bag2.svg",
      rate: "/public/img/Star.svg",
    },
    {
      image: "/public/img/pr2.jpg",
      name: "Fresh Indian Malta",
      price: "$20.00",
      priceSell: "",
      cart: "/public/img/Bag2.svg",
      rate: "/public/img/Star.svg",
    },
    {
      image: "/public/img/pr3.jpg",
      name: "Chinese cabbage",
      price: "$12.00",
      priceSell: "",
      cart: "/public/img/Bag2.svg",
      rate: "/public/img/Star.svg",
    },
    {
      image: "/public/img/pr4.jpg",
      name: "Green Lettuce",
      price: "$9.00",
      priceSell: "",
      cart: "/public/img/Bag2.svg",
      rate: "/public/img/Star.svg",
    },
    {
      image: "/public/img/pr5.jpg",
      name: "Eggplant",
      price: "$34.00",
      priceSell: "",
      cart: "/public/img/Bag2.svg",
      rate: "/public/img/Star.svg",
    },
    {
      image: "/public/img/pr6.jpg",
      name: "Big Potatoes",
      price: "$20.00",
      priceSell: "",
      cart: "/public/img/Bag2.svg",
      rate: "/public/img/Star.svg",
    },
    {
      image: "/public/img/pr7.jpg",
      name: "Corn",
      price: "$20.00",
      priceSell: "",
      cart: "/public/img/Bag2.svg",
      rate: "/public/img/Star.svg",
    },
    {
      image: "/public/img/pr8.jpg",
      name: "Fresh Cauliflower",
      price: "$12.00",
      priceSell: "",
      cart: "/public/img/Bag2.svg",
      rate: "/public/img/Star.svg",
    },
    {
      image: "/public/img/pr9.jpg",
      name: "Green Capsicum",
      price: "$9.00",
      priceSell: "$20.99",
      cart: "/public/img/Bag2.svg",
      rate: "/public/img/Star.svg",
    },
    {
      image: "/public/img/pr10.jpg",
      name: "Green Chili",
      price: "$34.00",
      priceSell: "",
      cart: "/public/img/Bag2.svg",
      rate: "/public/img/Star.svg",
    },
    
  ];

  const {setCartCount} = useCart();
  return (
    <>
      <div className="sm:w-[1320px] w-full mx-auto pt-[50px]">
        <div className="flex items-center justify-between">
          <p className="text-[32px] font-semibold">Popular Products</p>
          <div className="flex gap-3 justify-center items-center cursor-pointer">
            <p className="text-[#00B207] font-medium">View All</p>
            <img className="w-[15px]" src="\public\img\Group.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center py-8">
          {Products.map((product, index) => (
            <div className="border group cursor-pointer select-none" key={index}>
              <img className="w-[230px]" src={product.image} alt="" />
              <p className="px-2 pt-3 text-[#4D4D4D] text-[14px] group-hover:text-[#2C742F]" >{product.name}</p>
              <div className="flex justify-between px-2 items-center">
                <div className="flex items-center justify-center gap-1">
                  <p className="font-medium">{product.price}</p>
                  <p className="text-[16px] text-[#999]">{product.priceSell}</p>
                </div>
                <div onClick={()=>setCartCount((prev)=>prev+1)} className=" w-[40px] h-[40px] bg-[#F2F2F2] group-hover:bg-[#00B207] rounded-full flex items-center justify-center " >
                    <img className="group-hover:hidden" src={product.cart} alt="" />
                    <img className="hidden group-hover:block" src="\public\img\Bagw.svg" alt="" />
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
          ))}
        </div>
      </div>
    </>
  );
}
