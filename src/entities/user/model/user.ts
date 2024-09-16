import { IProduct } from "@/entities/product/model/types";

export interface IUser {
  image: string;
  name: string;
  username: string;
  likedProducts: IProduct['id'][];
}

export const currentUser: IUser = {
  image: "/user-images/image-zena.jpg",
  name: "Zena Kelley",
  username: "velvetround",
  likedProducts: [],
};
