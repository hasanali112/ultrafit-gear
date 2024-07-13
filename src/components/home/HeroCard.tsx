/* eslint-disable no-constant-condition */
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Container from "../shared/Container";
import hero from "@/assets/hero3.png";
import hero1 from "@/assets/hero4.png";

const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 0],

    transition: {
      ease: "easeInOut",
      duration: 10,
    },
  },
};

const images = [hero, hero1];

const HeroCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start("visible");
        await controls.start("hidden");
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }
    };
    sequence();
  }, [controls]);

  return (
    <div className="bg-[#191e20] text-white">
      <div className="relative">
        <div>
          <motion.img
            src={images[currentImage]}
            alt=""
            className="w-full object-cover object-right h-[700px]"
            initial="hidden"
            animate={controls}
            variants={parent}
          />
        </div>
        <div className="absolute top-0 w-full h-[700px] bg-gradient-to-r from-black via-black/80 to-transparent">
          <Container>
            <motion.h1
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold mt-40"
            >
              Welcome to ulte gear
            </motion.h1>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
