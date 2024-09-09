export type ITag = "All" | "UI" | "UX" | "Enhancement" | "Bug" | "Feature";
export type StatusType = "suggestion" | "planned" | "in-progress" | "live";

export interface IReply {
  content:string;
  replyingTo:string;
  user:IUser;
}

export interface IComment {
  id: string;
  content: string;
  user: IUser;
  replies?: IReply[];
}

export interface IUser {
  image: string;
  name: string;
  username: string;
}

export interface IProduct {
  id: number | string;
  title: string;
  category: string;
  upvotes: number;
  status: StatusType | string;
  description: string;
  comments?: IComment[];
}

export type SortType = {
  params: string;
  value: string;
};

export type NewFeedback = Omit<IProduct, 'id'>;
