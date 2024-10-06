/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IFieldData {
  fieldName: string;
  fieldValue: string;
}

export interface IOptionField {
  label: string;
  imageUrl: string;
  isFree: boolean;
}

export interface ISizeImage {
  w: number;
  h: number;
}

export interface IOptionListComponent {
  optionList: IOptionField[];
  userSelection: any;
  fieldName: string;
  sizeImage?: ISizeImage;
  height?: string;
}

export interface IFormDataType {
  storySubject: string;
  storyType: string;
  ageGroup: string;
  imageStyle: string;
}

export type StoryItemType = {
  id: number;
  storyId: string | null;
  storySubject: string | null;
  storyType: string | null;
  ageGroup: string | null;
  imageStyle: string | null;
  output: [] | any;
  coverImage: string | null;
  userEmail: string | null;
  userName: string | null;
  userImage: string | null;
};

export interface StoryItemCartProps {
  story: Partial<StoryItemType>;
}

export interface IUserInfo {
  userEmail: string | null;
  userName: string | null;
  userImage: string | null;
  credit: number | null;
}

export interface IUserDetailContext {
  userDetail?: IUserInfo;
  setUserDetail: (user: IUserInfo) => void;
}

export interface UserSelectionProps {
  userSelection: (data: IFieldData) => void;
}