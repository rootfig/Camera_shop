import { createSlice } from '@reduxjs/toolkit';
import { CamerasFilters } from '../../constants';
import { CamerasSliceState } from '../../types/state';
import { fetchCamerasAction } from '../api-actions';

const initialState: CamerasSliceState = {
  cameras: [],
  isLoaded: false,
  isLoadError: false,
  type: CamerasFilters.ALL.type,
};

export const camerasSlice = createSlice({
  name: 'cameras',
  initialState,
  reducers: {
    changeType: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.type = action.payload ?? CamerasFilters.ALL.type;
    },
  },
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
