import { IconButton } from "@chakra-ui/button";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/editable";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Container,
  Divider,
  Flex,
  HStack,
  Spacer,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { Item } from "../../../models/Item";
import { Footer } from "../../shared/Footer";
import { Header } from "../../shared/Header";
import { Image, ImageType } from "../../shared/Image";
import { TopMainScreenLayout } from "../../shared/TopMainScreenLayout";
import { Breadcrumb } from "./components/Breadcrumb";

export type ProductScreenProps = {
  item: Item;
};

export function ProductScreen({ item }: ProductScreenProps): JSX.Element {
  useEffect(() => {
    console.log("Na Screen", item);
    return () => {};
  }, []);
  const [selectedImage, setSelectedImage] = useState(0);
  const hasPromotion = !!item.prices[0].promo_price;
  const validPrice = item.prices[0].promo_price ?? item.prices[0].price;
  const originalPrice = item.prices[0].price;

  const [qtd, setQtd] = useState(0);
  function onChangeEditableQtd(nextQtdString: string) {
    const nextQtd = Math.floor(parseInt(nextQtdString));
    if (!isNaN(nextQtd)) setQtd(nextQtd);
  }

  return (
    <TopMainScreenLayout
      bg="background"
      topComponent={<Header />}
      mainComponent={
        <Flex direction="column" grow={1}>
          <Container maxW="8xl">
            <Breadcrumb item={item} />
            <Wrap>
              <WrapItem>
                <VStack align="start">
                  <Image
                    type={ImageType.ITEM}
                    src={item.images[selectedImage]}
                    width={600}
                    height={600}
                  />
                </VStack>
              </WrapItem>
              <WrapItem flex={1} p="4" bg="surface">
                <VStack align="stretch" w="full">
                  <VStack align="stretch" spacing="4">
                    <Text as="h1" fontSize="3xl">
                      {item.name}
                    </Text>
                    <Text as="h5" fontSize="md">
                      {item.brand}
                    </Text>
                    <Divider borderColor="secondary" />
                    <HStack>
                      <HStack>
                        <Text
                          as="header"
                          fontSize="4xl"
                          fontWeight="bold"
                          color="secondary"
                        >
                          R${validPrice.toFixed(2)}
                        </Text>
                        {hasPromotion && (
                          <Text as="s" fontSize="sm">
                            R${originalPrice}
                          </Text>
                        )}
                      </HStack>
                      <Spacer />
                      <HStack as="footer" justify="end" w="140px">
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
                    </HStack>
                  </VStack>
                  <Flex direction="column">
                    <Text as="h2" fontSize="3xl" fontWeight="bold" mb="5">
                      Descrição
                    </Text>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </Flex>
                </VStack>
              </WrapItem>
            </Wrap>
          </Container>
          <Spacer mb="5" />
          <Footer />
        </Flex>
      }
    />
  );
}
