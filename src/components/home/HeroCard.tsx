/* eslint-disable no-constant-condition */
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Container from "../shared/Container";

const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 0],

    transition: {
      ease: "easeInOut",
      duration: 5,
    },
  },
};

const images = [
  "https://img.freepik.com/free-photo/muscular-sportsman-building-biceps-with-dumbbell_7502-4784.jpg?t=st=1722094710~exp=1722098310~hmac=0e18ea0b77ae54d614ac482cfc9b2e5a76095fbaa7a1c9c1a0891e071b4819d0&w=996",
  "https://img.freepik.com/free-photo/portrait-young-sportive-girl-training-with-dumbbells-isolated-blue-background-neon_155003-45614.jpg?t=st=1722095761~exp=1722099361~hmac=6af6e1a6f5debd6a94bb2aa5c213a8c58723f2e1a48c856d71db7b71647f34ea&w=1060",
];

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
    <div className="bg-[#162f62] text-white ">
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
        <div className="absolute top-0 w-full h-[700px] bg-gradient-to-r from-[#162f62]  to-transparent ">
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
