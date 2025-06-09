import { Product } from "../types";

export const categories = [
  "Все категории",
  "Кухонные принадлежности",
  "Уборка и уход",
  "Текстиль и декор",
  "Хранение",
  "Освещение",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Бамбуковая разделочная доска",
    description:
      "Экологически чистая разделочная доска из бамбука. Антибактериальные свойства, долговечность и стильный дизайн.",
    price: 1250,
    image:
      "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Кухонные принадлежности",
    ecoRating: 5,
    ecoFeatures: [
      "100% натуральный бамбук",
      "Быстро возобновляемый ресурс",
      "Антибактериальные свойства",
      "Биоразлагаемый",
    ],
    inStock: true,
    material: "Бамбук",
    origin: "Китай",
  },
  {
    id: "2",
    name: "Набор эко губок из люфы",
    description:
      "Натуральные губки из растения люфа для мытья посуды. Полностью биоразлагаемые и эффективные.",
    price: 450,
    image: "https://thekitchenstore.ru/wp-content/uploads/2024/09/13.webp",
    category: "Уборка и уход",
    ecoRating: 5,
    ecoFeatures: [
      "100% натуральная люфа",
      "Биоразлагаемые",
      "Без химии",
      "Многоразовые",
    ],
    inStock: true,
    material: "Люфа",
    origin: "Египет",
  },
  {
    id: "3",
    name: "Льняные полотенца набор",
    description:
      "Комплект из 3 льняных полотенец. Гипоаллергенные, быстро сохнут, становятся мягче после каждой стирки.",
    price: 2100,
    image: "https://i.ebayimg.com/thumbs/images/g/l34AAOSw2V5mzFMP/s-l1200.jpg",
    category: "Текстиль и декор",
    ecoRating: 4,
    ecoFeatures: [
      "100% лен",
      "Гипоаллергенные",
      "Долговечные",
      "Натуральные красители",
    ],
    inStock: true,
    material: "Лен",
    origin: "Беларусь",
  },
  {
    id: "4",
    name: "Корзина из морской травы",
    description:
      "Плетеная корзина для хранения из морской травы. Идеально для игрушек, белья или декоративных предметов.",
    price: 3200,
    image:
      "https://www.floramax.com.ua/image/cache/catalog/product/41320/korzina-iz-vodnogo-giatsinta-50160-1-660x660.jpg",
    category: "Хранение",
    ecoRating: 5,
    ecoFeatures: [
      "Морская трава",
      "Ручная работа",
      "Биоразлагаемая",
      "Устойчивое производство",
    ],
    inStock: true,
    material: "Морская трава",
    origin: "Вьетнам",
  },
  {
    id: "5",
    name: "LED лампа на солнечной батарее",
    description:
      "Портативная LED лампа с солнечной батареей. Идеальна для сада, террасы или как аварийное освещение.",
    price: 1800,
    image:
      "https://favouritestyle.ru/upload/iblock/65d/65d5cd671cd870ecee0f5e37091515ae.jpg",
    category: "Освещение",
    ecoRating: 4,
    ecoFeatures: [
      "Солнечная энергия",
      "LED технология",
      "Низкое энергопотребление",
      "Долгий срок службы",
    ],
    inStock: true,
    material: "Пластик, металл",
    origin: "Германия",
  },
  {
    id: "6",
    name: "Деревянная хлебница из дуба",
    description:
      "Хлебница из массива дуба, обработанная натуральными маслами. Сохраняет свежесть хлеба.",
    price: 4500,
    image:
      "https://orientalway.ru/upload/iblock/03a/03a513598f83185af5c54690a7616cbe.jpg",
    category: "Кухонные принадлежности",
    ecoRating: 4,
    ecoFeatures: [
      "Массив дуба",
      "Натуральные масла",
      "Долговечность",
      "FSC сертификат",
    ],
    inStock: false,
    material: "Дуб",
    origin: "Россия",
  },
  {
    id: "7",
    name: "Эко средство для мытья посуды",
    description:
      "Концентрированное средство для мытья посуды на растительной основе. Без фосфатов и SLS.",
    price: 320,
    image:
      "https://ecolife-images.s3.eu-central-1.amazonaws.com/0_e7c407d688.jpg",
    category: "Уборка и уход",
    ecoRating: 4,
    ecoFeatures: [
      "Растительная основа",
      "Без фосфатов",
      "Концентрированная формула",
      "Биоразлагаемое",
    ],
    inStock: true,
    material: "Растительные компоненты",
    origin: "Франция",
  },
  {
    id: "8",
    name: "Подушка из гречневой лузги",
    description:
      "Ортопедическая подушка с наполнителем из гречневой лузги. Естественная вентиляция и поддержка.",
    price: 2800,
    image:
      "https://tekstil-irk.ru/wp-content/uploads/2022/11/grechnevaya-podushka-40-40-50-50_result.webp",
    category: "Текстиль и декор",
    ecoRating: 5,
    ecoFeatures: [
      "Гречневая лузга",
      "Ортопедический эффект",
      "Натуральная вентиляция",
      "Гипоаллергенная",
    ],
    inStock: true,
    material: "Хлопок, гречневая лузга",
    origin: "Алтай",
  },
];
