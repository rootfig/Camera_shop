export const BACKEND_URL = 'https://camera-shop.accelerator.pages.academy/';
export const REQUEST_TIMEOUT = 5000;
export const PRODUCTS_COUNT = 9;
export const FIRST_PAGINATION_PAGE = 1;
export const REVIEWS_COUNT = 3;
export const MAX_RATING = 5;
export const RATING_VALUES = Array.from({ length: MAX_RATING }, (it, index) => index + 1).reverse();
export const MIN_REVIEW_LENGTH = 5;

export const AppRoute = {
  Main: '/',
  Catalog: '/catalog',
  Product: '/product',
};

export const RouteName = {
  Cameras: '/cameras',
  CamerasDetailed: {
    path: '/cameras/:id',
    name: 'cameras',
    img: '/:id'
  },
  CamerasReviews : {
    path: '/cameras/:id/reviews',
    name: 'cameras'
  },
  CamerasSimilar : {
    path: '/cameras/:id/similar',
    name: 'cameras'
  },
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
