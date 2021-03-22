import NextImage, { ImageProps as NextImageProps } from "next/image";

export enum ImageType {
  ITEM = 'item',
  STORE = 'store'
}

export type ImageProps = {
  type: ImageType;
} & NextImageProps;

export function Image({ src: srcProp, type, ...props }: ImageProps) {
  const src = `https://assets.instabuy.com.br/ib.${type}.image.large/l-${srcProp}`;
  return <NextImage src={src} {...props} />;
}
