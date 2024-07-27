import logo from "@/assets/ultragear.png";
import { Button } from "../ui/button";
import {
  Heart,
  MessageCircleQuestion,
  Search,
  ShoppingCart,
  Truck,
  User,
} from "lucide-react";
import MenuDropDown from "./navbarComponent/MenuDropDown";

const Navbar = () => {
  return (
    <>
      <header className="bg-[#0c1555] text-white h-[130px]">
        <nav className="">
          <div className="flex justify-between items-center w-full max-w-[1400px] px-[20px] mx-auto pt-4 pb-4 h-[75px]">
            <div className="flex items-center">
              <img src={logo} alt="" className="w-[120px]" />
              <h1 className="text-3xl font-bold">
                Ultra <span className="text-[#fbb71c]">Fit</span>
              </h1>
            </div>
            <div className="relative">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search..."
                className="border w-[470px] h-[45px] rounded-md px-5 text-gray-400 focus:border-[#fbb71c] focus:outline-none"
              />
              <Button className="bg-[#fbb71c] hover:bg-[#fbb71c] h-[45px] absolute top-0 right-0 rounded-l-none">
                <Search className="w-5" />
              </Button>
            </div>
            <div className="flex gap-3">
              <h1 className="inline-flex gap-2">
                <span>
                  <Truck className="w-5" />
                </span>
                Free Shipping
              </h1>
              <div className="border-l h-5 translate-y-1"></div>
              <h1 className="inline-flex gap-2">
                <span>
                  <MessageCircleQuestion className="w-5" />
                </span>
                Need Help
              </h1>
            </div>
          </div>
          <div className="bg-[#081047] ">
            <div className="flex items-center justify-between w-full max-w-[1400px] px-[20px] mx-auto h-[60px] ">
              <div className="flex items-center  gap-10">
                <div className="flex items-center ">
                  <div>
                    <MenuDropDown />
                  </div>
                  <h1>ALL CATEGORIES</h1>
                </div>
                <div className="border-l h-6 border-l-[#212e85]"></div>
                <ul className="flex gap-10">
                  <li>HOME</li>
                  <li>PRODUCTS</li>
                  <li>ABOUT</li>
                  <li>DASHBOARD</li>
                </ul>
              </div>
              <div className="flex gap-10">
                <Heart />
                <ShoppingCart />
                <User />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
