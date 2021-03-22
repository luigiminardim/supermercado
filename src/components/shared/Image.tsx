import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useEffect } from "react";

export enum ImageType {
  ITEM = "item",
  STORE = "store",
  BANNER = "banner",
  GENERAL = "general",
  STATIC = "/",
}

export type ImageProps = {
  type: ImageType;
} & NextImageProps;

export function Image({ src: srcProp, type, ...props }: ImageProps) {
  const instabuyAssets = `https://assets.instabuy.com.br/ib`;

  let src = "";
  switch (type) {
    case ImageType.STATIC:
      src += `/${srcProp}`;
      break;
    case ImageType.ITEM:
    case ImageType.STORE:
      src += `${instabuyAssets}.${type}.image.large/l-${srcProp}`;
      break;
    case ImageType.BANNER:
      src += `${instabuyAssets}.store.${type}/bnr-${srcProp}`;
      break;
    case ImageType.GENERAL:
      src += `${instabuyAssets}.image.${type}/${srcProp}`;
      break;
  }

  useEffect(() => {
    console.log(src);
  }, []);
  return <NextImage src={src} {...props} />;
}
