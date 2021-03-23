import { Box, BoxProps, Container, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { Item } from "../../../../models/Item";
import { ItemCard } from "../shared/ItemCard";
import { ItemsCarousel } from "../shared/ItemsCarousel";

export type PromotionSectionProps = {
  title: string;
  items: Item[];
} & Omit<BoxProps, "children">;

export function PromotionSection({
  title,
  items,
  ...props
}: PromotionSectionProps): JSX.Element {
  return (
    <Container
      as="section"
      maxW="8xl"
      borderRadius="md"
      py="5"
      bg="surface"
      color="onSurface"
      {...props}
    >
      <Text mb="4" fontSize="4xl" color="onBackground">
        {title}
      </Text>
      <ItemsCarousel items={items} />
    </Container>
  );
}
