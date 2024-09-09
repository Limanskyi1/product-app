import { useState } from 'react';
import { productApi } from '../../api/ProductApi';
import classes from './Upvotes.module.scss';

interface UpvotesProps {
  upvotes: number;
  className?: string;
  productId: string | number;
}

export const Upvotes = ({ upvotes, className = "", productId }: UpvotesProps) => {
  const [upvoted, setUpvoted] = useState<boolean>(false);
  const [currentUpvotes, setCurrentUpvotes] = useState<number>(upvotes); 

  const onClickUpvote = async () => {
    if (upvoted) {
      return;
    }

    const updatedUpvotes = currentUpvotes + 1;

    try {
      setUpvoted(true);
      setCurrentUpvotes(updatedUpvotes);
      await productApi.upvoteProduct(productId, updatedUpvotes);
    } catch (error) {
      console.error(error);
      setUpvoted(false);
      setCurrentUpvotes(currentUpvotes);
    }
  };

  return (
    <div onClick={onClickUpvote} className={`${classes.upvote} ${className} ${upvoted ? classes.disabled : ""}`}>
      <img src={upvoted ? "/arrow-top-white.svg" : "/arrow-top.svg"} alt="icon arrow" />
      <span>{currentUpvotes}</span> {/* Используем текущее состояние апвоутов */}
    </div>
  );
};
