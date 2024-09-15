import { useFetchRoadmapProducts } from "@/shared/hooks/useFetchRoadmapProducts";
import { Link } from "react-router-dom";
import { Spinner } from "@/shared/ui/Spinner";
import { IProduct } from "@/entities/product/model/types";
import { formatString } from "@/shared/utils";
import { roadmapColors } from "@/shared/constants";
import { FadeInItemBottom } from "@/shared/libs/createMotionWrapper";
import classes from "./RoadmapWidget.module.scss";

interface IRoadmapWidgetItem {
  status: string;
  items: IProduct[];
}
const RoadmapWidgetItem = ({ status, items }: IRoadmapWidgetItem) => {
    return (
      <div className={classes.item}>
        <span
          style={{ backgroundColor: roadmapColors[status] }}
          className={classes.ball}
        ></span>
        <p className={classes.text}> {formatString(status)}</p>
        <span className={classes.count}>{items.length}</span>
      </div>
    );
  };

export const RoadmapWidget = () => {
  const { roadmapItems, loading } = useFetchRoadmapProducts();

  if (loading) {
    return <Spinner className={classes.loading} />;
  }

  return (
    <FadeInItemBottom>
      <div className={classes.widget}>
        <div className={classes.top}>
          <p>Roadmap</p>
          <Link to="/roadmap">View</Link>
        </div>
        {roadmapItems.map((item) => (
          <RoadmapWidgetItem
            key={item.status}
            status={item.status}
            items={item.items}
          />
        ))}
      </div>
    </FadeInItemBottom>
  );
};


