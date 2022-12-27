import { datatype } from 'faker';
// import { makeFakeCamera } from '../../mocks/moks';


import { postCouponAction } from '../api-actions';
import { basketSlice,initialState, initialStateType } from './basket-slice';

const fakeDiscount = datatype.number(20);


const state: initialStateType = initialState;

describe('Reducer: basketSlice', () => {
  it('without additional parameters should return initial state', () => {
    expect(basketSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('postCouponAction test', () => {
    it('should update pending state by postCouponAction', () => {
      expect(basketSlice.reducer(state, {type: postCouponAction.pending.type,}))
        .toEqual({
          ...initialState,
          isCouponLoaded: true,
          isCouponLoadError: false,
        });
    });

    it('should update fulfilled state by postCouponAction', () => {
      expect(basketSlice.reducer(state, {type: postCouponAction.fulfilled.type, payload: fakeDiscount}))
        .toEqual({
          ...initialState,
          isLoaded: false,
          isLoadError: false,
          discount: fakeDiscount,
          isCouponLoaded: false,
        });
    });

    it('should update rejected state by postCouponAction', () => {
      expect(basketSlice.reducer(state, {type: postCouponAction.rejected.type,}))
        .toEqual({
          ...initialState,
          isCouponLoaded: false,
          isCouponLoadError: true,
        });
    });
  });

});
