import { Flex, Spacer } from "@chakra-ui/layout";
import { Item } from "../../../models/Item";
import { Footer } from "../../shared/Footer";
import { Header } from "../../shared/Header";
import { TopMainScreenLayout } from "../../shared/TopMainScreenLayout";
import { BannersCarousel } from "./components/BannersCarousel";
import { PromotionSection } from "./components/PromotionSection";
import { Banner } from "./models/Banner";
import { ColletionItems } from "./models/ColletionItems";

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
          <Spacer />
          <Footer />
        </Flex>
      }
    ></TopMainScreenLayout>
  );
}
