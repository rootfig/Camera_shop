import { NameSpace } from '../../constants';
import { ProductPriceRange, State } from '../../types/state';

export const selectAllCameras = (state : State) => state[NameSpace.Cameras].allCameras;
export const selectCameras = (state: State) => state[NameSpace.Cameras].cameras;
export const selectIsLoadedError = (state: State) => state[NameSpace.Cameras].isLoadError;
export const getProductsTotalCount = (state: State): number => state[NameSpace.Cameras].productsTotalCount;
export const getPriceProducts = (state: State): ProductPriceRange => state[NameSpace.Cameras].productsPriceRange;

export const getIsFilterReset = (state: State): boolean => state[NameSpace.Cameras].isFilterReset;
