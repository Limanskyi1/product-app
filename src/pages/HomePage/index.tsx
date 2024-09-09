import { useEffect, useState } from "react";
import { Logo, Navbar, ProductsList, RoadmapWidget, Tags } from "../../components";
import { useAppContext } from "../../hooks";
import { HomeLayout } from "../../layouts";
import { productApi } from "../../api/ProductApi";
export const HomePage = () => {
  const { suggestions,url,sortParams,setSuggestions } = useAppContext();
  const [loading,setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const suggestions = await productApi.getProductsByParams(url + sortParams);
        setSuggestions(suggestions);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setSuggestions([]);
        setLoading(false);
      }
    }
    fetchProducts();
  },[url,sortParams]);

  return (
    <HomeLayout>
      <div className="flex-col gap-24">
        <Logo />
        <Tags/>
        <RoadmapWidget/>
      </div>
      <div className="flex-col gap-24">
        <Navbar suggestionsCount={suggestions.length}/>
        <ProductsList products={suggestions} loading={loading}/>
      </div>
    </HomeLayout>
  );
};
