import { Routes, Route } from "react-router-dom";

import Layout from "../ui/layout/Layout";
import { HomePage  } from "../features/home/pages/HomePage";
import { FavoritesPage  } from "../features/favorites/pages/FavoritesPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
}