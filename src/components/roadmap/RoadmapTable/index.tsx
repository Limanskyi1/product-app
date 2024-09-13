import { Spinner } from "../..";
import { useFetchRoadmapProducts } from "../../../hooks/useFetchRoadmapProducts";
import { RoadmapCol } from "../RoadmapCol";
import classes from './RoadmapTable.module.scss';

export const RoadmapTable = () => {
  const { roadmapItems, loading } = useFetchRoadmapProducts();

  if (loading) {
    return <Spinner className={classes.loading} />;
  }

  const renderCols = () => (
    roadmapItems.map((item) => <RoadmapCol key={item.status} name={item.status} items={item.items} />)
  )


  return (
    <div className={classes.table}>
      {renderCols()}
    </div>
  );
};
