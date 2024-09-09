import { useRef, useState } from "react";
import { sortArray } from "../../constants";
import { SortType } from "../../types";
import classes from "./Navbar.module.scss";
import { useAppContext, useOutsideClick } from "../../hooks";

export const Sort = () => {
  const { setSortParams } = useAppContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sortValue, setSortValue] = useState<string>(sortArray[0].value);
  const sortRef = useRef(null);
  useOutsideClick(sortRef,() => setIsOpen(false))

  const toggleSortMenu = () => setIsOpen((prev) => !prev);

  const renderSortValue = () => (
    <div className={classes.defaultValue}>
      <p>
        <span>Sort by : </span>
        {sortValue}
      </p>
      <img src="/arrow-sort.svg" alt="icon arrow" />
    </div>
  );

  const handleClickSortItem = (sortValue: SortType) => {
    setSortParams(sortValue.params);
    setSortValue(sortValue.value);
  };

  const renderOptions = () =>
    sortArray.map((sort) => (
      <li
        key={sort.value}
        className={sort.value === sortValue ? `${classes.activeOption}` : ""}
        onClick={() => handleClickSortItem(sort)}
      >
        {sort.value}
      </li>
    ));

  return (
    <div ref={sortRef}
      className={`${classes.sort} ${isOpen ? `${classes.sortActive}` : ""}`} onClick={toggleSortMenu}>
      {renderSortValue()}
      <ul className={classes.sortMenu}>{renderOptions()}</ul>
    </div>
  );
};
