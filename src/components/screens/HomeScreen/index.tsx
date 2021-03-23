import { Container, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Item } from "../../../models/Item";
import { Footer } from "../../shared/Footer";
import { Header } from "../../shared/Header";
import { TopMainScreenLayout } from "../../shared/TopMainScreenLayout";
import { BannersCarousel } from "./components/BannersCarousel";
import { PromotionSection } from "./components/PromotionSection";
import { Banner } from "./models/Banner";
import { ColletionItems } from "./models/ColletionItems";
import { ItemsCarousel } from "./shared/ItemsCarousel";

export type HomeScreenProps = {
  banners: Banner[];
  promo: Item[];
  collection_items: ColletionItems[];
};

export default function HomeScreen({
  banners,
  promo,
  collection_items,
}: HomeScreenProps): JSX.Element {
  return (
    <TopMainScreenLayout
      bg="background"
      topComponent={<Header />}
      mainComponent={
        <Flex direction="column" grow={1}>
          <BannersCarousel banners={banners} mt="2" />
          <PromotionSection promotions={promo} />
          {collection_items.map((collection) => (
            <Container maxW="8xl" py="5">
              <Text mb="4" fontSize="4xl" color="onBackground">
                {collection.title}
              </Text>
              <ItemsCarousel items={collection.items} />
            </Container>
          ))}
          <Spacer />
          <Footer />
        </Flex>
      }
    ></TopMainScreenLayout>
  );
}
