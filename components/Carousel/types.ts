import { StaticImageData } from 'next/image';

export type CarouselItem = {
  text: { title: string; body: string }[];
  images: StaticImageData[];
};
