import { useAppContext } from "@/shared/hooks";
import { HomeLayout } from "@/shared/layouts";
import classes from "./HomePage.module.scss";
import { LogoBanner } from "@/shared/ui";
import { Navbar } from "@/widgets/navbar";
import { Categories } from "@/features/filters";
import { RoadmapWidget } from "@/widgets/roadmap";
import { ProductsList } from "@/entities/product";

export const HomePage = () => {
  const { suggestions } = useAppContext();
  return (
    <HomeLayout>
      <div className={classes.leftSide}>
        <LogoBanner />
        <Categories />
        <RoadmapWidget />
      </div>
      <div className={classes.rightSide}>
        <Navbar suggestionsCount={suggestions.length} />
        <ProductsList />
      </div>
    </HomeLayout>
  );
};
