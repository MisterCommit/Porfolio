import { ImageProps } from "next/image";

export interface IProject {
  title: string;
  description: string;
  url: string;
  technologies: string[];
  imageUrl: ImageProps["src"];
  companyName?: string;
  CompanyUrl?: string;
  imageWidth?: string | number;
  imageHight?: string | number;
  layout?: "fill" | "fixed" | "intrinsic" | "responsive";
}
