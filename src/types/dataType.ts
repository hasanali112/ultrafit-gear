export type TProduct = {
  _id: string;
  name: string;
  slug: string;
  thumbnail: string;
  photos: string[];
  description: string;
  categories: string;
  price: number;
  discount: number;
  stockStatus: boolean;
  status: "active" | "inactive";
  productStatus: "new" | "popular";
  flashSale: boolean;
  totalReview: number;
};
