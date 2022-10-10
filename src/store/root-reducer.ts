import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { cameraSlice } from './camera-slice/camera-slice';
import { camerasSlice } from './cameras-slice/cameras-slice';

export const rootReducer = combineReducers({
  [NameSpace.Cameras]: camerasSlice.reducer,
  [NameSpace.Camera]: cameraSlice.reducer,
});
