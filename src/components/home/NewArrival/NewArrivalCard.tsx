import { TProduct } from "@/types/dataType";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NewArrivalCard = ({ product }: { product: TProduct }) => {
  const [currentImage, setCurrentImage] = useState(product.thumbnail);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (product.photos && product.photos.length > 0) {
      const img = new Image();
      img.src = product.photos[0];
    }
  }, [product.photos]);

  const handleInterMouseEvent = () => {
    if (product.photos && product.photos.length > 0) {
      setCurrentImage(product.photos[0]);
      setShow(true);
    }
  };

  const handleLeaveMouseEvent = () => {
    if (product.photos && product.photos.length > 0) {
      setCurrentImage(product.thumbnail);
      setShow(false);
    }
  };

  return (
    <div
      onMouseEnter={handleInterMouseEvent}
      onMouseLeave={handleLeaveMouseEvent}
      className="mt-8"
    >
      <div className="w-[200px] h-[250px]">
        <div className="flex flex-col justify-center items-center pt-8">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            src={currentImage}
            alt={product.name}
            loading="lazy"
            className={`w-[140px] h-[130px] object-cover duration-500 transition-opacity`}
          />
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <Star className="w-4 h-4 text-prime fill-[#fbb71c]" />
              <Star className="w-4 h-4 text-prime fill-[#fbb71c]" />
              <Star className="w-4 h-4 text-prime fill-[#fbb71c]" />
              <Star className="w-4 h-4 text-prime fill-[#fbb71c]" />
              <Star className="w-4 h-4 text-prime fill-[#fbb71c]" />
            </div>
            <h1 className="mt-2">{product.name}</h1>
            <h1 className="text-prime font-semibold text-center mt-3">
              ${product.price}
            </h1>
            {show === true && (
              <motion.div
                initial={{ y: 5 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center items-center gap-4 mt-4 shrink-0"
              >
                <span className=" bg-[#0c1555] w-[35px] h-[35px] rounded-md flex justify-center items-center shrink-0">
                  <ShoppingCart className="text-white w-4 h-4" />
                </span>
                <span className=" bg-[#0c1555] w-[35px] h-[35px] rounded-md flex justify-center items-center shrink-0">
                  <Heart className="text-white w-4 h-4" />
                </span>
                <span className=" bg-[#0c1555] w-[35px] h-[35px] rounded-md flex justify-center items-center shrink-0">
                  <Eye className="text-white w-4 h-4" />
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalCard;
