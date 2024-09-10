import { useEffect, useState } from "react";
import Container from "../shared/Container";
import { motion } from "framer-motion";

const TestHero = () => {
  const [imageIndex, setImgIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  const images = [
    {
      url: "https://i.ibb.co.com/V9gY2Fv/kettlebell-fitness-still-life.jpg",
      subTitle: "This Week Only",
      title: "Unleash the Athlete in You!",
      description:
        "Discover the ultimate collection of fitness equipment and accessories designed to take your workouts to the next level.  ",
      discount: "Get 30% off for this weeks",
    },
    {
      url: "https://i.ibb.co.com/YDMhp0Z/banner-hero1.jpg",
      subTitle: "Innovative Equipment",
      title: "Start Fitness Transformation!",
      description:
        "Step into a world of fitness possibilities with our cutting-edge equipment and accessories designed for every fitness level. ",
      discount: "Get 30% off on seleted items",
    },
    {
      url: "https://i.ibb.co.com/s25j43j/kettlebell-gym-equipment-still-life-23-2151739263.jpg",
      subTitle: "High-Performance ",
      title: "Unlock Your Full Potential",
      description:
        "Unleash your inner athlete with our top-tier fitness gear and accessories, meticulously crafted for high performance and durability. ",
      discount: "Get More Than 20% off",
    },
  ];

  useEffect(() => {
    setShowText(true);
    const textSlide = setInterval(() => {
      setShowText(false);
    }, 9900);

    const intervalRef = setInterval(() => {
      const nextIndex = imageIndex === images.length - 1 ? 0 : imageIndex + 1;
      setImgIndex(nextIndex);
    }, 10000);

    return () => {
      clearInterval(intervalRef);
      clearInterval(textSlide);
    };
  }, [imageIndex, images.length]);

  return (
    <div className="h-[600px] w-[100%] overflow-hidden relative">
      <div
        style={{
          backgroundImage: `url(${images[imageIndex].url})`,
        }}
        className="h-full  bg-center bg-cover duration-700 transition-all "
      >
        <div className=" bg-gradient-to-r from-[#0c1555] to-[#0c1555]/10 h-full w-full ">
          <Container className="lg:pt-40 md:pt-40 pt-28">
            {showText && (
              <motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  className={
                    imageIndex === 0 || imageIndex === 2
                      ? "lg:text-2xl text-xl font-semibold text-[#fbb71c] text-center lg:text-left"
                      : "lg:text-2xl text-xl font-semibold text-white text-center lg:text-left"
                  }
                >
                  {images[imageIndex].subTitle}
                </motion.h3>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.7, delay: 0.4 }}
                  className="lg:text-[45px] md:text-[40px] text-center lg:text-left text-4xl font-semibold text-white mt-5"
                >
                  {images[imageIndex].title}
                </motion.h1>
                <motion.h5
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.9, delay: 0.6 }}
                  className="lg:text-xl text-lg text-white mt-8 lg:w-[50%] md:mx-auto lg:mx-0 text-center lg:text-left md:w-[80%]"
                >
                  {images[imageIndex].description}
                </motion.h5>
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2.1, delay: 0.8 }}
                  className={
                    imageIndex === 0 || imageIndex === 3
                      ? "lg:text-2xl text-xl tracking-wider text-white mt-4 text-center lg:text-left"
                      : "lg:text-2xl text-xl tracking-wider text-[#fbb71c] mt-5 text-center lg:text-left"
                  }
                >
                  {images[imageIndex].discount}
                </motion.p>
                <div className="flex lg:justify-start justify-center items-center">
                  <motion.button
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.3, delay: 1 }}
                    className="w-[150px] h-[42px] text-lg text-white bg-[#ecb22b] rounded-lg mt-5 "
                  >
                    Shop Now
                  </motion.button>
                </div>
              </motion.div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default TestHero;
