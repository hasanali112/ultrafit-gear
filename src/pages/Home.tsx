import Advatise from "@/components/home/Advatise/Advatise";
import Categories from "@/components/home/Category/Categories";
import HeroSection from "@/components/home/HeroSection";
import NewArrival from "@/components/home/NewArrival/NewArrival";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Advatise />
      <NewArrival />
    </div>
  );
};

export default Home;
