import { SvgItem, useSvgItems } from "../index";

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