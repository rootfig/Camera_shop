import { createSlice } from '@reduxjs/toolkit';
import { NameSpace} from '../../constants';
import { Review } from '../../types/review';
import { fetchReviewsAction } from '../api-actions';

export type reviewsSliceType = {
  reviews: Review[];
  isLoaded: boolean;
  isLoadError: boolean;
};

const initialState: reviewsSliceType = {
  reviews: [],
  isLoaded: false,
  isLoadError: false,
};

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoaded = false;
        state.isLoadError = false;
      });
  }}
);
