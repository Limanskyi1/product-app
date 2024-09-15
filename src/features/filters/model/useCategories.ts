import { useAppContext } from "@/shared/hooks";
import { ICategory } from "./types";

export const useCategories = () => {
  const { setUrl, setActiveCategory } = useAppContext();

  const handleClickTag = async (tag: ICategory) => {
    setActiveCategory(tag);
    const tagToLowerCase = tag.toLowerCase();
    if (tagToLowerCase === "all") {
      setUrl("?status=suggestion");
      return;
    }
    setUrl(`?status=suggestion&category=${tagToLowerCase}`);
  };

  return {
    handleClickTag,
  };
};
