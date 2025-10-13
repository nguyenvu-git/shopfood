import Header from "./Header";
import Footer from "./Footer";
import { Products } from "../../../../data/product";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ShopPage() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  //thay trang
  const [changrePage, setChargePage] = useState(1);
  const productsPerPage = 15;
  const indexOfLastProduct = changrePage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const totalPages = Math.ceil(Products.length / productsPerPage);

  //search
  const [searchParams] = useSearchParams();
  // const keyword = searchParams.get("search")?.toLowerCase() || "";
  const keyword = (searchParams.get("search") || "").toLowerCase();
  const [filteredProducts, setFilteredProducts] = useState(Products);

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    if (keyword) {
      const results = Products.filter((item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(Products);
    }
    setChargePage(1);
  }, [keyword]);
  return (
    <>
      <Header></Header>
      <div className="w-[1320px] mx-auto mt-40">
        <img src="\img\bannersell.jpg" alt="" />
        <div className="flex gap-4 mt-10">
          <select
            id="fruit"
            name="fruit"
            className="px-4 py-[10px] border-2 border-[#E6E6E6] rounded-[4px] text-[#4D4D4D] w-[178px]"
          >
            <option value="null">Select Category</option>
            <option value="FreshFruit">Fresh Fruit</option>
            <option value="FreshVegetables">Fresh Vegetables</option>
            <option value="MeatFish">Meat & Fish</option>
            <option value="Snacks">Snacks</option>
            <option value="Beverages">Beverages</option>
            <option value="BreadBakery">Bread & Bakery</option>
            <option value="BakingNeeds">Baking Needs</option>
            <option value="Cooking">Cooking</option>
            <option value="DiabeticFood">Diabetic Food</option>
            <option value="DishDetergents">Dish Detergents</option>
          </select>
          <select
            id="fruit"
            name="fruit"
            className="px-4 py-[10px] border-2 border-[#E6E6E6] rounded-[4px] text-[#4D4D4D] w-[178px]"
          >
            <option value="price">Select Price</option>
            <option value="price-1">$0 - $10</option>
            <option value="price-2">$10 - $20</option>
            <option value="price-3">$20 - $30</option>
            <option value="price-4">$30 - $40</option>
            <option value="price-5">$50 - $60</option>
          </select>
          <select
            id="fruit"
            name="fruit"
            className="px-4 py-[10px] border-2 border-[#E6E6E6] rounded-[4px] text-[#4D4D4D] w-[178px]"
          >
            <option value="apple">Select Rating</option>
            <option value="banana">2 Star</option>
            <option value="orange">3 Star</option>
            <option value="banana">4 Star</option>
            <option value="orange">5 Star</option>
          </select>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-center items-center py-8 gap-3 sm:gap-6">
            {currentProducts.map((product, index) => (
              <Link to={`/product/${product.id}`}
                className="border group cursor-pointer select-none sm:px-[0px] px-3 hover:shadow-[0_0_12px_0_rgba(32,181,38,0.32)]"
                key={product.id}
              >
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
                    onClick={() => handleAddToCart(product)}
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
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 mt-10">
          <img
            onClick={() =>
              setChargePage((prev) => (prev > 1 ? prev - 1 : prev))
            }
            className="cursor-pointer"
            src="\img\backk.svg"
            alt=""
          />

          <div className="flex">
            {/* tao mang moi  */}
            {Array.from({ length: totalPages }, (_, index) => (
              <p
                key={index + 1}
                onClick={() => setChargePage(index + 1)}
                className={`py-2 px-4 font-medium rounded-full cursor-pointer ${
                  changrePage === index + 1
                    ? "bg-[#00B207] text-white"
                    : "bg-transparent text-[#333]"
                }`}
              >
                {index + 1}
              </p>
            ))}
          </div>
          <img
            onClick={() =>
              setChargePage((prev) => (prev < totalPages ? prev + 1 : prev))
            }
            src="\img\nextt.svg"
            alt=""
          />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
