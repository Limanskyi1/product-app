import { FC} from "react";
import { getDelay } from "../../../shared/utils";
import { Product } from "@/entities/product";
import { Spinner } from "@/shared/ui/Spinner";
import { EmptyList } from "@/shared/ui/EmptyList";
import { FadeInItem, FadeInItemBottom } from "@/shared/libs/createMotionWrapper";
import { IProduct } from "../model/types";
import classes from "./ProductsList.module.scss";

interface IProductsList {
  loading: boolean;
  products: IProduct[];
}

export const ProductsList:FC<IProductsList> = ({loading,products}) => {

  if (loading) {
    return <Spinner className={classes.loader} />;
  }

  if (products.length === 0) {
    return (
      <FadeInItem>
        <EmptyList />
      </FadeInItem>
    );
  }
  return (
    <div className={classes.productsList}>
      {products.map((item, index) => (
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
