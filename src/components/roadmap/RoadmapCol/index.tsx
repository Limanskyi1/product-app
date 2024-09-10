import { FadeInItemBottom } from "../../../libs";
import { IProduct } from "../../../types";
import { createDescription, getDelay } from "../../../utils";
import { RoadmapProduct } from "../RoadmapProduct";
import classes from "./RoadmapCol.module.scss";

interface RoadmapColProps {
  name: string;
  items: IProduct[];
}

export const RoadmapCol = ({ name, items }: RoadmapColProps) => {
  return (
    <div className={classes.col}>
      <p className={classes.name}>
        {name} ({items.length})
      </p>
      <p className={classes.description}>{createDescription(name)}</p>
      {items.map((item,index) => (
        <FadeInItemBottom key={item.id} delay={getDelay(index)}>
          <RoadmapProduct
            status={item.status}
            title={item.title}
            description={item.description}
            category={item.category}
            upvotes={item.upvotes}
            comments={item.comments || []}
            id={item.id}
          />
        </FadeInItemBottom>
      ))}
    </div>
  );
};
