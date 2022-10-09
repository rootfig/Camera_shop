import { PRODUCTS_COUNT } from '../constants';
import { Camera } from '../types/camera';

export const getProductSlice = (items: Camera[]) => items.slice(0, PRODUCTS_COUNT);
