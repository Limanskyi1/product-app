import { IComment } from "@/entities/comment/model/comment";
import { ICategory } from "@/features/filters/model/types";
import { StatusType } from "@/features/sortProducts/model/sort";

export interface IProduct {
  id: number | string;
  title: string;
  category: ICategory;
  upvotes: number;
  status: StatusType | string;
  description: string;
  comments?: IComment[];
}
