import type { ReactNode } from "react";
import { FavoritesProvider } from "../index";

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <FavoritesProvider>
    {children}
  </FavoritesProvider>
);