export const BACKEND_URL = 'https://camera-shop.accelerator.pages.academy/';
export const REQUEST_TIMEOUT = 10000;
export const PRODUCTS_COUNT = 9;
export const FIRST_PAGINATION_PAGE = 1;
export const REVIEWS_COUNT = 3;
export const MAX_RATING = 5;
export const RATING_VALUES = Array.from({ length: MAX_RATING }, (it, index) => index + 1).reverse();
export const MIN_REVIEW_LENGTH = 5;
export const SLIDER_STEP_COUNT = 3;
export const CAMERAS_COUNT_DEFAULT = 0;
export const START_PAGE_COUNT = 1;
export const PAGE_STEP = 1;

export const AppRoute = {
  Main: '/',
  Catalog: '/catalog',
  Product: '/product',
  Basket: '/basket',
};

export enum APIRoute {
  Cameras = '/cameras',
  Promo = '/promo',
  Reviews = '/reviews'
}

export enum NameSpace {
  Cameras = 'CAMERAS',
  Camera = 'CAMERA',
  Promo = 'PROMO',
  Similar = 'SIMILAR',
  Reviews = 'REVIEWS',
  Basket = 'BASKET',
}

export enum TabName {
  Characteristics = 'CHARACTERISTICS',
  Description = 'DESCRIPTION'
}

export const RatingTitle: {[key: number]: string} = {
  1: 'Ужасно',
  2: 'Плохо',
  3: 'Нормально',
  4: 'Хорошо',
  5: 'Отлично',
} as const;

export const QueryParams = {
  Page: '_page',
  End: '_end',
  Limit: '_limit',
  NameLike: 'name_like',
  Sort: '_sort',
  Order: '_order',
  PriceMin: 'price_gte',
  PriceMax: 'price_lte',
  Type: 'type',
  Category: 'category',
  Level: 'level',
};

export enum SearchParams {
  Page = '_page',
  End = '_end',
  Limit = '_limit',
  NameLike = 'name_like',
  Sort = '_sort',
  Order = '_order',
  PriceMin = 'price_gte',
  PriceMax = 'price_lte',
  Type = 'type',
  Category = 'category',
  Level = 'level',
}

export enum SortType {
  Price = 'price',
  Rating = 'rating',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export const FILTER_PARAM: string[] = [
  SearchParams.PriceMin,
  SearchParams.PriceMax,
  SearchParams.Category,
  SearchParams.Type,
  SearchParams.Level,
];

export const FILTERS = [
  {
    title: 'Категория',
    param: QueryParams.Category,
    values: ['Фотоаппарат', 'Видеокамера']
  },
  {
    title: 'Тип камеры',
    param: QueryParams.Type,
    values: ['Цифровая', 'Плёночная', 'Моментальная', 'Коллекционная']
  },
  {
    title: 'Уровень',
    param: QueryParams.Level,
    values: ['Нулевой', 'Любительский', 'Профессиональный']
  },
];

export const FILTER_RESTRICTION = {
  category: ['Видеокамера'],
  type: ['Плёночная', 'Моментальная']
};
