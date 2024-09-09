import { roadmapColors } from '../../../constants';
import { IProduct } from '../../../types';
import { capitalizeFirstLetter } from '../../../utils';
import classes from './RoadmapWidgetItem.module.scss';


interface IRoadmapWidgetItem{
    status:string;
    items:IProduct[]
}

export const RoadmapWidgetItem = ({status,items}:IRoadmapWidgetItem) => {
  return (
    <div className={classes.item}>
        <span style={{backgroundColor: roadmapColors[status]}} className={classes.ball}></span>
        <p className={classes.text}> {capitalizeFirstLetter(status)}</p>
        <span className={classes.count}>
          {items.length}
        </span>
    </div>
  )
}
