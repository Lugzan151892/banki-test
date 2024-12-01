import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";
import image4 from "@/assets/images/image4.png";
import { ECARD_STATUS, IGalleryCard } from "@/views/main/interfaces";

export const cards: IGalleryCard[] = [
  {
    id: 1,
    title: "«Рождение Венеры»",
    author: "Сандро Боттичелли",
    status: ECARD_STATUS.ACTIVE,
    price: 1000000,
    old_price: 2000000,
    image: image1,
  },
  {
    id: 2,
    title: "«Тайная вечеря»",
    author: "Леонардо да Винчи",
    status: ECARD_STATUS.ACTIVE,
    price: 1000000,
    old_price: 2000000,
    image: image2,
  },
  {
    id: 3,
    title: "«Сотворение Адама»",
    author: "Микеланджело",
    status: ECARD_STATUS.RESERVED,
    price: 1000000,
    old_price: 2000000,
    image: image3,
  },
  {
    id: 4,
    title: "«Урок анатомии»",
    author: "Рембрандт",
    status: ECARD_STATUS.SOLD,
    price: 1000000,
    old_price: 2000000,
    image: image4,
  },
];
