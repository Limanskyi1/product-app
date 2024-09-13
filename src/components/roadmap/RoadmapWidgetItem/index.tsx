import { roadmapColors } from '../../../constants';
import { IProduct } from '../../../types';
import { formatString } from '../../../utils';
import classes from './RoadmapWidgetItem.module.scss';

interface IRoadmapWidgetItem{
    status:string;
    items:IProduct[]
}

export const RoadmapWidgetItem = ({status,items}:IRoadmapWidgetItem) => {
  return (
    <div className={classes.item}>
        <span style={{backgroundColor: roadmapColors[status]}} className={classes.ball}></span>
        <p className={classes.text}> {formatString(status)}</p>
        <span className={classes.count}>
          {items.length}
        </span>
    </div>
  )
}
