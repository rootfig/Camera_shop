export const BACKEND_URL = 'https://camera-shop.accelerator.pages.academy/';
export const REQUEST_TIMEOUT = 5000;
export const PRODUCTS_COUNT = 9;
export const FIRST_PAGINATION_PAGE = 1;

export const AppRoute = {
  Main: '/',
  Catalog: '/catalog_',
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

// export const CamerasFilters = {
//   ALL: {
//     name: 'Сбросить фильтры',
//     type: 'allCameras',
//   },
//   CATEGORYS: ['Фотокамера', 'Видеокамера'],
//   CAMERAS_TYPES: ['Цифровая', 'Плёночная', 'Моментальная', 'Коллекционная'],
//   CAMERAS_LEVELS: ['Нулевой', 'Любительский', 'Профессиональный'],
// };

export enum APIRoute {
  Cameras = '/cameras',
  Promo = '/promo',
}

export enum NameSpace {
  Cameras = 'CAMERAS',
  Camera = 'CAMERA',
  Promo = 'PROMO',
}

export enum TabName {
  Characteristics = 'CHARACTERISTICS',
  Description = 'DESCRIPTION'
}
