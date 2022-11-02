import { makeFakePromoCamera } from '../../mocks/moks';
import { PromoSliceState } from '../../types/state';
import { fetchPromoAction } from '../api-actions';
import { promoSlice, initialState } from './promo-slice';

const promo = makeFakePromoCamera();
const state: PromoSliceState = initialState;

describe('Reducer: promoSlice', () => {
  it('without additional parameters should return initial state', () => {
    expect(promoSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchPromoAction test', () => {
    it('should update fulfilled state by fetchReviewsAction', () => {
      expect(promoSlice.reducer(state, {type: fetchPromoAction.fulfilled.type, payload: promo}))
        .toEqual({
          promo: promo,
          isLoaded: false,
          isLoadError: false,
        });
    });

    it('should update pending state by fetchReviewsAction', () => {
      expect(promoSlice.reducer(state, {type: fetchPromoAction.pending.type}))
        .toEqual({
          promo: {
            id: 0,
            name: '',
            previewImg: '',
            previewImg2x: '',
            previewImgWebp: '',
            previewImgWebp2x: '',
          },
          isLoaded: true,
          isLoadError: false,
        });
    });

    it('should update rejected state by fetchReviewsAction', () => {
      expect(promoSlice.reducer(state, {type: fetchPromoAction.rejected.type}))
        .toEqual({
          promo: {
            id: 0,
            name: '',
            previewImg: '',
            previewImg2x: '',
            previewImgWebp: '',
            previewImgWebp2x: '',
          },
          isLoaded: false,
          isLoadError: true,
        });
    });
  });
});
