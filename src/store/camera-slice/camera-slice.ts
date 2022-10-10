import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { CameraSliceState } from '../../types/state';
import { fetchCameraAction } from '../api-actions';

const initialState: CameraSliceState = {
  camera: {
    id: 0,
    name: '',
    vendorCode: '',
    type: '',
    category: '',
    description: '',
    level: '',
    rating: 0,
    price: 0,
    previewImg: '',
    previewImg2x: '',
    previewImgWebp: '',
    previewImgWebp2x: '',
    reviewCount: 0
  },
  isLoaded: false,
  isLoadError: false,
};

export const cameraSlice = createSlice({
  name: NameSpace.Cameras,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCameraAction.pending, (state) => {
        state.isLoaded = true;
        state.isLoadError = false;
      })
      .addCase(fetchCameraAction.fulfilled, (state, action) => {
        state.camera = action.payload;
        state.isLoaded = false;
        state.isLoadError = false;
      })
      .addCase(fetchCameraAction.rejected, (state) => {
        state.isLoaded = false;
        state.isLoadError = true;
      });
  },
});
