import { Circle, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/layout";
import { Image, ImageType } from "../../Image";
import NextLink from "next/link";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { HamburgerIcon, Icon, SearchIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";
import { MdPerson } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import { BsCardChecklist } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuIcon,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { HTMLChakraProps, Link, Portal, useDisclosure } from "@chakra-ui/react";
import { MobileMenuDrawer } from "./components/MobileMenuDrawer";
import { CartDrawer } from "../../CartDrawer";

export function DesktopHeader({
  ...props
}: HTMLChakraProps<"div">): JSX.Element {
  const {
    isOpen: isOpenMobileMenu,
    onOpen: onOpenMobileMenu,
    onClose: onCloseMobileMenu,
  } = useDisclosure();
  const {
    isOpen: isOpenCart,
    onOpen: onOpenCart,
    onClose: onCloseCart,
  } = useDisclosure();

  return (
    <>
      <MobileMenuDrawer isOpen={isOpenMobileMenu} onClose={onCloseMobileMenu} />
      <CartDrawer isOpen={isOpenCart} onClose={onCloseCart} />
      <Flex as="header" direction="column" shadow="lg" {...props}>
        <HStack px="5" py="2" bg="primary" spacing="10" shadow="lg">
          <NextLink href="/">
            <a>
              <HStack spacing="5">
                <Circle overflow="hidden">
                  <Image
                    src="99852d734ad2478aa05dfeff49e29085.png"
                    type={ImageType.STORE}
                    alt="Supermercado Modelo"
                    height={60}
                    width={60}
                    objectFit="contain"
                  />
                </Circle>
                <Heading
                  as="h1"
                  fontSize={{ base: "sm", md: "md" }}
                  maxW={{ md: "32" }}
                >
                  Supermercado Modelo
                </Heading>
              </HStack>
            </a>
          </NextLink>
          <Spacer d={{ md: "none" }} />
          <InputGroup flex="1" d={{ base: "none", md: "block" }}>
            <InputLeftElement
              pointerEvents="none"
              fontSize="md"
              children={<SearchIcon />}
            />
            <Input
              variant="filled"
              placeholder="Encontre na loja."
              focusBorderColor="primaryDark"
              color="onPrimary"
              bg="primaryLight"
              _placeholder={{ color: "onPrimary" }}
              _hover={{
                background: "primaryLight",
              }}
            />
          </InputGroup>
          <HStack as="nav" spacing="5">
            <Menu>
              <MenuButton
                d={{ base: "none", md: "block" }}
                rounded="full"
                bg="primaryLight"
                p="2"
                _focus={{ background: "primaryDark" }}
                _hover={{ background: "primaryDark" }}
              >
                <MdPerson size={24} />
              </MenuButton>
              <Portal>
                <MenuList bg="surface" color="onBackground" zIndex={10}>
                  <MenuGroup title="Usuário">
                    <MenuButton as={MenuIcon} />
                    <MenuItem>
                      <Icon as={BsCardChecklist} color="onBackground" mr="2" />
                      Minhas Listas
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>
                      <Icon as={FiLogIn} color="onBackground" mr="2" /> Fazer
                      Login
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Portal>
            </Menu>
            <Button
              d={{ base: "block", md: "none" }}
              rounded="full"
              bg="primaryLight"
              p="2"
              _focus={{ background: "primaryDark" }}
              _hover={{ background: "primaryDark" }}
              onClick={onOpenMobileMenu}
            >
              <HamburgerIcon size={24} />
            </Button>
            <Button
              rounded="full"
              bg="primaryLight"
              p="2"
              _focus={{ background: "primaryDark" }}
              _hover={{ background: "primaryDark" }}
              onClick={onOpenCart}
            >
              <HiShoppingCart size={24} />
            </Button>
          </HStack>
        </HStack>
        <HStack
          as="nav"
          d={{ base: "none", md: "flex" }}
          px="5"
          py="1"
          spacing="10"
          bg="primary"
        >
          <Menu>
            <HStack spacing="10">
              <NextLink
                href="/"
                passHref
                children={
                  <Link
                    fontSize="lg"
                    _hover={{ fontStyle: "none", color: "onSecondary" }}
                  >
                    Início
                  </Link>
                }
              />
              <NextLink
                href="/"
                passHref
                children={
                  <Link
                    fontSize="lg"
                    _hover={{ fontStyle: "none", color: "onSecondary" }}
                  >
                    Ofertas
                  </Link>
                }
              />
              <NextLink
                href="#"
                passHref
                children={
                  <Link
                    fontSize="lg"
                    _hover={{ fontStyle: "none", color: "onSecondary" }}
                  >
                    Departamentos
                  </Link>
                }
              />
            </HStack>
          </Menu>
        </HStack>
      </Flex>
    </>
  );
}
