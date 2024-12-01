export enum ECARD_STATUS {
  ACTIVE = 1,
  RESERVED,
  SOLD,
}

export interface IGalleryCard {
  id: number;
  title: string;
  author: string;
  status: ECARD_STATUS;
  price: number;
  old_price: number;
  image: string;
}
