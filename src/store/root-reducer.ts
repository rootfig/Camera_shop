import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { camerasSlice } from './cameras-slice/cameras-slice';

export const rootReducer = combineReducers({
  [NameSpace.Cameras]: camerasSlice.reducer
});
