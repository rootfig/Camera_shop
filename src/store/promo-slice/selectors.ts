import { NameSpace } from '../../constants';
import { State } from '../../types/state';

export const selectPromo = (state: State) => state[NameSpace.Promo].promo;
export const selectIsPromoLoaded = (state: State) => state[NameSpace.Promo].isLoaded;
