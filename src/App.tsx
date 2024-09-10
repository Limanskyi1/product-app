import { Route, Routes } from "react-router-dom";
import { CreatePage, DetailsPage, EditPage, HomePage, NotFoundPage, RoadmapPage } from "./pages";
import "react-toastify/ReactToastify.min.css";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-product" element={<CreatePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/edit-product/:id" element={<EditPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
};
