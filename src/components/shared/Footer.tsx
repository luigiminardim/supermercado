import { IconButton } from "@chakra-ui/button";
import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import { Menu, MenuGroup, MenuItem } from "@chakra-ui/menu";
import NextLink from "next/link";
import { FiFacebook } from "react-icons/fi";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { Image, ImageType } from "./Image";
import NextImage from "next/image";

type FooterProps = {};

export function Footer({}: FooterProps): JSX.Element {
  return (
    <Flex direction="column" bg="primaryLight" color="onPrimary" p="10">
      <Container maxW="8xl">
        <Wrap spacing="10" justify="space-between">
          <WrapItem flexDir="column">
            <Menu>
              <MenuGroup title="Institucional" mx="0">
                <MenuItem>
                  <NextLink href="/">Início</NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="#">Sobre Nós</NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="#">Blog</NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="#">Contato</NextLink>
                </MenuItem>
              </MenuGroup>
            </Menu>
            <Menu>
              <MenuGroup title="Redes Sociais" mx="0">
                <HStack spacing="3" px="2">
                  <IconButton
                    aria-label="Facebook"
                    bg="primary"
                    _hover={{ background: "primaryDark" }}
                    icon={<IoLogoFacebook size="24px" />}
                  />
                  <IconButton
                    aria-label="Facebook"
                    bg="primary"
                    _hover={{ background: "primaryDark" }}
                    icon={<IoLogoInstagram size="24px" />}
                  />
                </HStack>
              </MenuGroup>
            </Menu>
          </WrapItem>
          <WrapItem>
            <Menu>
              <MenuGroup title="Produtos" mx="0">
                <MenuItem>
                  <NextLink href="/">Início</NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="#">Alimentos Básicos</NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="#">Frios e Laticínios</NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="#">
                    Mercearia Açougue / Aves / Peixaria
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="#">Frutas, Legumes e Verduras</NextLink>
                </MenuItem>
              </MenuGroup>
            </Menu>
          </WrapItem>
          <WrapItem>
            <Menu>
              <MenuGroup title="Pagamento" mx="0">
                Pague na entrega com:
                <Wrap>
                  <WrapItem>
                    <Image
                      type={ImageType.GENERAL}
                      src="cash.png"
                      width={40}
                      height={25}
                    />
                  </WrapItem>
                  <WrapItem>
                    <Image
                      type={ImageType.GENERAL}
                      src="alelo.png"
                      width={40}
                      height={25}
                    />
                  </WrapItem>
                  <WrapItem>
                    <Image
                      type={ImageType.GENERAL}
                      src="elo.png"
                      width={40}
                      height={25}
                    />
                  </WrapItem>
                  <WrapItem>
                    <Image
                      type={ImageType.GENERAL}
                      src="hipercard.png"
                      width={40}
                      height={25}
                    />
                  </WrapItem>
                  <WrapItem>
                    <Image
                      type={ImageType.GENERAL}
                      src="mastercard.png"
                      width={40}
                      height={25}
                    />
                  </WrapItem>
                  <WrapItem>
                    <Image
                      type={ImageType.GENERAL}
                      src="visa.png"
                      width={40}
                      height={25}
                    />
                  </WrapItem>
                </Wrap>
              </MenuGroup>
            </Menu>
          </WrapItem>
          <WrapItem flexDir="column">
            <Menu>
              <MenuGroup title="Segurança" mx="0">
                <Image
                  type={ImageType.STATIC}
                  src="safe.png"
                  width={100}
                  height={46}
                />
              </MenuGroup>
              <MenuGroup title="Compre pelo celular" mx="0">
                <Image
                  type={ImageType.STATIC}
                  src="appleStore.png"
                  width={100}
                  height={46}
                />
                <Image
                  type={ImageType.STATIC}
                  src="playStore.png"
                  width={100}
                  height={46}
                />
              </MenuGroup>
            </Menu>
          </WrapItem>
        </Wrap>
        <Divider my="5" borderColor="primaryDark" />
        <Flex direction="row" justify="space-between">
          <Text fontSize="sm" color="onPrimary">
            Supermercado Modelo - Todos os direitos reservados.{" "}
          </Text>
          <Box flexShrink={0}>
            <Image
              type={ImageType.STATIC}
              src="instabuy.png"
              width={115}
              height={26}
            />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}
