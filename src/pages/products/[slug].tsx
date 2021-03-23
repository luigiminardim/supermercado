import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  ProductScreen,
  ProductScreenProps,
} from "../../components/screens/ProductScreen";

export default function ProductPage({ item }: ProductScreenProps): JSX.Element {
  const router = useRouter();
  if (router.isFallback) {
    return <></>;
  }

  return <ProductScreen item={item} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: true,
    paths: [],
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  console.log("slug: ", slug);

  const response = await fetch(
    `https://api.instabuy.com.br/apiv3/item/?subdomain=supermercado&slug=${slug}`
  );
  const data = await response.json();
  const {
    data: [item],
  } = data;

  const $1day = 24 * 60 * 60;
  return {
    props: { item },
    revalidate: $1day
  };
};
