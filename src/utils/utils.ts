import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { PRODUCTS_COUNT } from '../constants';
import { Camera } from '../types/camera';

export const getProductSlice = (items: Camera[]) => items.slice(0, PRODUCTS_COUNT);

export const humanizeCommentDate = (date: string) => {

  dayjs().locale('ru-bg');
  return dayjs(date).format('D MMMM');
};
