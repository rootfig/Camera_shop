import { createSlice } from '@reduxjs/toolkit';
import { CAMERAS_COUNT_DEFAULT, NameSpace } from '../../constants';
import { CamerasSliceState } from '../../types/state';
import { fetchCamerasAction, fetchPriceCamerasAction } from '../api-actions';

export const initialState: CamerasSliceState = {
  cameras: [],
  isLoaded: false,
  isLoadError: false,
  camerasCount: CAMERAS_COUNT_DEFAULT,
  productsTotalCount: 0,
  productsPriceRange: {
    minPrice: 0,
    maxPrice: 0,
  },
  isFilterReset: false,
};

export const camerasSlice = createSlice({
  name: NameSpace.Cameras,
  initialState,
  reducers: {
    changeIsFilterReset: (state, action) => {
      state.isFilterReset = action.payload as boolean;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasAction.pending, (state) => {
        state.isLoaded = true;
        state.isLoadError = false;
      })
      .addCase(fetchCamerasAction.fulfilled, (state, action) => {
        state.cameras = action.payload.data;
        state.productsTotalCount = action.payload.dataTotalCount;
        state.isLoaded = false;
        state.isLoadError = false;
      })
      .addCase(fetchCamerasAction.rejected, (state) => {
        state.isLoaded = false;
        state.isLoadError = true;
      })
      .addCase(fetchPriceCamerasAction.fulfilled, (state, action) => {
        const cameras = action.payload;
        state.productsPriceRange.minPrice = cameras[0].price;
        state.productsPriceRange.maxPrice = cameras[cameras.length - 1].price;
      });
  },
});

export const {changeIsFilterReset} = camerasSlice.actions;
