import { productApi } from '@/shared/api/ProductApi';
import { useState } from 'react';

export const useUpvote = (upvotes:number,productId:string | number) => {
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

    return {
      onClickUpvote,
      upvoted,
      currentUpvotes
    };

};
