import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { CamerasSliceState } from '../../types/state';
import { fetchCamerasAction } from '../api-actions';

export const initialState: CamerasSliceState = {
  cameras: [],
  isLoaded: false,
  isLoadError: false,
};

export const camerasSlice = createSlice({
  name: NameSpace.Cameras,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasAction.pending, (state) => {
        state.isLoaded = true;
        state.isLoadError = false;
      })
      .addCase(fetchCamerasAction.fulfilled, (state, action) => {
        state.cameras = action.payload;
        state.isLoaded = false;
        state.isLoadError = false;
      })
      .addCase(fetchCamerasAction.rejected, (state) => {
        state.isLoaded = false;
        state.isLoadError = true;
      });
  },
});
