import { RoadmapTable,RoadmapHeader } from "@/widgets/roadmap";
import classes from './RoadmapPage.module.scss';
export const RoadmapPage = () => {
  return (
    <div className={`${classes.roadmapPage} container`}>
      <RoadmapHeader />
      <RoadmapTable />
    </div>
  );
};