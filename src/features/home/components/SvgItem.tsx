import React from "react";
import { getImage } from "../../../utils/svgs.utils";

type SvgItemProps = {
  svg: {
    id: string;
  };
  item: {
    name: string;
    assets: Record<
      string,
      {
        light: string;
        dark: string;
      }
    >;
  };
};

export const SvgItem = React.memo(({ svg, item }: SvgItemProps) => {
  return (
    <div className="grid__item">
      <h3>{item.name}</h3>

      {Object.entries(item.assets).map(([assetType, asset]) => (
        <img
          key={assetType}
          src={getImage(
            svg.id,
            item.name,
            assetType,
            asset.dark
          )}
          width={120}
          alt={item.name}
        />
      ))}
    </div>
  );
});