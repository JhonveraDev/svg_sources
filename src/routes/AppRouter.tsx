import { Routes, Route } from "react-router-dom";

import Layout from "../ui/layout/Layout";
import { FavoritesPage } from "../features/favorites/pages/FavoritesPage";
import { HomeGrid } from "../features/home/components/HomeGrid";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomeGrid />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="category/:id" element={<HomeGrid />} />
      </Route>
    </Routes>
  );
}