import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { basketSlice } from './basket-slice/basket-slice';
import { cameraSlice } from './camera-slice/camera-slice';
import { camerasSlice } from './cameras-slice/cameras-slice';
import { promoSlice } from './promo-slice/promo-slice';
import { reviewsSlice } from './reviews-slice/reviews-slice';
import { similarSlice } from './similar-slice/similar-slice';

export const rootReducer = combineReducers({
  [NameSpace.Cameras]: camerasSlice.reducer,
  [NameSpace.Camera]: cameraSlice.reducer,
  [NameSpace.Promo]: promoSlice.reducer,
  [NameSpace.Similar]: similarSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
  [NameSpace.Basket]: basketSlice.reducer,
});
