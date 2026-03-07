import { createContext, useContext, useState, type ReactNode } from "react";
import type { SvgItemProps } from "../../features/home/index";

type FavoriteItem = SvgItemProps;

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  const addFavorite = (item: FavoriteItem) => {
    const id = `${item.svg.id}-${item.item.name}`;
    setFavorites((prev) =>
      prev.some((f) => `${f.svg.id}-${f.item.name}` === id)
        ? prev
        : [...prev, item]
    );
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.filter((f) => `${f.svg.id}-${f.item.name}` !== id)
    );
  };

  const isFavorite = (id: string) =>
    favorites.some((f) => `${f.svg.id}-${f.item.name}` === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used inside FavoritesProvider");
  return ctx;
};