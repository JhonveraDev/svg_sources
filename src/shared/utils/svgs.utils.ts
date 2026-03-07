const images = import.meta.glob(
  "../../assets/images/svgs/**/*.svg",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

export const getImage = ( id: string, name: string, assetType: string, file: string
): string => {
  const path = `../../assets/images/svgs/${id}/${name}/${assetType}/${file}`;

  return images[path];
};