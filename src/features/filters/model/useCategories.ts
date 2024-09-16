import { useAppContext } from "@/shared/hooks";
import { ICategory } from "./types";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

export const useCategories = () => {
  const navigate = useNavigate();

  const { setActiveCategory } = useAppContext();

  const updateQueryParams = (newParams: { [key: string]: string }) => {
    const parsedParams = queryString.parse(location.search);
    const updatedParams = {
      ...parsedParams,
      ...newParams,
    };
    const filteredParams = Object.fromEntries(
      Object.entries(updatedParams).filter(
        ([_, value]) => value !== "" && value !== undefined && value !== null
      )
    );
    const queryStringified = queryString.stringify(filteredParams);
    navigate(`${location.pathname}?${queryStringified}`);
  };

  const handleClickTag = async (tag: ICategory) => {
    setActiveCategory(tag);
    const tagToLowerCase = tag.toLowerCase();
    if (tagToLowerCase === "all") {
      updateQueryParams({ category: "" });
      return;
    }

    updateQueryParams({ category: tagToLowerCase });
  };

  return {
    handleClickTag,
  };
};
