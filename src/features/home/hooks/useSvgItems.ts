import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { svgsData } from "../../../shared/index";

export const useSvgItems = () => {
  const { id } = useParams<{ id?: string }>();

  const items = useMemo(() => {
    const source = id
      ? svgsData.filter(svg => svg.id === id)
      : svgsData;

    return source.flatMap(svg =>
      svg.items.map(item => ({
        svg,
        item
      }))
    );
  }, [id]);

  return items;
};