import benefitBanner from "@/assets/newsletter.jpg";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import dumble2 from "@/assets/money100.png";
import { CheckCheckIcon, Eye, Heart, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const dumble =
  "https://res.cloudinary.com/dq95fwkeq/image/upload/v1726055879/big-dumbbells-white-removebg-preview_jajzqi.png";

const Benefit = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(90), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[1000px] bg-[#f1f2f6] mt-20">
      <div className="relative">
        <img
          src={benefitBanner}
          alt=""
          className="w-full h-[600px] object-cover"
        />
        <div className="w-full h-[600px] absolute top-0 bg-[#151f5c] bg-opacity-60">
          <h1 className="text-4xl font-bold text-white text-center mt-40">
            Subscribe Our Newsletter!
          </h1>
          <p className="text-white text-center mt-4 w-[40%] mx-auto">
            Be the first to receive exclusive promotions, updates and product
            announcements. Subscribe to our mailing list now!
          </p>
          <div className="flex justify-center items-center mt-5 relative">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-[650px] h-[50px] rounded-md pl-4 focus:outline-none"
            />
            <Button className="bg-prime hover:bg-[#151f5c] h-[50px] absolute top-0 right-[25%] text-md rounded-l-none">
              Subcription Now!
            </Button>
          </div>
        </div>
      </div>
      <Container>
        <div className="bg-[#fff] w-[90%] h-[550px] absolute top-[40%] rounded-md">
          <div className="flex gap-10">
            <div className="relative">
              <img src={dumble} alt="" className="ml-16" />
              <img
                src={dumble2}
                alt=""
                className="w-[150px] h-[150px] absolute top-[30%] left-[66%]"
              />
            </div>
            <div className="mt-16">
              <div className="flex gap-2">
                <Star className="w-4 h-4 text-prime fill-[#fbb71c]" />
                <Star className="w-4 h-4 text-prime fill-[#fbb71c]" />
                <Star className="w-4 h-4 text-prime fill-[#fbb71c]" />
                <Star className="w-4 h-4 text-prime fill-[#fbb71c]" />
                <Star className="w-4 h-4 text-prime " />
              </div>

              <h1 className="text-4xl text-[#151f5c] font-bold mt-5 mb-5">
                Strength Training With Dumbbells
              </h1>
              <p className="text-[#151f5c] mt-5 mb-5 text-lg">
                $120 <span className="text-gray-400 line-through">$300</span>
              </p>
              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <span>
                    <CheckCheckIcon className="text-green-500" />
                  </span>
                  <span className="text-[#151f5c] text-[17px]">
                    Customizable Resistance
                  </span>
                </li>
                <li className="flex items-center gap-3 ">
                  <span>
                    <CheckCheckIcon className="text-green-500" />
                  </span>
                  <span className="text-[#151f5c] text-[17px]">
                    Space-Saving Design
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span>
                    <CheckCheckIcon className="text-green-500" />
                  </span>
                  <span className="text-[#151f5c] text-[17px]">
                    Full-Body Workouts
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span>
                    <CheckCheckIcon className="text-green-500" />
                  </span>
                  <span className="text-[#151f5c] text-[17px]">
                    {" "}
                    Durable Construction
                  </span>
                </li>
              </ul>
              <div className="mt-5">
                <Progress value={progress} className="w-[100%] h-[8px]" />
                <div className="flex justify-between mt-2">
                  <h3 className="text-gray-400">
                    Sold:{" "}
                    <span className="text-[#151f5c] font-semibold">1</span>
                  </h3>
                  <h3 className="text-gray-400">
                    Available:
                    <span className="text-[#151f5c] font-semibold">441</span>
                  </h3>
                </div>
                <div className="flex gap-4 mt-5">
                  <Button className="bg-transparent hover:bg-prime hover:text-white border text-[#151f5c] px-5 py-4">
                    ADD TO CART
                  </Button>
                  <span className="border rounded-md shrink-0 w-[40px] h-[40px] flex justify-center items-center hover:bg-prime hover:text-white cursor-pointer">
                    <Heart className="w-5 h-5" />
                  </span>
                  <span className="border rounded-md shrink-0 w-[40px] h-[40px] flex justify-center items-center hover:bg-prime hover:text-white cursor-pointer">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Benefit;
