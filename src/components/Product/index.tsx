import { FC } from "react";
import { IComment } from "../../types";
import { formatString } from "../../utils";
import classes from "./Product.module.scss";
import { CommentCounter, Upvotes } from "../index";
import { Link } from "react-router-dom";

interface IProductProps {
  upvotes: number;
  title: string;
  description: string;
  category: string;
  className?: string;
  comments?: IComment[];
  id: string | number;
}

export const Product: FC<IProductProps> = ({
  upvotes,
  title,
  description,
  category,
  comments = [],
  className = "",
  id,
}) => {
  return (
    <div className={`${classes.product} ${className}`}>
      <Upvotes upvotes={upvotes} productId={id} />
      <div className={classes.productInfo}>
        <Link className={classes.titleLink} to={`/details/${id}`}>
          {title}
        </Link>
        <p>{description}</p>
        <span>{formatString(category)}</span>
      </div>
      <Link className={classes.commentsLink} to={`/details/${id}`}>
        <CommentCounter comments={comments} />
      </Link>
    </div>
  );
};
