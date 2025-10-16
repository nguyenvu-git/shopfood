import HomePage from "./HomePage";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function SignUp() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="w-full ">
        <Header></Header>
        <div className="flex flex-1 items-center justify-center">
          <form className=" flex flex-col mt-[280px] w-[30%] border-2 p-6 border-[#F2F2F2] rounded-2xl shadow-[0_0_56px_0_rgba(0,38,3,0.08)]">
            <p className="flex justify-center text-[32px] font-semibold">
              Create Account
            </p>
            <div className="flex flex-col w-full">
              <input
                type="email"
                className="w-full px-[14px] py-4 border-1 border-[#E5E5E5] rounded-[6px] mt-5"
                placeholder="Email"
              />
              <div className="flex relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-[14px] py-4 border-1 border-[#E5E5E5] rounded-[6px] mt-3"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  className="absolute top-8 left-90 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                  src="\img\eyee.svg"
                  alt=""
                />
              </div>
              <div className="flex relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-[14px] py-4 border-1 border-[#E5E5E5] rounded-[6px] mt-3"
                  placeholder="Confirm Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  className="absolute top-8 left-90 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                  src="\img\eyee.svg"
                  alt=""
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="bg-[#00B207] rounded-4xl w-full py-[14px] mt-5 cursor-pointer text-[14px] font-semibold text-white"
            >
              Create Account
            </button>
            <div className="flex justify-center mt-6">
              <p className="text-[14px] text-[#666]">Already have account</p>
              <Link to={"/signin"} className="text-[14px] font-medium cursor-pointer ml-1">Login</Link>
            </div>
          </form>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
