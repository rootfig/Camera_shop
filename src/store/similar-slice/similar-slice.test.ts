import { makeFakeCameras } from '../../mocks/moks';
import { SimilarSliceState } from '../../types/state';
import { fetchSimilarAction } from '../api-actions';
import { initialState, similarSlice } from './similar-slice';

const similars = makeFakeCameras();
const state: SimilarSliceState = initialState;

describe('Reducer: similarSlice', () => {
  it('without additional parameters should return initial state', () => {
    expect(similarSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchSimilarAction test', () => {
    it('should update fulfilled state by fetchSimilarAction', () => {
      expect(similarSlice.reducer(state, {type: fetchSimilarAction.fulfilled.type, payload: similars}))
        .toEqual({
          similars: similars,
          isLoaded: false,
          isLoadError: false,
        });
    });

    it('should update pending state by fetchSimilarAction', () => {
      expect(similarSlice.reducer(state, {type: fetchSimilarAction.pending.type}))
        .toEqual({
          similars: [],
          isLoaded: true,
          isLoadError: false,
        });
    });

    it('should update rejected state by fetchSimilarAction', () => {
      expect(similarSlice.reducer(state, {type: fetchSimilarAction.rejected.type}))
        .toEqual({
          similars: [],
          isLoaded: false,
          isLoadError: true,
        });
    });
  });
});
