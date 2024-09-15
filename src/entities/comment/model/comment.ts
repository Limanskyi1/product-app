import { IUser } from "@/entities/user/model/user";


export interface IComment {
  id: string;
  content: string;
  user: IUser;
}
