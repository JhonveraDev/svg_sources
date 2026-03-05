import { svgsData } from "../data/svgs.data";
import { getImage } from "../../../utils/svgs.utils";

export const HomeGrid = () => {
  return (
    <div>
      {svgsData.map((svg) => (
        <div key={svg.id}>
          {svg.items.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              {Object.entries(item.assets).map(([assetType, asset]) => (
                <img
                  src={getImage(
                    svg.id,
                    item.name,
                    assetType,
                    asset.dark
                  )}
                  width={120}
                  alt=""
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};