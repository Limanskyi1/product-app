import { SortType } from "../model/sort";


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
