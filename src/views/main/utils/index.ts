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
    description: "Классная картина 1",
    image: image1,
    additional_images: [image2, image3, image4],
  },
  {
    id: 2,
    title: "«Тайная вечеря»",
    author: "Леонардо да Винчи",
    status: ECARD_STATUS.ACTIVE,
    price: 1000000,
    old_price: 2000000,
    description: "Классная картина 2",
    image: image2,
    additional_images: [image1, image3, image4],
  },
  {
    id: 3,
    title: "«Сотворение Адама»",
    author: "Микеланджело",
    status: ECARD_STATUS.ACTIVE,
    price: 1000000,
    old_price: 2000000,
    description: "Классная картина 3",
    image: image3,
    additional_images: [image1, image2, image4],
  },
  {
    id: 4,
    title: "«Урок анатомии»",
    author: "Рембрандт",
    status: ECARD_STATUS.SOLD,
    price: 1000000,
    old_price: 2000000,
    description: "Классная картина 4",
    image: image4,
    additional_images: [image1, image2, image3],
  },
];

export const LOCAL_CARDS_VAR = "cards";
