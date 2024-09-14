import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import gal1 from "@/assets/gellary/gellary1.jpg";
import gal2 from "@/assets/gellary/gellary2.jpg";
import gal3 from "@/assets/gellary/gellary3.jpg";
import gal4 from "@/assets/gellary/gellary4.jpg";
import gal5 from "@/assets/gellary/gellary5.jpg";
import gal6 from "@/assets/gellary/gellary6.jpg";
import { motion } from "framer-motion";

const Gellary = () => {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");
  const [imageNo, setImageNo] = useState(1);

  const handleModal = (galImage: string, imageNumber: number) => {
    setModal(true);
    setImage(galImage);
    setImageNo(imageNumber);
  };

  return (
    <div className="mt-28">
      <Container>
        <h1 className="text-4xl font-bold text-center">
          Captured Moments From Customers
        </h1>
        <div className="grid grid-cols-12 gap-4 mt-16 relative">
          <div
            onClick={() => handleModal(gal1, 1)}
            className="col-span-4  w-full h-[300px] rounded-lg cursor-pointer"
          >
            <img src={gal1} alt="" className="h-full rounded-lg" />
          </div>
          <div
            onClick={() => handleModal(gal2, 2)}
            className="col-span-4  w-full h-[500px] rounded-lg cursor-pointer"
          >
            <img
              src={gal2}
              alt=""
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div
            onClick={() => handleModal(gal4, 3)}
            className="col-span-4  w-full h-[300px] rounded-lg cursor-pointer"
          >
            <img src={gal4} alt="" className="h-full rounded-lg" />
          </div>
          <div
            onClick={() => handleModal(gal6, 4)}
            className="col-span-4  w-full h-[500px] rounded-lg -mt-[200px] cursor-pointer"
          >
            <img
              src={gal6}
              alt=""
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div
            onClick={() => handleModal(gal3, 5)}
            className="col-span-4  w-full h-[300px] rounded-lg cursor-pointer"
          >
            <img src={gal3} alt="" className="h-full rounded-lg" />
          </div>
          <div
            onClick={() => handleModal(gal5, 6)}
            className="col-span-4  w-full h-[500px] rounded-lg -mt-[200px] cursor-pointer"
          >
            <img
              src={gal5}
              alt=""
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
        {modal && (
          <div
            onClick={() => setModal(false)}
            className="fixed z-50 inset-0 bg-black/90"
          >
            <div className="flex justify-between items-center gap-10 px-10 pt-5">
              <div>
                <h2 className="text-white text-xl font-semibold">
                  {imageNo}/6
                </h2>
              </div>
              <Button
                onClick={() => setModal(false)}
                className="bg-transparent hover:bg-transparent"
              >
                <X />
              </Button>
            </div>
            <div className="flex justify-center items-center pt-28">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                onClick={(e) => e.stopPropagation()}
                src={image}
                alt=""
                className="w-[500px] h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Gellary;
