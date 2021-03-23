import { BoxProps, Container, Wrap, WrapItem } from "@chakra-ui/layout";
import { Item } from "../../../../models/Item";
import { ItemCard } from "../shared/ItemCard";

export type PromotionSectionProps = { promotions: Item[] } & Omit<
  BoxProps,
  "children"
>;

export function PromotionSection({
  promotions,
  ...props
}: PromotionSectionProps): JSX.Element {
  return (
    <Container maxW="8xl" {...props} px="0" py="10">
      <Wrap>
        {promotions.map((promotion) => (
          <WrapItem key={promotion.id}>
            <ItemCard item={promotion} />
          </WrapItem>
        ))}
        <WrapItem></WrapItem>
      </Wrap>
    </Container>
  );
}
