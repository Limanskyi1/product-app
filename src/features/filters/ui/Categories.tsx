import classes from "./Categories.module.scss";
import { FC } from "react";
import { useAppContext } from "@/shared/hooks";
import { ICategory } from "../model/types";
import { categories } from "../constants/categories";
import { formatString } from "@/shared/utils";
import { useCategories } from "../model/useCategories";

export const Categories: FC = () => {
  const { activeCategory } = useAppContext();
  const { handleClickTag } = useCategories();

  const setActiveClass = (tag: string) => {
    return tag === activeCategory ? `${classes.activeTag}` : "";
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
