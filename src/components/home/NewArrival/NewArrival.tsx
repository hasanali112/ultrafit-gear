import Container from "@/components/shared/Container";
import { useState } from "react";
import NewArrivalCard from "./NewArrivalCard";
import { useProductGetQuery } from "@/redux/api/productApi";
import { TProduct } from "@/types/dataType";

const NewArrival = () => {
  const [sell, setSell] = useState("new");
  const { data, isLoading } = useProductGetQuery("");

  if (isLoading) {
    return <p>Loading..</p>;
  }

  const products = data.data;

  const selectedProduct = products.filter(
    (product: TProduct) =>
      (sell === "new" && product.productStatus === "new") ||
      (sell === "popular" && product.productStatus === "popular") ||
      (sell === "topRated" && product.totalReview > 200)
  );

  return (
    <div>
      <Container className="pt-36  mb-5">
        <div>
          <div className="flex justify-between ">
            <h1 className="text-3xl font-bold">Features Product</h1>
            <div className="flex gap-5 items-center">
              <button
                onClick={() => setSell("new")}
                className={sell === "new" ? "text-[#fbb71c]" : "text-gray-600"}
              >
                New Product
              </button>
              <button
                onClick={() => setSell("popular")}
                className={
                  sell === "popular" ? "text-[#fbb71c]" : "text-gray-600"
                }
              >
                Popular
              </button>
              <button
                onClick={() => setSell("topRated")}
                className={
                  sell === "topRated" ? "text-[#fbb71c]" : "text-gray-600"
                }
              >
                Top Rated
              </button>
            </div>
          </div>
          <div className="w-[200px] h-[4px] bg-prime mt-1"></div>
          <div className="border-b-2 border-b-gray-200 rounded-xl"></div>

          <div className="flex ">
            {selectedProduct
              .slice(0, 5)
              .map((product: TProduct, index: number) => (
                <div key={product._id} className="flex items-center">
                  <NewArrivalCard product={product} />

                  {index !== selectedProduct.slice(0, 6).length - 1 && (
                    <div className="h-[170px] w-[1px] bg-gray-300 mx-4"></div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewArrival;
