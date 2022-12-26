import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { PRODUCTS_COUNT } from '../constants';
import { Camera } from '../types/camera';
import { ProductCount } from '../types/product-count';

export const getProductSlice = (items: Camera[]) => items.slice(0, PRODUCTS_COUNT);
export const calcTotalPrice = (items: Camera[]) => items ? items.reduce((acc, item) => (acc += item.price), 0) : 0;
export const humanizeCommentDate = (date: string) => {

  dayjs().locale('ru-bg');
  return dayjs(date).format('D MMMM');
};

export const getProductsCount = (items: number[] ) => {
  const countItems: ProductCount = {};
  for(const item of items) {
    countItems[item] = countItems[item] ? Number(countItems[item]) + 1 : 1;
  }
  return countItems;
};

export const getSortItems = (items: Camera[]) => {
  items.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  });
};

export function compareNumbers(a : Camera, b: Camera) {
  return a.id - b.id;
}

