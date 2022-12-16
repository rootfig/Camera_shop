import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { PRODUCTS_COUNT } from '../constants';
import { Camera } from '../types/camera';

export const getProductSlice = (items: Camera[]) => items.slice(0, PRODUCTS_COUNT);
export const calcTotalPrice = (items: Camera[]) => items.reduce((acc, item) => (acc += item.price), 0);
export const humanizeCommentDate = (date: string) => {

  dayjs().locale('ru-bg');
  return dayjs(date).format('D MMMM');
};

