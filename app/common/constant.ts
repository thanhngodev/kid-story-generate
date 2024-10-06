import { IOptionField } from "../interfaces/app.interface";

export const PAGE_ROUTE = {
  HOME: "/",
  CREATE_STORY: "/create-story",
  EXPLORE_STORIES: "/explore-stories",
};

export const MENU_LIST = [
  {
    name: "Home",
    path: PAGE_ROUTE.HOME,
  },
  {
    name: "Create Story",
    path: PAGE_ROUTE.CREATE_STORY,
  },
  {
    name: "Explore Stories",
    path: PAGE_ROUTE.EXPLORE_STORIES,
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
