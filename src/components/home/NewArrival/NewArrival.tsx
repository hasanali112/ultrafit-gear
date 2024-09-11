import Container from "@/components/shared/Container";
import { useState } from "react";
import NewArrivalCard from "./NewArrivalCard";

const products = [
  {
    id: 1,
    name: "Smartphone Pro Max",
    status: "popular",
    description:
      "High-end smartphone with a powerful processor and OLED display.",
    price: 999.99,
    category: "Electronics",
    image: "https://i.ibb.co/GRrFQtn/smartphone.jpg",
    stock: 50,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    status: "popular",
    description:
      "Noise-cancelling over-ear headphones with Bluetooth connectivity.",
    price: 199.99,
    category: "Accessories",
    image: "https://i.ibb.co/Zmb0jMp/headphones.jpg",
    stock: 120,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Gaming Laptop",
    status: "popular",
    description: "Powerful gaming laptop with high-end GPU and RGB keyboard.",
    price: 1599.99,
    category: "Computers",
    image: "https://i.ibb.co/DYY6ZFW/laptop.jpg",
    stock: 30,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Smartwatch Series 5",
    status: "popular",
    description: "Advanced smartwatch with health tracking features and GPS.",
    price: 299.99,
    category: "Wearables",
    image: "https://i.ibb.co/Q9dQ7K5/smartwatch.jpg",
    stock: 80,
    rating: 4.6,
  },
  {
    id: 5,
    name: "4K Ultra HD TV",
    status: "popular",
    description:
      "55-inch smart TV with 4K Ultra HD resolution and built-in apps.",
    price: 699.99,
    category: "Electronics",
    image: "https://i.ibb.co/ZJdpLbN/tv.jpg",
    stock: 40,
    rating: 4.9,
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    status: "new",
    description: "RGB backlit mechanical keyboard with programmable keys.",
    price: 129.99,
    category: "Accessories",
    image: "https://i.ibb.co/DLJ8sVP/keyboard.jpg",
    stock: 100,
    rating: 4.4,
  },
  {
    id: 7,
    name: "Wireless Mouse",
    status: "new",
    description: "Ergonomic wireless mouse with adjustable DPI settings.",
    price: 49.99,
    category: "Accessories",
    image: "https://i.ibb.co/YBv5fdG/mouse.jpg",
    stock: 200,
    rating: 4.3,
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    status: "new",
    description:
      "Portable Bluetooth speaker with deep bass and long battery life.",
    price: 89.99,
    category: "Audio",
    image: "https://i.ibb.co/syYQKpT/speaker.jpg",
    stock: 150,
    rating: 4.6,
  },
  {
    id: 9,
    name: "Action Camera",
    status: "new",
    description:
      "Waterproof action camera with 4K recording and wide-angle lens.",
    price: 249.99,
    category: "Cameras",
    image: "https://i.ibb.co/d0QmLzX/camera.jpg",
    stock: 60,
    rating: 4.7,
  },
  {
    id: 10,
    name: "Fitness Tracker",
    status: "new",
    description:
      "Wearable fitness tracker with heart rate monitor and step counter.",
    price: 79.99,
    category: "Wearables",
    image: "https://i.ibb.co/0FJswT2/fitnesstracker.jpg",
    stock: 90,
    rating: 4.5,
  },
];

const NewArrival = () => {
  const [sell, setSell] = useState("new");

  const selectedProduct = products.filter(
    (product) =>
      (sell === "new" && product.status === "new") ||
      (sell === "popular" && product.status === "popular") ||
      (sell === "topRated" && product.rating > 4.5)
  );

  return (
    <div className="mb-20">
      <Container className="mt-28  mb-5">
        <div>
          <div className="flex justify-between mb-4">
            <h1 className="text-4xl font-bold">Features Product</h1>
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
          <div className="border-b-2 border-b-gray-200 rounded-xl"></div>

          <div className="flex gap-5">
            {selectedProduct.slice(0, 6).map((product) => (
              <NewArrivalCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewArrival;
