import { BoxProps, Container, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { Item } from "../../../../models/Item";
import { ItemCard } from "../shared/ItemCard";
import { ItemsCarousel } from "../shared/ItemsCarousel";

export type PromotionSectionProps = { promotions: Item[] } & Omit<
  BoxProps,
  "children"
>;

export function PromotionSection({
  promotions,
  ...props
}: PromotionSectionProps): JSX.Element {
  return (
    <Container maxW="8xl" {...props} py="5">
      <Text mb="4" fontSize="4xl" color="onBackground">
        Ofertas
      </Text>
      <ItemsCarousel items={promotions} />
    </Container>
  );
}
