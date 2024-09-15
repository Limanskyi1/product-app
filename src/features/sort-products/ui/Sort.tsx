
import { useOutsideClick } from "@/shared/hooks";
import { useRef } from "react";
import { useSort } from "../model/useSort";
import classes from "@/widgets/navbar/ui/Navbar.module.scss";
import { sortArray } from "../constants/sortArray";

export const Sort = () => {
  const { sortValue, isOpen, handleClickSortItem, setIsOpen, toggleSortMenu } = useSort();
  const sortRef = useRef(null);
  useOutsideClick(sortRef, () => setIsOpen(false));

  return (
    <div
      ref={sortRef}
      className={`${classes.sort} ${isOpen ? `${classes.sortActive}` : ""}`}
      onClick={toggleSortMenu}
    >
      <div className={classes.defaultValue}>
        <p>
          <span>Sort by : </span>
          {sortValue}
        </p>
        <img src="/arrow-sort.svg" alt="icon arrow" />
      </div>
      <ul className={classes.sortMenu}>
        {sortArray.map((sort) => (
          <li
            key={sort.value}
            className={sort.value === sortValue ? `${classes.activeOption}` : ""}
            onClick={() => handleClickSortItem(sort)}
          >
            {sort.value}
          </li>
        ))}
      </ul>
    </div>
  );
};
