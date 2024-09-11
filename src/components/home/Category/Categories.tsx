import Container from "@/components/shared/Container";
import CategoriesCard from "./CategoriesCard";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCategoryGetQuery } from "@/redux/api/categoriesApi";

export type TCategory = {
  _id: string;
  name: string;
  slug: string;
  thumbnail: string;
};

const Categories = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data: categoryData, isLoading } = useCategoryGetQuery("");

  if (isLoading) {
    return <p>Lodaing</p>;
  }

  console.log(categoryData);

  const handleRightSide = () => {
    if (containerRef.current) {
      const cardWidth =
        containerRef.current.querySelector("div")?.clientWidth || 0;
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleLeftSide = () => {
    if (containerRef.current) {
      const cardWidth =
        containerRef.current.querySelector("div")?.clientWidth || 0;
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Container className="relative">
        <h1 className="mt-20 mb-10 text-4xl font-bold">Shop By Category</h1>
        <div className="group">
          <div ref={containerRef} className="flex gap-8 overflow-hidden">
            {categoryData.data.map((category: TCategory, index: number) => (
              <CategoriesCard category={category} key={index} />
            ))}
          </div>
          <span>
            <div className="hidden absolute top-[55%] group-hover:flex group-hover:justify-between  duration-700 transition-all w-[97%]">
              <button
                onClick={handleLeftSide}
                className="bg-[#fbb71c] w-[40px] h-[40px] rounded-full flex justify-center items-center"
              >
                <ChevronLeft className="text-white" />
              </button>
              <button
                onClick={handleRightSide}
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

export default Categories;
