import { FC} from "react";
import { getDelay } from "../../../shared/utils";
import classes from "./ProductsList.module.scss";
import { Product } from "@/entities/product";
import { Spinner } from "@/shared/ui/Spinner";
import { EmptyList } from "@/shared/ui/EmptyList";
import { useFetchProducts } from "../model/useFetchProducts";
import { FadeInItem, FadeInItemBottom } from "@/shared/libs/createMotionWrapper";

export const ProductsList:FC = () => {

  const {loading,suggestions} = useFetchProducts()

  if (loading) {
    return <Spinner className={classes.loader} />;
  }

  if (suggestions.length === 0) {
    return (
      <FadeInItem>
        <EmptyList />
      </FadeInItem>
    );
  }
  return (
    <div className={classes.productsList}>
      {suggestions.map((item, index) => (
        <FadeInItemBottom key={item.id} delay={getDelay(index)}>
          <Product
            upvotes={item.upvotes}
            title={item.title}
            description={item.description}
            category={item.category}
            comments={item.comments}
            id={item.id}
          />
        </FadeInItemBottom>
      ))}
    </div>
  );
};
