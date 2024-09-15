
import { FC } from 'react';
import classes from "@/widgets/navbar/ui/Navbar.module.scss";

interface ISuggestions{
  count:number;
}
export const Suggestions:FC<ISuggestions> = ({count}) => {
  
  return (
    <div className={classes.suggestions}>
        <img src="/suggestions-icon.svg" alt="icon suggestions" />
        <p>{count} Suggestions</p>
    </div>
  )
}
