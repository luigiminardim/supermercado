import { Circle, Flex, Heading, HStack, Text } from "@chakra-ui/layout";
import { Image, ImageType } from "../../Image";
import NextLink from "next/link";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Icon, SearchIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";
import { MdPerson } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import { BsCardChecklist } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuIcon,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { Link } from "@chakra-ui/react";

export function DesktopHeader() {
  return (
    <Flex direction="column" shadow="lg">
      <HStack as="header" px="5" py="2" bg="primary" spacing="10" shadow="lg">
        <NextLink href="/">
          <a>
            <HStack spacing="5">
              <Circle overflow="hidden">
                <Image
                  src="99852d734ad2478aa05dfeff49e29085.png"
                  type={ImageType.STORE}
                  alt="Supermercado Modelo"
                  height={64}
                  width={64}
                  objectFit="contain"
                />
              </Circle>
              <Heading as="h1" size="md">
                Supermercado
                <br />
                Modelo
              </Heading>
            </HStack>
          </a>
        </NextLink>
        <InputGroup flex="1">
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
              rounded="full"
              bg="primaryLight"
              p="2"
              _focus={{ background: "primaryDark" }}
              _hover={{ background: "primaryDark" }}
            >
              <MdPerson size={24} />
            </MenuButton>
            <MenuList bg="surface" color="onBackground">
              <MenuButton as={MenuIcon} />
              <MenuItem>
                <Icon as={BsCardChecklist} color="onBackground" mr="2" /> Minha
                Lista
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Icon as={FiLogIn} color="onBackground" mr="2" /> Fazer login
              </MenuItem>
            </MenuList>
          </Menu>
          <Button
            rounded="full"
            bg="primaryLight"
            p="2"
            _focus={{ background: "primaryDark" }}
            _hover={{ background: "primaryDark" }}
          >
            <HiShoppingCart size={24} />
          </Button>
        </HStack>
      </HStack>
      <HStack as="nav" px="5" py="1" spacing="10" bg="primaryLight">
        <Link to="/" fontSize="lg" _hover={{ fontStyle: "none", color: "onSecondary" }}>
          Início
        </Link>
        <Link to="/" fontSize="lg" _hover={{ fontStyle: "none", color: "onSecondary" }}>
          Ofertas
        </Link>
        <Menu>
        </Menu>
        <Link to="/" fontSize="lg" _hover={{ fontStyle: "none", color: "onSecondary" }}>
          Departamentos
        </Link>
      </HStack>
    </Flex>
  );
}
