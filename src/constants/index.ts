import { ITag, NewFeedback, SortType } from "../types";

export const tags: ITag[] = [
  "All",
  "UI",
  "UX",
  "Enhancement",
  "Bug",
  "Feature",
];

export const sortArray: SortType[] = [
  {
    params: "&sortBy=upvotes&order=desc",
    value: "Most Upvotes",
  },
  {
    params: "&sortBy=upvotes&order=asc",
    value: "Least Upvotes",
  },
  {
    params: "&sortBy=comments&order=desc",
    value: "Most Comments",
  },
  {
    params: "&sortBy=comments&order=asc",
    value: "Least Comments",
  },
];

export const categories: string[] = ["Feature", "UI", "UX", "Enhancement", "Bug"];
export const statuses:string[] = ["suggestion","planned","in-progress","live"];



export const roadmapColors:{[key:string]:string} = {
  "planned":"#F49F85",
  "in-progress":"#AD1FEA",
  "live":"#62BCFA",
}

export const newFeedback: NewFeedback = {
  category: "",
  title: "",
  description: "",
  upvotes: 0,
  status: "suggestion",
  comments: [],
};

// Anims
export const fadeInBottom = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

export const fadeInTop = {
  initial: { opacity: 0 , y: -40},
  animate: { opacity: 1 , y: 0},
  exit: { opacity: 0 },
  transition: { duration: 0.6 },
};