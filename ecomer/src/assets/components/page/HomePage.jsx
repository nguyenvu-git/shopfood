import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Banner from "../layout/Banner";
import PopularCategories from "../layout/PopularCategories";
import PopularProducts from "../layout/PopularProducts";
import Poster from "../layout/Poster";
import BestSeller from "../layout/BestSeller";

export default function HomePage() {
  return (
    <>
      <Header></Header>
      <HeaderMobile></HeaderMobile>
      <Banner></Banner>
      <PopularCategories></PopularCategories>
      <PopularProducts></PopularProducts>
      <Poster></Poster>
      <BestSeller></BestSeller>
      
    </>
  );
}
