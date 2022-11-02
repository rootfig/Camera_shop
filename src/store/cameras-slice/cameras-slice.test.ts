import { makeFakeCameras } from '../../mocks/moks';
import { CamerasSliceState } from '../../types/state';
import { fetchCamerasAction } from '../api-actions';
import { camerasSlice, initialState } from './cameras-slice';

const cameras = makeFakeCameras();
const state: CamerasSliceState = initialState;

describe('Reducer: camerasSlice', () => {
  it('without additional parameters should return initial state', () => {
    expect(camerasSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchCamerasAction test', () => {
    it('should update fulfilled state by fetchCamerasAction', () => {
      expect(camerasSlice.reducer(state, {type: fetchCamerasAction.fulfilled.type, payload: cameras}))
        .toEqual({
          cameras: cameras,
          isLoaded: false,
          isLoadError: false,
        });
    });

    it('should update pending state by fetchCamerasAction', () => {
      expect(camerasSlice.reducer(state, {type: fetchCamerasAction.pending.type}))
        .toEqual({
          cameras: [],
          isLoaded: true,
          isLoadError: false,
        });
    });

    it('should update rejected state by fetchCamerasAction', () => {
      expect(camerasSlice.reducer(state, {type: fetchCamerasAction.rejected.type}))
        .toEqual({
          cameras: [],
          isLoaded: false,
          isLoadError: true,
        });
    });
  });
});
