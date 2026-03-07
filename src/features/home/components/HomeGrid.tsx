import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { svgsData } from "../../../data/svgs.data";
import { SvgItem } from "./SvgItem";

export const HomeGrid = () => {
  const { id } = useParams<{ id?: string }>();

  const data = useMemo(() => {
    if (!id) return svgsData;
    return svgsData.filter((svg) => svg.id === id);
  }, [id]);

  return (
    <div className="grid">
      {data.map((svg) =>
        svg.items.map((item) => (
          <SvgItem
            key={`${svg.id}-${item.name}`}
            svg={svg}
            item={item}
          />
        ))
      )}
    </div>
  );
};