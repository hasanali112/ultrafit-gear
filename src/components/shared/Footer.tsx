import Container from "./Container";
import logo from "@/assets/ultragear.png";
import footerBanner from "@/assets/newsletter.jpg";
import { Dot, Facebook, Instagram, Linkedin, Twitch } from "lucide-react";
import { infoList, policyList } from "@/utils/utils";
import visa from "@/assets/payment/visa.png";
import mastercard from "@/assets/payment/mastercard.png";
import paypal from "@/assets/payment/paypal.png";
import visaa from "@/assets/payment/visaa.png";
import app from "@/assets/payment/app.png";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          backgroundImage: `url(${footerBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="mt-20 h-[400px]  relative"
      >
        <Container className="relative z-10">
          <div className="grid grid-cols-4 gap-3 items-center">
            <div className="flex flex-col ">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt=""
                  className="lg:w-[80px] w-[80px] -translate-x-[10px]"
                />
                <h1 className="lg:text-2xl text-[28px] font-bold text-white">
                  Ultra <span className="text-[#fbb71c]">Fit</span>
                </h1>
              </div>
              <div>
                <h1 className="text-md  text-white -mt-2">
                  456 Elm Street, Suite 3
                </h1>
                <h1 className="text-md  text-white mt-2">CA 90001, USA.</h1>
                <h1 className="text-white mt-2">Phone: +184764789</h1>
                <h1 className="text-white mt-2">ultrafit@gmail.com</h1>
              </div>
            </div>
            {/* div-2 */}
            <div className="mt-20">
              <h1 className="text-2xl font-semibold text-white">Information</h1>
              <ul className="mt-3 flex flex-col">
                {policyList.map((list) => (
                  <span className="group">
                    <li className="text-gray-300 cursor-pointer -translate-x-6 group-hover:text-prime group-hover:-translate-x-[5px] duration-500 inline-flex items-center">
                      <span className="text-4xl opacity-0 group-hover:opacity-100 duration-500">
                        <Dot />
                      </span>{" "}
                      {list}
                    </li>
                  </span>
                ))}
              </ul>
            </div>

            {/* div-4 */}
            <div className="mt-20">
              <h1 className="text-2xl font-semibold text-white">Our Policy</h1>
              <ul className="mt-3 flex flex-col">
                {infoList.map((list) => (
                  <span className="group">
                    <li className="text-gray-300 cursor-pointer -translate-x-6 group-hover:text-prime group-hover:-translate-x-[5px] duration-500 inline-flex items-center">
                      <span className="text-4xl opacity-0 group-hover:opacity-100 duration-500">
                        <Dot />
                      </span>{" "}
                      {list}
                    </li>
                  </span>
                ))}
              </ul>
            </div>
            {/* div-3 */}
            <div className="mt-10">
              <h1 className="text-2xl font-semibold text-white">
                Payment Method
              </h1>
              <ul className="mt-3 flex flex-col">
                <div className="flex gap-2">
                  <img src={visa} alt="visa" />
                  <img src={mastercard} alt="visa" />
                  <img src={paypal} alt="visa" />
                  <img src={visaa} alt="visa" />
                  <img src={app} alt="visa" />
                </div>
                <h1 className="text-xl font-semibold text-white mt-10">
                  Follow us
                </h1>
                <div className="flex gap-2 mt-5">
                  <span className="bg-[#2f45cf] text-white p-1 rounded-md">
                    <Facebook />
                  </span>
                  <span className="bg-[#2f45cf] text-white p-1 rounded-md">
                    <Twitch />
                  </span>
                  <span className="bg-[#2f45cf] text-white p-1 rounded-md">
                    <Instagram />
                  </span>
                  <span className="bg-[#2f45cf] text-white p-1 rounded-md">
                    <Linkedin />
                  </span>
                </div>
              </ul>
            </div>
          </div>
          <div className="border-b border-dashed mt-4"></div>
          <p className="text-center text-white mt-3">
            Copyright © 2024 UltraFit. All rights reserved by Themetechmount.
          </p>
        </Container>
        <div className="bg-gradient-to-t from-[#202c85] to-[#0b134e]/80 absolute top-0 w-full bg-opacity-90 h-[400px] "></div>
      </div>
    </footer>
  );
};

export default Footer;
