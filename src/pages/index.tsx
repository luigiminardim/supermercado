import { GetStaticProps } from "next";
import HomeScreen, {
  HomeScreenProps,
} from "../components/screens/HomeScreen";

export default function Home({
  banners,
  collection_items,
  promo,
}: HomeScreenProps) {
  return (
    <HomeScreen
      banners={banners}
      collection_items={collection_items}
      promo={promo}
    />
  );
}

export const getStaticProps: GetStaticProps<HomeScreenProps> = async (
  context
) => {
  const response = await fetch(
    "https://api.instabuy.com.br/apiv3/layout?subdomain=supermercado"
  );
  const data = (await response.json()).data as HomeScreenProps;
  console.log("data: ", data);
  return {
    props: data,
  };
};
