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
    const newUpvoteState = !upvoted;
    const updatedUpvotes = newUpvoteState ? currentUpvotes + 1 : currentUpvotes - 1;
  
    setUpvoted(newUpvoteState);
    setCurrentUpvotes(updatedUpvotes);
  
    try {
      await productApi.upvoteProduct(productId, updatedUpvotes);
    } catch (error) {
      console.error('Upvote failed:', error);
      setUpvoted(upvoted); 
      setCurrentUpvotes(currentUpvotes);
    }
  };

  return (
    <div onClick={onClickUpvote} className={`${classes.upvote} ${className} ${upvoted ? classes.disabled : ""}`}>
      <img src={upvoted ? "/arrow-top-white.svg" : "/arrow-top.svg"} alt="icon arrow" />
      <span>{currentUpvotes}</span>
    </div>
  );
};
