import { HomeLayout } from "@/shared/layouts";
import { LogoBanner } from "@/shared/ui";
import { Navbar } from "@/widgets/navbar";
import { Categories } from "@/features/filters";
import { RoadmapWidget } from "@/widgets/roadmap";
import { ProductsList } from "@/entities/product";
import { useFetchSuggestions } from "../model/useFetchSuggestions";
import classes from "./HomePage.module.scss";

export const HomePage = () => {
  const { loading, suggestions } = useFetchSuggestions();
  return (
    <HomeLayout>
      <div className={classes.leftSide}>
        <LogoBanner />
        <Categories />
        <RoadmapWidget />
      </div>
      <div className={classes.rightSide}>
        <Navbar suggestionsCount={suggestions.length} />
        <ProductsList loading={loading} products={suggestions} />
      </div>
    </HomeLayout>
  );
};
