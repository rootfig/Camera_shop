import { makeFakeCameras } from '../../mocks/moks';
import { CamerasSliceState } from '../../types/state';
import { fetchCamerasByParamsAction } from '../api-actions';
import { camerasSlice, initialState } from './cameras-slice';

const cameras = makeFakeCameras();
const state: CamerasSliceState = initialState;

describe('Reducer: camerasSlice', () => {
  it('without additional parameters should return initial state', () => {
    expect(camerasSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchCamerasByParamsAction test', () => {
    it('should update fulfilled state by fetchCamerasByParamsAction', () => {
      expect(camerasSlice.reducer(state, {type: fetchCamerasByParamsAction.fulfilled.type, payload: {data: cameras, dataTotalCount: cameras.length}}))
        .toEqual({
          allCameras: [],
          cameras: cameras,
          isLoaded: false,
          isLoadError: false,
          productsTotalCount: cameras.length,
          productsPriceRange: {
            minPrice: 0,
            maxPrice: 0,
          },
          isFilterReset: false,
          isAddItemStatus: false,
        });
    });

    it('should update pending state by fetchCamerasByParamsAction', () => {
      expect(camerasSlice.reducer(state, {type: fetchCamerasByParamsAction.pending.type}))
        .toEqual({
          allCameras: [],
          cameras: [],
          isLoaded: true,
          isLoadError: false,
          productsTotalCount: 0,
          productsPriceRange: {
            minPrice: 0,
            maxPrice: 0,
          },
          isFilterReset: false,
          isAddItemStatus: false,
        });
    });

    it('should update rejected state by fetchCamerasByParamsAction', () => {
      expect(camerasSlice.reducer(state, {type: fetchCamerasByParamsAction.rejected.type}))
        .toEqual({
          allCameras: [],
          cameras: [],
          isLoaded: false,
          isLoadError: true,
          productsTotalCount: 0,
          productsPriceRange: {
            minPrice: 0,
            maxPrice: 0,
          },
          isFilterReset: false,
          isAddItemStatus: false,
        });
    });
  });
});
