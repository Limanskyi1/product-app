
import { Link } from 'react-router-dom';
import { CommentCounter, Upvotes } from '../..';
import { roadmapColors } from '../../../constants';
import { IComment } from '../../../types';
import classes from './RoadmapProduct.module.scss';
import { formatString } from '../../../utils';

interface RoadmapProductProps {
  status:string;
  title:string;
  description:string;
  category:string;
  upvotes:number;
  comments: IComment[];
  id:string | number;
}

export const RoadmapProduct = ({status,title,description,category,upvotes,comments,id}:RoadmapProductProps) => {
  return (
    <div className={classes.product}>
        <span style={{backgroundColor: roadmapColors[status]}} className={classes.bar}></span>
        <div className={classes.status}>
            <span style={{backgroundColor: roadmapColors[status]}}></span>
            <p>{formatString(status)}</p>
        </div>
        <Link className={classes.title} to={`/details/${id}`}>
          <h4>{title}</h4>
        </Link>
        <p className={classes.description}>{description}</p>
        <span className={classes.tag}>{formatString(category)}</span>
        <div className={classes.bottom}>
          <Upvotes productId={id} upvotes={upvotes} className={classes.upvote}/>
          <CommentCounter comments={comments}/>
        </div>
    </div>
  )
}
