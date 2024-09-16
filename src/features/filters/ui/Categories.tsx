import { FC, useEffect } from "react";
import { useAppContext } from "@/shared/hooks";
import { ICategory } from "../model/types";
import { categories } from "../constants/categories";
import { formatString } from "@/shared/utils";
import { useCategories } from "../model/useCategories";
import classes from "./Categories.module.scss";
import queryString from "query-string";

export const Categories: FC = () => {
  const { activeCategory ,setActiveCategory} = useAppContext();
  const { handleClickTag } = useCategories();


  useEffect(() => {
    const parsedParams = queryString.parse(location.search);
    const { category } = parsedParams;
    if(category){
      setActiveCategory(category as ICategory);
    } else {
      setActiveCategory("all" as ICategory);
    }
  },[])

  const setActiveClass = (tag: string) => {
    return tag.toLowerCase() === activeCategory?.toLowerCase() ? `${classes.activeTag}` : "";
  };

  return (
    <ul className={classes.tags}>
      {["all", ...categories].map((category) => (
        <li
          onClick={() => handleClickTag(category as ICategory)}
          className={setActiveClass(category)}
          key={category}
        >
          {formatString(category)}
        </li>
      ))}
    </ul>
  );
};
