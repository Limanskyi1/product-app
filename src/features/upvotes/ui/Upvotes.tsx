import { useUpvote } from "../model/useUpvotes";
import classes from "./Upvotes.module.scss";

export interface UpvotesProps {
  upvotes: number;
  className?: string;
  productId: string | number;
}

export const Upvotes = ({upvotes,productId,className = "",}: UpvotesProps) => {

  const { currentUpvotes, onClickUpvote, upvoted } = useUpvote(upvotes,productId);
  
  return (
    <div
      onClick={onClickUpvote}
      className={`${classes.upvote} ${className} ${ upvoted ? classes.disabled : ""}`}>
      <img src={upvoted ? "/arrow-top-white.svg" : "/arrow-top.svg"}alt="icon arrow"/>
      <span>{currentUpvotes}</span>
    </div>
  );
};
