export type SvgAsset = {
  light: string;
  dark: string;
  downloads?: {
    label: string;
    format: string;
    file: string;
  }[];
};

export type SvgItemType = {
  name: string;
  assets: Record<string, SvgAsset>;
};

export type SvgCategory = {
  id: string;
  tec: string;
  items: SvgItemType[];
};