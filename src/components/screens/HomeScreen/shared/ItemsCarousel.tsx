import { IconButton } from "@chakra-ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Flex, HStack, Spacer } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { group } from "node:console";
import { Fragment } from "react";
import "react-multi-carousel/lib/styles.css";
import { Carousel } from "react-responsive-carousel";
import { Item } from "../../../../models/Item";
import { ItemCard } from "./ItemCard";

export type ItemsCarouselProps = { items: Item[] } & Omit<BoxProps, "children">;

export function ItemsCarousel({
  items,
  ...props
}: ItemsCarouselProps): JSX.Element {
  const numShowCard: number = useBreakpointValue({
    base: 1,
    xs: 1,
    sm: 1,
    md: 3,
    lg: 4,
    xl: 5,
  });

  const groups = items.reduce((groups, item, idx) => {
    if (idx % (numShowCard ?? 5) === 0) {
      groups.push([]);
    }
    groups[groups.length - 1].push(item);
    return groups;
  }, [] as Item[][]);

  return (
    <Carousel
      emulateTouch
      showArrows
      autoPlay={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      stopOnHover={true}
      renderArrowPrev={(onClick, hasNext, label) => (
        <IconButton
          zIndex={1}
          position="absolute"
          left="0"
          top="40%"
          aria-label={label}
          bg="secondary"
          color="onSecondary"
          _hover={{ bg: "secondaryDark" }}
          onClick={onClick}
          disabled={!hasNext}
          icon={<ChevronLeftIcon />}
        />
      )}
      renderArrowNext={(onClick, hasNext, label) => (
        <IconButton
          zIndex={1}
          position="absolute"
          right="0"
          top="40%"
          aria-label={label}
          bg="secondary"
          color="onSecondary"
          _hover={{ bg: "secondaryDark" }}
          onClick={onClick}
          disabled={!hasNext}
          icon={<ChevronRightIcon />}
        />
      )}
    >
      {groups.map((group, idx) => (
        <HStack direction="row" key={idx}>
          {group.map((item) => (
            <Fragment key={item.id}>
              <Spacer />
              <ItemCard item={item} />
              <Spacer />
            </Fragment>
          ))}
        </HStack>
      ))}
    </Carousel>
  );
}
