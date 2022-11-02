import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { PromoSliceState } from '../../types/state';
import { fetchPromoAction } from '../api-actions';

export const initialState: PromoSliceState = {
  promo: {
    id: 0,
    name: '',
    previewImg: '',
    previewImg2x: '',
    previewImgWebp: '',
    previewImgWebp2x: '',
  },
  isLoaded: false,
  isLoadError: false,
};

export const promoSlice = createSlice({
  name: NameSpace.Promo,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoAction.pending, (state) => {
        state.isLoaded = true;
        state.isLoadError = false;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isLoaded = false;
        state.isLoadError = false;
      })
      .addCase(fetchPromoAction.rejected, (state) => {
        state.isLoaded = false;
        state.isLoadError = true;
      });
  },
});
