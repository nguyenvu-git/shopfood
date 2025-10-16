import HomePage from "./assets/components/page/HomePage";
import "./App.css";
import { Routes,Route } from "react-router-dom";
import SingleBlock from "./assets/components/layout/SingleBlock";
import ScrollToTop from "./assets/components/ScrollToTop";
import ShopPage from "./assets/components/page/ShopPage";
import ViewProduct from "./assets/components/layout/ViewProduct";
import SignIn from "./assets/components/page/SignIn";
import SignUp from "./assets/components/page/SignUp";
import ShoppingCart from "./assets/components/layout/ShoppingCart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}/>
        <Route path="/viewBlog" element={<SingleBlock></SingleBlock>}/>
        <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
        <Route path="/product/:id" element={<ViewProduct/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/shoppingCart" element={<ShoppingCart></ShoppingCart>}></Route>
      </Routes>
      <ScrollToTop/>
    </>
  );
}

export default App;
