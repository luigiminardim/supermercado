import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps as ChakraBreadcrumbProps,
} from "@chakra-ui/breadcrumb";
import NextLink from "next/link";
import { Item } from "../../../../models/Item";

export type BreadcrumbProps = { item: Item } & Omit<
  ChakraBreadcrumbProps,
  "children"
>;

export function Breadcrumb({ item, ...props }: BreadcrumbProps): JSX.Element {
  return (
    <ChakraBreadcrumb
      my="5"
      borderRadius="md"
      px="5"
      py="2"
      bg="surface"
      color="onSurface"
      {...props}
    >
      <BreadcrumbItem>
        <NextLink href="/">
          <BreadcrumbLink>Início</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>
          {item.main_subcategory.category_id.title}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>{item.name}</BreadcrumbLink>
      </BreadcrumbItem>
    </ChakraBreadcrumb>
  );
}
