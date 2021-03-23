import { Button } from "@chakra-ui/button";
import { HStack, Stack, Text, VStack } from "@chakra-ui/layout";
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
import { CartItem } from "./components/CartItem";

export type MobileMenuDrawerProps = Omit<DrawerProps, "children">;

export function CartDrawer({ ...props }: MobileMenuDrawerProps): JSX.Element {
  return (
    <Drawer {...props}>
      <DrawerOverlay>
        <DrawerContent bg="surface">
          <DrawerCloseButton color="onSecondary" />
          <DrawerHeader bg="secondary" color="onSecondary">
            <Text>Carrinho</Text>
          </DrawerHeader>
          <DrawerBody px="0">
            <VStack w="full" align="stretch" spacing="3">
              <CartItem />
              <HStack spacing="5" px="6" py="0.5" shadow="base">
                <Text fontWeight="bold" fontSize="md">
                  Subtotal (2 items):
                </Text>
                <Text fontSize="lg" fontWeight="bold" color="secondary">
                  R$ 12,98
                </Text>
              </HStack>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button
              w="full"
              bg="secondary"
              color="onSecondary"
              _hover={{ background: "secondaryDark" }}
            >
              Finalizar Compra
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
