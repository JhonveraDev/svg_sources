import { useFavorites } from "../../../shared/index";
import { SvgItem } from "../../home/index";

export const FavoritesGrid = () => {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0)
    return <p>No tienes favoritos aún. Haz click en un logo.</p>;

  return (
    <div className="grid">
      {favorites.map(({ svg, item }) => (
        <div key={`${svg.id}-${item.name}`} style={{ position: "relative" }}>
          <SvgItem svg={svg} item={item} />
          <button onClick={() => removeFavorite(`${svg.id}-${item.name}`)}>
            Quitar
          </button>
        </div>
      ))}
    </div>
  );
};