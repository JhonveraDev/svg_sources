import type { ReactNode } from "react";
import { FavoritesProvider } from "../context/FavoritesContext";

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <FavoritesProvider>
    {children}
  </FavoritesProvider>
);