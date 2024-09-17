import { Spinner } from "@/shared/ui/Spinner";
import { RoadmapCol } from "./RoadmapCol";
import { useFetchRoadmapProducts } from "../model/useFetchRoadmapProducts";
import classes from "./RoadmapTable.module.scss";
import { Column } from "@/features/drag-and-drop/ui/Column";

export const RoadmapTable = () => {
  const { roadmapItems, loading , revalidate } = useFetchRoadmapProducts();

  if (loading) {
    return <Spinner className={classes.loading} />;
  }

  return (
    <div className={classes.table}>
      {roadmapItems.map((item) => (
        <Column revalidate={revalidate} status={item.status} key={item.status}>
          <RoadmapCol  name={item.status} items={item.items} />
        </Column>
      ))}
    </div>
  );
};
