import { SvgItem } from "./SvgItem";
import { useSvgItems } from "../hooks/useSvgItems";

export const HomeGrid = () => {
  const items = useSvgItems();

  return (
    <div className="grid">
      {items.map(({ svg, item }) => (
        <SvgItem
          key={`${svg.id}-${item.name}`}
          svg={svg}
          item={item}
        />
      ))}
    </div>
  );
};