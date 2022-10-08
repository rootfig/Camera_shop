import { combineReducers } from '@reduxjs/toolkit';
import { camerasSlice } from './cameras-slice/cameras-slice';

export const rootReducer = combineReducers({
  'Cameras': camerasSlice.reducer
});
