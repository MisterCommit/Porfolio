import { ImageProps } from "next/image";

export interface ICertificates {
  imageUrl: ImageProps["src"];
  sideUrl: string;
  title: string;
  provide: string;
}
