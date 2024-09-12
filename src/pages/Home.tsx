import Advatise from "@/components/home/Advatise/Advatise";
import Benefit from "@/components/home/Benefit/Benefit";
import Categories from "@/components/home/Category/Categories";
import HeroSection from "@/components/home/HeroSection";
import NewArrival from "@/components/home/NewArrival/NewArrival";
import Trending from "@/components/home/Trending/Trending";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Advatise />
      <NewArrival />
      <Trending />
      <Benefit />
    </div>
  );
};

export default Home;
