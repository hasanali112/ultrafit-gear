import Container from "@/components/shared/Container";
import { useProductGetQuery } from "@/redux/api/productApi";
import { TProduct } from "@/types/dataType";
import NewArrivalCard from "../NewArrival/NewArrivalCard";
import { useEffect, useMemo, useRef } from "react";
import { handleSlider } from "@/utils/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Trending = () => {
  const { data, isLoading } = useProductGetQuery("");
  const containerRef = useRef<HTMLDivElement>(null);

  const seletedProduct = useMemo(() => {
    if (!data) {
      return [];
    }
    return data.data.filter(
      (product: TProduct) => product.productStatus === "popular"
    );
  }, [data]);

  useEffect(() => {
    const container = containerRef.current;

    if (container && container.scrollWidth > container.clientWidth) {
      const scrollInterval = setInterval(() => {
        const boxWidth = container.clientWidth;

        if (container.scrollLeft <= 0) {
          container.scrollTo({
            left: container.scrollWidth,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({ left: -boxWidth, behavior: "smooth" });
        }
      }, 5000);

      return () => clearInterval(scrollInterval);
    }
  }, [seletedProduct]);

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <div className="pt-20  ">
      <Container className="relative ">
        <div>
          <div className="">
            <h1 className="text-3xl font-bold">Top Products</h1>
            <div className="w-[200px] h-[4px] bg-prime mt-1"></div>
          </div>
          <div className="border-b-2 border-b-gray-200 rounded-xl"></div>

          <div ref={containerRef} className="flex overflow-hidden ">
            {seletedProduct.map((product: TProduct, index: number) => (
              <div key={product._id} className="flex items-center">
                <NewArrivalCard product={product} />

                {index !== seletedProduct.slice(0, 12).length - 1 && (
                  <div className="h-[170px] w-[1px] bg-gray-300 mx-4"></div>
                )}
              </div>
            ))}
          </div>
          <span>
            <div className=" absolute top-[55%] flex justify-between  duration-700 transition-all w-[97%]">
              <button
                onClick={() => handleSlider(containerRef, "right")}
                className="bg-[#fbb71c] w-[40px] h-[40px] rounded-full flex justify-center items-center"
              >
                <ChevronLeft className="text-white" />
              </button>
              <button
                onClick={() => handleSlider(containerRef, "left")}
                className="bg-[#fbb71c] w-[40px] h-[40px] rounded-full flex justify-center items-center"
              >
                <ChevronRight className="text-white" />
              </button>
            </div>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Trending;
