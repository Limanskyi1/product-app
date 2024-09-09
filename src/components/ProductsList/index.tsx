import { FC } from "react";
import { IProduct } from "../../types";
import { Product } from "../Product";
import { FadeInItemBottom, FadeInItem } from "../../libs";
import { getDelay } from "../../utils";
import classes from "./ProductsList.module.scss";
import { EmptyList, Spinner } from "..";

interface IProductsList {
  products: IProduct[];
  loading: boolean;
}

export const ProductsList: FC<IProductsList> = ({ products, loading }) => {
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
