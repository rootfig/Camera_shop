import { createSlice } from '@reduxjs/toolkit';
import { NameSpace} from '../../constants';
import { Review } from '../../types/review';
import { fetchReviewsAction } from '../api-actions';

export type reviewsSliceType = {
  reviews: Review[];
};

const initialState: reviewsSliceType = {
  reviews: [],
};

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }}
);
