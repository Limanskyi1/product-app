import { useAppContext } from "@/shared/hooks";
import { useState } from "react";
import { sortArray } from "../constants/sortArray";
import { SortType } from "./sort";

export const useSort = () => {
  const { setSortParams } = useAppContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sortValue, setSortValue] = useState<string>(sortArray[0].value);

  const toggleSortMenu = () => setIsOpen((prev) => !prev);

  const handleClickSortItem = (sortValue: SortType) => {
    setSortParams(sortValue.params);
    setSortValue(sortValue.value);
  };

  return {
    handleClickSortItem,
    sortValue,
    isOpen,
    setIsOpen,
    toggleSortMenu,
  }
};
