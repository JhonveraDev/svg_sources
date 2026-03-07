import { Routes, Route } from "react-router-dom";

import Layout from "../shared/ui/layout/Layout";
import { HomePage } from "../features/home/index";
import { FavoritesPage } from "../features/favorites/index";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="category/:id" element={<HomePage />} />
      </Route>
    </Routes>
  );
}