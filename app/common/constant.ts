import { IOptionField } from "../interfaces/app.interface";

export const MENU_LIST = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Create Story",
    path: "/create-story",
  },
  {
    name: "Explore Stories",
    path: "/explore-stories",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

export const OPTION_LIST: IOptionField[] = [
  {
    label: "Story Book",
    imageUrl: "/story.png",
    isFree: true,
  },
  {
    label: "Bed Story",
    imageUrl: "/bed-story.png",
    isFree: true,
  },
  {
    label: "Educational",
    imageUrl: "/educational.png",
    isFree: true,
  },
];

export const OPTION_AGE_LIST: IOptionField[] = [
  {
    label: "0-2 Years",
    imageUrl: "/02Years.png",
    isFree: true,
  },
  {
    label: "3-5 Years",
    imageUrl: "/35Years.png",
    isFree: true,
  },
  {
    label: "6-8 Years",
    imageUrl: "/68Years.png",
    isFree: true,
  },
];

export const OPTION_IMAGE_LIST: IOptionField[] = [
  {
    label: "3D Cartoon",
    imageUrl: "/3D.png",
    isFree: true,
  },
  {
    label: "Paper Cut",
    imageUrl: "/paper-cut.png",
    isFree: true,
  },
  {
    label: "Water Color",
    imageUrl: "/water-color.png",
    isFree: true,
  },
  {
    label: "Pixel Style",
    imageUrl: "/pixel.png",
    isFree: true,
  },
];
