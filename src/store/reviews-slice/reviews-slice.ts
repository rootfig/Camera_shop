
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace} from '../../constants';
import { ReviewsSliceState } from '../../types/state';
import { fetchReviewsAction, postReviewAction } from '../api-actions';

export const initialState: ReviewsSliceState = {
  reviews: [],
  isLoaded: false,
  isLoadError: false,
  isReviewSuccessOpen: false,
};

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    fetchSuccessModalAction: (state) => {
      state.isReviewSuccessOpen = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isLoaded = true;
        state.isLoadError = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoaded = false;
        state.isLoadError = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isLoaded = false;
        state.isLoadError = true;
      })
      .addCase(postReviewAction.fulfilled, (state) => {
        state.isReviewSuccessOpen = true;
      });
  }}
);

export const { fetchSuccessModalAction } = reviewsSlice.actions;
