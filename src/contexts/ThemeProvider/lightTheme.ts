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
    background: "#666666"
  },
});

export default lightTheme;