import { Flex } from "@chakra-ui/layout";
import { HTMLChakraProps } from "@chakra-ui/system";

export function MobileHeader({
  ...props
}: HTMLChakraProps<"div">): JSX.Element {
  return <Flex direction="row" bg="primary" h="10" {...props}></Flex>;
}
