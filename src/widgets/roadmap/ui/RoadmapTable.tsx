import { Spinner } from "@/shared/ui/Spinner";
import { useFetchRoadmapProducts } from "../../../shared/hooks/useFetchRoadmapProducts";
import classes from "./RoadmapTable.module.scss";
import { RoadmapCol } from "./RoadmapCol";

export const RoadmapTable = () => {
  const { roadmapItems, loading } = useFetchRoadmapProducts();

  if (loading) {
    return <Spinner className={classes.loading} />;
  }

  return (
    <div className={classes.table}>
      {roadmapItems.map((item) => (
        <RoadmapCol key={item.status} name={item.status} items={item.items} />
      ))}
    </div>
  );
};
