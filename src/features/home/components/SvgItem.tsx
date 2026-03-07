import React from "react";
import { getImage } from "../../../shared/utils/svgs.utils";
import type { SvgItemProps } from "../index";

export const SvgItem = React.memo(({ svg, item }: SvgItemProps) => {
  const logo = item.assets.logo;

  if (!logo) return null;

  return (
    <div className="grid__item">
      <h3>{item.name}</h3>

      <img
        src={getImage(
          svg.id,
          item.name,
          "logo",
          logo.dark
        )}
        width={120}
        alt={item.name}
      />
    </div>
  );
});