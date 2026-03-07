import React from "react";
import { getImage } from "../../../shared/utils/svgs.utils";
import { useFavorites } from "../../../shared/context/FavoritesContext";
import type { SvgItemProps } from "../index";

export const SvgItem = React.memo(({ svg, item }: SvgItemProps) => {
  const logo = item.assets.logo;
  const { addFavorite, isFavorite } = useFavorites();

  if (!logo) return null;

  const id = `${svg.id}-${item.name}`;
  const favorited = isFavorite(id);

  return (
    <div className="grid__item">
      <h3>{item.name}</h3>

      <img
        src={getImage(svg.id, item.name, "logo", logo.dark)}
        width={120}
        alt={item.name}
        onClick={() => addFavorite({ svg, item })}
        style={{ cursor: "pointer", opacity: favorited ? 0.5 : 1 }}
        title={favorited ? "Ya en favoritos" : "Agregar a favoritos"}
      />

      {favorited && <span>⭐</span>}
    </div>
  );
});