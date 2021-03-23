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
    <Container maxW="8xl" {...props} py="10">
      <Text mb="4" fontSize="4xl" color="onBackground">
        Ofertas
      </Text>
      <Wrap align="stretch" justify="space-around" spacing="5">
        {promotions.map((promotion) => (
          <WrapItem key={promotion.id}>
            <ItemCard item={promotion} h="full" />
          </WrapItem>
        ))}
      </Wrap>
      <Text>Categoria</Text>
      <ItemsCarousel items={promotions}/>
    </Container>
  );
}
