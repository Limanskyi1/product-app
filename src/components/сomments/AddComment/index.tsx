
import classes from './AddComment.module.scss';
import { Button } from '../../index';
import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

interface IAddComment {
  commentText:string;
  setCommentText:Dispatch<SetStateAction<string>>;
  onClickPost:() => void;
}

export const AddComment:FC<IAddComment> = ({commentText,setCommentText,onClickPost}) => {

  return (
    <div className={classes.wrap}>
      <h4 className={classes.title}>Add Comment</h4>
      <textarea onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setCommentText(e.target.value)} value={commentText} className={classes.textarea} placeholder='Type your comment here'></textarea>
      <div className={classes.bottom}>
        <p className={classes.text}>250 Characters left</p>
        <Button onClick={onClickPost} text='Post Comment' className='addFeedbackBtn'/>
      </div>
    </div>
  )
}
