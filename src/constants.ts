export const BACKEND_URL = 'https://camera-shop.accelerator.pages.academy/';
export const REQUEST_TIMEOUT = 5000;

export const RouteName = {
  Cameras: '/cameras',
  CamerasDetailed: {
    path: '/cameras/:id',
    name: 'cameras'
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

export const CamerasFilters = {
  ALL: {
    name: 'Сбросить фильтры',
    type: 'allCameras',
  },
  CATEGORYS: ['Фотокамера', 'Видеокамера'],
  CAMERAS_TYPES: ['Цифровая', 'Плёночная', 'Моментальная', 'Коллекционная'],
  CAMERAS_LEVELS: ['Нулевой', 'Любительский', 'Профессиональный'],
};

export enum NameSpace {
  Cameras = 'Cameras',
  Camera = 'Camera',
}

