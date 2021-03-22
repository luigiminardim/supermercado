import { Button } from "@chakra-ui/button";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import {
  Box,
  Divider,
  Flex,
  FlexProps,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Image, ImageType } from "../../Image";

export type CartItemProps = FlexProps;

export function CartItem({ ...props }: CartItemProps): JSX.Element {
  return (
    <Flex
      direction="column"
      shadow="base"
      p="5"
      bg="surface"
      color="onSurface"
      {...props}
    >
      <HStack align="flex-start" p={0}>
        <Box w="48px" flexShrink={0}>
          <Image
            src="71a156d471944b5eabe1dbafb7921d7c.jpeg"
            type={ImageType.ITEM}
            width="48px"
            height="48px"
          />
        </Box>
        <VStack>
          <Text fontWeight="bold" fontSize="md" noOfLines={2}>
            Óleo de Soja Soya Garrafa 900ml
          </Text>
        </VStack>
        <Spacer />
        <VStack flex="0">
          <Input
            size="lg  "
            h="48px"
            minW="48px"
            defaultValue="2"
            p="0"
            textAlign="center"
          />
        </VStack>
      </HStack>
      <Divider />
      <Flex mt="2" direction="row" align="center" wrap="wrap">
        <HStack>
          <Button
            size="xs"
            bg="secondary"
            color="onSecondary"
            _hover={{ background: "secondaryDark" }}
            leftIcon={<EditIcon />}
          >
            Comentário
          </Button>
          <Button size="xs" colorScheme="red" leftIcon={<DeleteIcon />}>
            Remover
          </Button>
        </HStack>
        <Spacer />
        <Text color="secondary" fontSize="sm">
          R$ 12.98
        </Text>
      </Flex>
    </Flex>
  );
}
