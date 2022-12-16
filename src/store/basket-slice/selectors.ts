import { NameSpace } from '../../constants';
import { State } from '../../types/state';

export const selectOrdersInBasket = (state: State) => state[NameSpace.Basket].itemsInBasket;
export const selectOrderInGarbage = (state: State) => state[NameSpace.Basket].itemInGarbage;
export const selectIsCameraInBasket = (state: State) => state[NameSpace.Basket].isCameraInBasket;
export const selectIsAddSuccessItemStatus = (state: State) => state[NameSpace.Basket].isAddSuccessItemStatus;
export const selectIsRemoveItemStatus = (state: State) => state[NameSpace.Basket].isRemoveItemStatus;

