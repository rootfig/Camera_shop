import { PRODUCTS_COUNT, RouteName } from '../constants';
import { Camera } from '../types/camera';

export const getProductSlice = (items: Camera[]) => items.slice(0, PRODUCTS_COUNT);

export const getProductUrl = (id: string | number): string =>
  `/${RouteName.Cameras}/${id}`;
