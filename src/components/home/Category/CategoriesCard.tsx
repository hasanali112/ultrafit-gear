import { TCategory } from "./Categories";

const CategoriesCard = ({ category }: { category: TCategory }) => {
  return (
    <div className="bg-[#f1f2f6] w-[210px] h-[210px] shrink-0 rounded-lg">
      <div className="flex flex-col justify-center items-center pt-4">
        <img
          src={category.thumbnail}
          alt=""
          className="object-cover w-[130px] h-[130px] hover:scale-110 cursor-pointer duration-500 transition-all relative z-20"
        />
        <div>
          <h1 className="font-semibold mt-5">{category.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
