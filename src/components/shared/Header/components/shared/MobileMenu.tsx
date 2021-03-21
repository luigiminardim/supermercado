import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Divider, Text } from "@chakra-ui/layout";
import { Menu, MenuGroup, MenuItem } from "@chakra-ui/menu";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
} from "@chakra-ui/modal";
import NextLink from "next/link";
import { MdHome } from "react-icons/md";
import { IoMdGrid, IoMdPricetag, IoIosGrid } from "react-icons/io";
import { BsCardChecklist } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { useRef } from "react";

export type MobileMenuProps = Omit<DrawerProps, "children">;

export function MobileMenu(props: MobileMenuProps): JSX.Element {
  return (
    <Drawer {...props} placement="left">
      <DrawerOverlay>
        <DrawerContent bg="surface" color="onSurface">
          <DrawerCloseButton color="onSecondary" />
          <DrawerHeader bg="secondary" color="onSecondary">
            <Text color="onSecondary">Olá! Faça seu login.</Text>
            <InputGroup mt="3">
              <InputLeftElement
                pointerEvents="none"
                fontSize="md"
                children={<SearchIcon color="onSecondary" />}
              />
              <Input
                variant="filled"
                placeholder="Encontre na loja."
                focusBorderColor="secondaryDark"
                color="onSecondary"
                bg="secondaryLight"
                _placeholder={{ color: "onSecondary" }}
                _hover={{
                  background: "secondaryLight",
                }}
              />
            </InputGroup>
          </DrawerHeader>
          <DrawerBody>
            <Menu>
              <MenuGroup title="Menu">
                <NextLink href="/">
                  <a>
                    <MenuItem icon={<MdHome size={20} />}>Início</MenuItem>
                  </a>
                </NextLink>
                <NextLink href="/">
                  <a>
                    <MenuItem icon={<IoMdPricetag size={20} />}>
                      Ofertas
                    </MenuItem>
                  </a>
                </NextLink>
                <NextLink href="/">
                  <a>
                    <MenuItem icon={<IoMdGrid size={20} />}>
                      Departametos
                    </MenuItem>
                  </a>
                </NextLink>
              </MenuGroup>
              <Divider />
              <MenuGroup title="Usuário">
                <NextLink href="/">
                  <a>
                    <MenuItem icon={<BsCardChecklist size={20} />}>
                      Minhas Listas
                    </MenuItem>
                  </a>
                </NextLink>
                <NextLink href="/">
                  <a>
                    <MenuItem icon={<FiLogIn size={20} />}>Login</MenuItem>
                  </a>
                </NextLink>
              </MenuGroup>
            </Menu>
          </DrawerBody>
          <DrawerFooter bg="secondaryDark" color="onSecondary">
            Supermercado Modelo
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
