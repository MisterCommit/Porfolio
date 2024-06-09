import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  fontFamily: "Montserrat, Source Sans Pro, sans-serif",

  primaryColor: "green",

  black: "#363636",

  fontSizes: {
    xs: 14,
    sm: 18,
    md: 22,
    lg: 26,
    xl: 28,
  },
  breakpoints: {
    xs: 500,
    sm: 800,
    md: 1000,
    lg: 1200,
    xl: 1400,
  },

  radius: {
    xl: 1000,
  },
  colors: {
    blurColor: ["#1A1B1E", "#FFFFFF"],
  },

  headings: {
    fontFamily: "Montserrat, Source Sans Pro, sans-serif",
    sizes: {
      // See heading options below
      h1: { fontWeight: 500, fontSize: 32, lineHeight: 1.4 },
      h2: { fontWeight: 500, fontSize: 28, lineHeight: 1.4 },
      h3: { fontWeight: 500, fontSize: 26, lineHeight: 1.4 },
      h4: { fontWeight: 500, fontSize: 24, lineHeight: 1.4 },
      h5: { fontWeight: 500, fontSize: 22, lineHeight: 1.4 },
      h6: { fontWeight: 500, fontSize: 20, lineHeight: 1.4 },
    },
  },

  other: {
    xs: 200,
    sm: 200,
    md: 300,
    lg: 300,
    xl: 400,
  },
};
