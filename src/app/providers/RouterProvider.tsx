import { CreatePage } from "@/pages/create-page";
import { DetailsPage } from "@/pages/details-page";
import { EditPage } from "@/pages/EditPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { RoadmapPage } from "@/pages/RoadmapPage";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-product" element={<CreatePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/edit-product/:id" element={<EditPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
