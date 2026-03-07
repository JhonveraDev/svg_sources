import React from "react";
import { getImage } from "../../../utils/svgs.utils";
import type { SvgItemProps } from "../utils/SvgItem.types";

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