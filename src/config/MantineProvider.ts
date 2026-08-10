import { createTheme, virtualColor } from "@mantine/core";

/** Sync with `ColorSchemeScript` + `MantineProvider` (`Providers.tsx`). */
export const PORTFOLIO_COLOR_SCHEME_STORAGE_KEY = "portfolio-color-scheme";

/** Light — primary #5B5BD6 · soft #8B7CF6 */
const brandLight = [
  "#FAFAFF",
  "#F5F3FF",
  "#EDE9FE",
  "#E4DEFC",
  "#8B7CF6",
  "#5B5BD6",
  "#4F52C4",
  "#4548AE",
  "#3B3E96",
  "#32347E",
] as const;

/** Dark — primary #8B7CF6 · soft #A78BFA · hover shade 6 */
const brandDark = [
  "#FAF5FF",
  "#F3EEFF",
  "#EDE7FE",
  "#DDD2FC",
  "#A78BFA",
  "#8B7CF6",
  "#A78BFA",
  "#7D6FE5",
  "#7264D8",
  "#675AC9",
] as const;

/** Page #F6F3EF · surface #FFFFFF · alt band #F1EBE4 */
const backgroundLight = [
  "#FFFFFF",
  "#FFFDFB",
  "#FBF8F4",
  "#F8F4EE",
  "#F4EFE8",
  "#EFEAE3",
  "#EBE5DD",
  "#FFFFFF",
  "#F1EBE4",
  "#F6F3EF",
] as const;

/** Page #0F1117 · surface #171923 · alt #14161F */
const backgroundDark = [
  "#F3F4F6",
  "#D4D4D8",
  "#A1A1AA",
  "#71717A",
  "#52525E",
  "#3F3F4A",
  "#2D2D38",
  "#171923",
  "#14161F",
  "#0F1117",
] as const;

/** Border #E7DFD8 */
const gridLight = [
  "#FBFAF8",
  "#F6F2ED",
  "#F0EBE4",
  "#EBE4DC",
  "#E7DFD8",
  "#DDD5CD",
  "#D7CEC5",
  "#EDE6DF",
  "#E9E2DA",
  "#E7DFD8",
] as const;

/** Border rgba(255,255,255,0.08) */
const gridDark = [
  "#0F1117",
  "#12141C",
  "#151720",
  "#181A24",
  "#1C1E29",
  "#21232E",
  "#262833",
  "#2C2E3A",
  "#323440",
  "rgba(255,255,255,0.08)",
] as const;

export const MantineProviderConfig = createTheme({
  primaryColor: "brand",
  primaryShade: { light: 5, dark: 5 },
  colors: {
    brandLight,
    brandDark,
    brand: virtualColor({
      name: "brand",
      light: "brandLight",
      dark: "brandDark",
    }),
    backgroundLight,
    backgroundDark,
    background: virtualColor({
      name: "background",
      light: "backgroundLight",
      dark: "backgroundDark",
    }),
    gridLight,
    gridDark,
    grid: virtualColor({
      name: "grid",
      light: "gridLight",
      dark: "gridDark",
    }),
  },
});
