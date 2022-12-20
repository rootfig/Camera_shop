import { NameSpace } from '../../constants';
import { State } from '../../types/state';

export const selectOrdersInBasket = (state: State) => state[NameSpace.Basket].itemsInBasket;
export const selectOrderInGarbage = (state: State) => state[NameSpace.Basket].itemInGarbage;
export const selectIsCameraInBasket = (state: State) => state[NameSpace.Basket].isCameraInBasket;
export const selectIsAddSuccessItemStatus = (state: State) => state[NameSpace.Basket].isAddSuccessItemStatus;
export const selectIsRemoveItemStatus = (state: State) => state[NameSpace.Basket].isRemoveItemStatus;
export const selectDiscount = (state: State) => state[NameSpace.Basket].discount;
export const selectIsCouponLoadError = (state: State) => state[NameSpace.Basket].isCouponLoadError;
export const selectIsCouponLoaded = (state: State) => state[NameSpace.Basket].isCouponLoaded;
export const selectOrderPost = (state: State) => state[NameSpace.Basket].order;
export const selectIsOrderPostStatus = (state: State) => state[NameSpace.Basket].isOrderPostStatus;
