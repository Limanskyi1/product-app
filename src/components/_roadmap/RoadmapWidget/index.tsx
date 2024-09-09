import classes from "./RoadmapWidget.module.scss";
import { useFetchRoadmapProducts } from "../../../hooks/useFetchRoadmapProducts";
import { RoadmapWidgetItem } from "../RoadmapWidgetItem";
import { Link } from "react-router-dom";
import { Spinner } from "../../Spinner";
import { FadeInItemBottom } from "../../../libs";

export const RoadmapWidget = () => {
  const { roadmapItems, loading } = useFetchRoadmapProducts();

  if (loading) {
    return <Spinner className={classes.loading} />;
  }

  const renderItems = () => (
    roadmapItems.map((item) => <RoadmapWidgetItem key={item.status} status={item.status} items={item.items} />)
  )

  return (
    <FadeInItemBottom>
      <div className={classes.widget}>
        <div className={classes.top}>
          <p>Roadmap</p>
          <Link to="/roadmap">View</Link>
        </div>
        {renderItems()}
      </div>
    </FadeInItemBottom>
  );
};
