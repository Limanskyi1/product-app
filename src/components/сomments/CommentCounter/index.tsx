import { IComment } from '../../../types';
import classes from './CommentCounter.module.scss';

interface CommentCounterProps{
    comments:IComment[]
} 
export const CommentCounter = ({comments = []}:CommentCounterProps) => {
  return (
    <div className={classes.comment}>
      <img src="/comment-icon.svg" alt="" />
      <span>{comments.length > 0 ? comments.length : 0}</span>
    </div>
  );
};
