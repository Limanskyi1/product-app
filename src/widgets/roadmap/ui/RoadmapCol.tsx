import { IProduct } from "@/entities/product/model/types";
import { createDescription, formatString, getDelay } from "@/shared/utils";
import { RoadmapProduct } from "@/entities/product";
import { FadeInItemBottom } from "@/shared/libs/createMotionWrapper";
import { Box } from "@/features/drag-and-drop";
import classes from "./RoadmapCol.module.scss";

interface RoadmapColProps {
  name: string;
  items: IProduct[];
}

export const RoadmapCol = ({ name, items }: RoadmapColProps) => {
  return (
    <div className={classes.col}>
      <p className={classes.name}>
        {formatString(name)} ({items.length})
      </p>
      <p className={classes.description}>{createDescription(name)}</p>
      {items.map((item, index) => (
        <FadeInItemBottom key={item.id} delay={getDelay(index)}>
          <Box id={item.id as string}>
            <RoadmapProduct
              status={item.status}
              title={item.title}
              description={item.description}
              category={item.category}
              upvotes={item.upvotes}
              comments={item.comments || []}
              id={item.id}
            />
          </Box>
        </FadeInItemBottom>
      ))}
    </div>
  );
};
