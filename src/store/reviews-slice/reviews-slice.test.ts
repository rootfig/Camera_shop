import { makeFakeReviews } from '../../mocks/moks';
import { ReviewsSliceState } from '../../types/state';
import { fetchReviewsAction } from '../api-actions';
import { reviewsSlice, initialState } from './reviews-slice';

const reviews = makeFakeReviews();
const state: ReviewsSliceState = initialState;

describe('Reducer: reviewsSlice', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviewsSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchReviewsAction test', () => {
    it('should update fulfilled state by fetchReviewsAction', () => {
      expect(reviewsSlice.reducer(state, {type: fetchReviewsAction.fulfilled.type, payload: reviews}))
        .toEqual({
          reviews: reviews,
          isLoaded: false,
          isLoadError: false,
          isReviewSuccessOpen: false
        });
    });

    it('should update pending state by fetchReviewsAction', () => {
      expect(reviewsSlice.reducer(state, {type: fetchReviewsAction.pending.type}))
        .toEqual({
          reviews: [],
          isLoaded: true,
          isLoadError: false,
          isReviewSuccessOpen: false
        });
    });

    it('should update rejected state by fetchReviewsAction', () => {
      expect(reviewsSlice.reducer(state, {type: fetchReviewsAction.rejected.type}))
        .toEqual({
          reviews: [],
          isLoaded: false,
          isLoadError: true,
          isReviewSuccessOpen: false
        });
    });
  });
});
