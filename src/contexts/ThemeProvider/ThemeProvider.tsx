import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { lightTheme } from "./lightTheme";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <ChakraProvider theme={lightTheme}>{children}</ChakraProvider>;
}
