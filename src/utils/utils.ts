import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { PRODUCTS_COUNT, RouteName } from '../constants';
import { Camera } from '../types/camera';

export const getProductSlice = (items: Camera[]) => items.slice(0, PRODUCTS_COUNT);

export const getProductUrl = (id: string | number): string =>
  `/${RouteName.CamerasDetailed.name}/${id}`;

export const humanizeCommentDate = (date: string) => {

  dayjs().locale('ru-bg');
  return dayjs(date).format('D MMMM');
};
