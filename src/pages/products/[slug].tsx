import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect } from "react";
import {
  ProductScreen,
  ProductScreenProps,
} from "../../components/screens/ProductScreen";

export default function ProductPage({ item }: ProductScreenProps): JSX.Element {
  return <ProductScreen item={item} />;
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const response = await fetch(
    `https://api.instabuy.com.br/apiv3/item/?subdomain=supermercado&slug=${slug}`
  );

  const {
    data: [item],
  } = await response.json();

  const $1day = 24 * 60 * 60;
  return {
    props: { item },
    revalidate: $1day,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
