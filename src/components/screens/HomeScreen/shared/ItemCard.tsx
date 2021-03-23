import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  BoxProps,
  Center,
  Circle,
  Flex,
  HStack,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/layout";
import {
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { Item } from "../../../../models/Item";
import { Image, ImageType } from "../../../shared/Image";

export type ItemCardProps = { item: Item } & Omit<BoxProps, "children">;

export function ItemCard({ item, ...props }: ItemCardProps): JSX.Element {
  const hasPromotion = !!item.prices[0].promo_price;
  const validPrice = item.prices[0].promo_price ?? item.prices[0].price;
  const originalPrice = item.prices[0].price;

  const [qtd, setQtd] = useState(0);
  function onChangeEditableQtd(nextQtdString: string) {
    const nextQtd = Math.floor(parseInt(nextQtdString));
    if (!isNaN(nextQtd)) setQtd(nextQtd);
  }

  const {
    isOpen: isOpenPopover,
    onOpen: onOpenPopover,
    onClose: onClosePopover,
  } = useDisclosure();

  return (
    <Flex
      direction="column"
      borderRadius="sm"
      w="270px"
      h="291px"
      bg="surface"
      color="onSurface"
      px="4"
      py="2"
      {...props}
    >
      <HStack as="header">
        <Text fontWeight="bold" fontSize="3xl" color="secondary">
          R$<Text as="span">{validPrice.toFixed(2)}</Text>
        </Text>
        {hasPromotion && (
          <VStack spacing="0" align="start">
            <Text as="s" opacity={0.8} fontSize="sm">
              R${originalPrice.toFixed(2)}
            </Text>
          </VStack>
        )}
        <Spacer />
        <Popover
          isOpen={isOpenPopover}
          onOpen={onOpenPopover}
          onClose={onClosePopover}
          placement="top"
          gutter={0}
        >
          <PopoverTrigger>
            <IconButton
              opacity={isOpenPopover ? 0.1 : 1}
              aria-label="quantity"
              bg="secondary"
              color="onSecondary"
              _hover={{ bg: "secondaryDark" }}
              icon={
                <Center w="full" h="full" lineHeight="auto">
                  {qtd}
                </Center>
              }
            />
          </PopoverTrigger>
          <Portal>
            <PopoverContent shadow="2xl" w="160px" p="2">
              <HStack as="footer" justify="end">
                <IconButton
                  aria-label="minus"
                  bg="secondary"
                  color="onSecondary"
                  _hover={{ bg: "secondaryDark" }}
                  onClick={() => setQtd(qtd - 1)}
                  disabled={qtd <= 0}
                  icon={<MinusIcon />}
                />
                <Editable
                  flex={1}
                  textAlign="center"
                  fontSize="2xl"
                  color="secondaryDark"
                  value={`${qtd}`}
                  isPreviewFocusable
                  onChange={onChangeEditableQtd}
                >
                  <EditablePreview />
                  <EditableInput />
                </Editable>
                <IconButton
                  aria-label="add"
                  bg="secondary"
                  color="onSecondary"
                  _hover={{ bg: "secondaryDark" }}
                  onClick={() => setQtd(qtd + 1)}
                  icon={<AddIcon />}
                />
              </HStack>
            </PopoverContent>
          </Portal>
        </Popover>
      </HStack>
      <Center w="full">
        <Image
          type={ImageType.ITEM}
          src={item.images[0]}
          width={150}
          height={150}
        />
      </Center>
      <LinkBox d="flex" flexDirection="column" align="start">
        <NextLink href={`/products/${item.slug}`} passHref>
          <LinkOverlay>
            <Text
              as="h5"
              textAlign="left"
              fontSize="md"
              fontWeight="bold"
              noOfLines={2}
            >
              {item.name}
            </Text>
          </LinkOverlay>
        </NextLink>
        <Text as="span" noOfLines={1} textAlign="left">
          {item.brand}
        </Text>
      </LinkBox>
    </Flex>
  );
}
