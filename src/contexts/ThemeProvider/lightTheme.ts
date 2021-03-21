import { extendTheme } from "@chakra-ui/react";

export const lightTheme = extendTheme({
  colors: {
    primary: "#e67100",
    primaryLight: "#ffa13f",
    primaryDark: "#ad4300",
    onPrimary: "#000",
    secondary: "#006703",
    secondaryLight: "#439636",
    secondaryDark: "#003b00",
    onSecondary: "#fff",
    background: "#d5d5d5",
    onBackgorund: "#e1e1e1",
    surface: "#f5f5f5",
    onSurface: "#2e2e2e"
  },
});

export default lightTheme;