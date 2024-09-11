import Container from "@/components/shared/Container";
import advatise from "@/assets/banner_v3.1.webp";
import advatise1 from "@/assets/grid-2x2.webp";
import advatise2 from "@/assets/banner_v3.2.webp";
import advatise3 from "@/assets/banner_v3.3.webp";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Advatise = () => {
  return (
    <div className="mt-28">
      <Container className="grid grid-cols-2 gap-3">
        <motion.div className="relative overflow-hidden rounded-lg">
          <motion.img
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src={advatise}
            alt=""
            className="w-full h-[300px] rounded-lg"
          />
          <div className="w-full h-[300px] bg-black bg-opacity-60 absolute top-0 inset-0 "></div>
          <div className="absolute top-[29%] left-[10%]">
            <h3 className="text-prime font-semibold text-xl">
              40% off only today
            </h3>
            <h1 className="text-white font-bold text-4xl mt-4 hover:text-prime">
              Sports Clothing
            </h1>
            <Button className="bg-prime mt-5">Shop Now</Button>
          </div>
        </motion.div>
        <motion.div className="relative overflow-hidden rounded-lg">
          <motion.img
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src={advatise3}
            alt=""
            className="w-full h-[300px] rounded-lg"
          />
          <div className="w-full h-[300px] bg-black bg-opacity-60 absolute top-0 inset-0 "></div>
          <div className="absolute top-[29%] left-[10%]">
            <h3 className="text-prime font-semibold text-xl">
              Premium Quality
            </h3>
            <h1 className="text-white font-bold text-4xl mt-4 hover:text-prime">
              Gym Equipment
            </h1>
            <Button className="bg-prime mt-5">Shop Now</Button>
          </div>
        </motion.div>
        <motion.div className="relative overflow-hidden rounded-lg">
          <motion.img
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src={advatise1}
            alt=""
            className="w-full h-[300px] rounded-lg"
          />
          <div className="w-full h-[300px] bg-black bg-opacity-60 absolute top-0 inset-0 "></div>
          <div className="absolute top-[29%] left-[10%]">
            <h3 className="text-white font-semibold text-xl ml-[20%]">
              From <span className="text-3xl font-bold text-prime">$150</span>
            </h3>
            <h1 className="text-white font-bold text-4xl mt-4 hover:text-prime">
              Ultimate Leggings
            </h1>
            <Button className="bg-prime mt-5 ml-[30%]">Gear Up</Button>
          </div>
        </motion.div>
        <motion.div className="relative overflow-hidden rounded-lg">
          <motion.img
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src={advatise2}
            alt=""
            className="w-full h-[300px] rounded-lg"
          />
          <div className="w-full h-[300px] bg-black bg-opacity-60 absolute top-0 inset-0 "></div>
          <div className="absolute top-[29%] left-[10%] w-[80%]">
            <h3 className="text-white font-semibold text-xl text-right">
              New Arrivals <span className="text-prime">2024</span>
            </h3>
            <h1 className="text-white font-bold text-4xl mt-4 hover:text-prime text-right">
              Sports Clothing
            </h1>
            <div className="flex justify-end">
              <Button className="bg-prime mt-5 ">Shop Now</Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Advatise;
