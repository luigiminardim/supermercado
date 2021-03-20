import { Flex } from "@chakra-ui/layout";
import { Item } from "../../../models/Item";
import { Header } from "../../shared/Header";
import { TopMainScreenLayout } from "../../shared/TopMainScreenLayout";
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
      mainComponent={<Flex grow={1}></Flex>}
    ></TopMainScreenLayout>
  );
}
