import { Flex, FlexOptions, FlexProps } from "@chakra-ui/layout";
import { ReactNode } from "react";

export type TopMainScreenLayoutProps = {
  topComponent: ReactNode;
  mainComponent: ReactNode;
} & FlexProps;

export function TopMainScreenLayout({
  topComponent,
  mainComponent,
  ...flexProps
}: TopMainScreenLayoutProps): JSX.Element {
  return (
    <Flex w="100vw" h="100vh" direction="column" {...flexProps}>
      <Flex direction="column" top="0" left="0" right="0" position="sticky">
        {topComponent}
      </Flex>
      <Flex direction="column" grow={1} overflowY="auto">
        {mainComponent}
      </Flex>
    </Flex>
  );
}
