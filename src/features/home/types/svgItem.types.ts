
export type SvgItemProps = {
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