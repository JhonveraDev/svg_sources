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
  name: string;
  items: SvgItemType[];
};

export const svgsData: SvgCategory[]= [
  {
    id: "ai",
    name: "AI",
    items: [
      {
        name: "glide",
        assets: {
          logo: {
            light: "glide_light.svg",
            dark: "glide_dark.svg",
            downloads: [
              { label: "Light & dark variants", format: "zip", file: "glide_light_dark.zip" },
              { label: "Only light variant", format: "svg", file: "glide_light.svg" },
              { label: "Only dark variant", format: "svg", file: "glide_dark.svg" }
            ]
          },
          wordmark: {
            light: "glide_wordmark_light.svg",
            dark: "glide_wordmark_dark.svg",
            downloads: [
              { label: "Light & dark variants", format: "zip", file: "glide_wordmark_light_dark.zip" },
              { label: "Wordmark light variant", format: "svg", file: "glide_wordmark_light.svg" },
              { label: "Wordmark dark variant", format: "svg", file: "glide_wordmark_dark.svg" }
            ]
          }
        }
      }
    ]
  },
  {
    id: "cms",
    name: "CMS",
    items: [
      {
        name: "intlayer",
        assets: {
          logo: {
            light: "intlayer_light.svg",
            dark: "intlayer_dark.svg",
            downloads: [
              { label: "Light & dark variants", format: "zip", file: "intlayer_light_dark.zip" },
              { label: "Only light variant", format: "svg", file: "intlayer_light.svg" },
              { label: "Only dark variant", format: "svg", file: "intlayer_dark.svg" }
            ]
          }
        }
      },
      {
        name: "sanity",
        assets: {
          logo: {
            light: "sanity_light.svg",
            dark: "sanity_dark.svg",
            downloads: [
              { label: "Light & dark variants", format: "zip", file: "sanity_light_dark.zip" },
              { label: "Only light variant", format: "svg", file: "sanity_light.svg" },
              { label: "Only dark variant", format: "svg", file: "sanity_dark.svg" }
            ]
          },
          wordmark: {
            light: "sanity_wordmark_light.svg",
            dark: "sanity_wordmark_dark.svg",
            downloads: [
              { label: "Light & dark variants", format: "zip", file: "sanity_wordmark_light_dark.zip" },
              { label: "Wordmark light variant", format: "svg", file: "sanity_wordmark_light.svg" },
              { label: "Wordmark dark variant", format: "svg", file: "sanity_wordmark_dark.svg" }
            ]
          }
        }
      }
    ]
  }
];