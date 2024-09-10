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
import NavbarDailog from "./navbarComponent/NavbarDailog";
import NavbarMenu from "./navbarComponent/NavbarMenu";

const Navbar = () => {
  return (
    <>
      <header className="bg-[#0c1555] text-white h-[140px] relative z-10">
        <nav>
          <div className="flex  justify-between items-center w-full max-w-[1400px] px-[20px] mx-auto pt-4 pb-4 h-[75px]">
            <div className="flex items-center">
              <img
                src={logo}
                alt=""
                className="lg:w-[120px] w-[80px] -translate-x-[10px]"
              />
              <h1 className="lg:text-3xl text-[28px] font-bold ">
                Ultra <span className="text-[#fbb71c]">Fit</span>
              </h1>
            </div>
            {/* for larger device */}
            <div className="relative hidden md:block lg:block">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search..."
                className="border  lg:w-[470px] h-[45px] rounded-md px-5 text-gray-400 focus:border-[#fbb71c] focus:outline-none"
              />
              <Button className="bg-[#fbb71c] hover:bg-[#fbb71c] h-[45px] absolute top-0 right-0 rounded-l-none ">
                <Search className="w-5" />
              </Button>
            </div>
            {/* for small device */}
            <div className="block md:hidden lg:hidden">
              <NavbarDailog />
            </div>
            <span className="block md:hidden lg:hidden">
              <NavbarMenu />
            </span>
            <span className="hidden md:block lg:block">
              <div className="flex lg:gap-2 md:gap-5">
                <h1 className="inline-flex gap-2">
                  <span>
                    <Truck className="w-5" />
                  </span>
                  <span className="md:hidden lg:block">Free Shipping</span>
                </h1>
                <div className="border-l h-5 translate-y-1 hidden md:block lg:block"></div>
                <h1 className="inline-flex gap-1">
                  <span>
                    <MessageCircleQuestion className="w-5" />
                  </span>
                  <span className="md:hidden lg:block"> Need Help</span>
                </h1>
              </div>
            </span>
          </div>
          <div className="bg-[#081047]">
            <div className="flex items-center justify-between w-full max-w-[1400px] px-[20px] mx-auto h-[65px] relative z-20">
              <div className="flex items-center  gap-10">
                <div className="flex items-center -translate-x-[18px]">
                  <div>
                    <MenuDropDown />
                  </div>
                  <h1 className="">ALL CATEGORIES</h1>
                </div>
                <div className="border-l h-6 border-l-[#212e85] hidden md:block lg:block"></div>
                <span className="hidden md:block lg:block">
                  <ul className="flex lg:gap-10 md:gap-5">
                    <li>HOME</li>
                    <li>PRODUCTS</li>
                    <li>ABOUT</li>
                    <li>DASHBOARD</li>
                  </ul>
                </span>
              </div>
              <div className="flex gap-3">
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
