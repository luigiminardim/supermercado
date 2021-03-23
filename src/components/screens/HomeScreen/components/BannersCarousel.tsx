import { Box, BoxProps, Container } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
// import { chakra } from "@chakra-ui/system";
// import {
//   ButtonBack,
//   ButtonNext,
//   CarouselProvider,
//   Slide,
//   Slider,
// } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
// import { Image, ImageType } from "../../../shared/Image";
import { Banner } from "../models/Banner";

export type BannersCaouselProps = {
  banners: Banner[];
} & Omit<BoxProps, "children">;

// export function BannersCarousel({
//   banners: _banners,
//   ...props
// }: BannersCaouselProps): JSX.Element {
//   const isDesktop = useBreakpointValue({ base: false, md: true });
//   const banners = _banners.filter((banner) => banner.is_desktop == isDesktop);

//   return (
//     <Container as="section" maxW="8xl" {...props}>
//       <CarouselProvider
//         isPlaying
//         interval={8000}
//         naturalSlideWidth={1440}
//         naturalSlideHeight={338}
//         totalSlides={banners.length}
//         touchEnabled
//         dragEnabled
//       >
//         <Slider>
//           {banners.map((banner, idx) => (
//             <Slide index={idx}>
//               <Image
//                 type={ImageType.BANNER}
//                 src={banner.image}
//                 width={1440}
//                 height={338}
//               />
//             </Slide>
//           ))}
//         </Slider>
//         <chakra.ButtonBack >{"<"}</chakra.ButtonBack>
//         <ButtonNext>{">"}</ButtonNext>
//       </CarouselProvider>
//     </Container>
//   );
// }

import { Image, ImageType } from "../../../shared/Image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image from "next/image";

export function BannersCarousel({
  banners,
  ...props
}: BannersCaouselProps): JSX.Element {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container
      maxW="8xl"
      p={0}
      className="BannerCarousel"
      sx={{ ".BannerCarousel &": { zIndex: "0 ! important" } }}
      {...props}
    >
      <Carousel
        autoPlay
        interval={8000}
        infiniteLoop
        emulateTouch
        showArrows={false}
        showStatus={false}
      >
        {banners
          .filter((banner) => banner.is_desktop == isDesktop)
          .map((banner) => (
            <Image
              key={banner.id}
              type={ImageType.BANNER}
              src={banner.image}
              width={1440}
              height={338}
            />
          ))}
      </Carousel>
    </Container>
  );
}
