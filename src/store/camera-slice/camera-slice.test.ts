import { makeFakeCamera } from '../../mocks/moks';
import { CameraSliceState } from '../../types/state';
import { fetchCameraAction } from '../api-actions';
import { cameraSlice, initialState } from './camera-slice';

const camera = makeFakeCamera();
const state: CameraSliceState = initialState;

describe('Reducer: cameraSlice', () => {
  it('without additional parameters should return initial state', () => {
    expect(cameraSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchCameraAction test', () => {
    it('should update fulfilled state by fetchCameraAction', () => {
      expect(cameraSlice.reducer(state, {type: fetchCameraAction.fulfilled.type, payload: camera}))
        .toEqual({
          camera: camera,
          buyedCamera: {
            id: 0,
            name: '',
            vendorCode: '',
            type: '',
            category: '',
            description: '',
            level: '',
            rating: 0,
            price: 0,
            previewImg: '',
            previewImg2x: '',
            previewImgWebp: '',
            previewImgWebp2x: '',
            reviewCount: 0
          },
          isLoaded: false,
          isLoadError: false,
        });
    });

    it('should update pending state by fetchCameraAction', () => {
      expect(cameraSlice.reducer(state, {type: fetchCameraAction.pending.type}))
        .toEqual({
          camera: {
            id: 0,
            name: '',
            vendorCode: '',
            type: '',
            category: '',
            description: '',
            level: '',
            rating: 0,
            price: 0,
            previewImg: '',
            previewImg2x: '',
            previewImgWebp: '',
            previewImgWebp2x: '',
            reviewCount: 0
          },
          buyedCamera: {
            id: 0,
            name: '',
            vendorCode: '',
            type: '',
            category: '',
            description: '',
            level: '',
            rating: 0,
            price: 0,
            previewImg: '',
            previewImg2x: '',
            previewImgWebp: '',
            previewImgWebp2x: '',
            reviewCount: 0
          },
          isLoaded: true,
          isLoadError: false,
        });
    });

    it('should update rejected state by fetchCameraAction', () => {
      expect(cameraSlice.reducer(state, {type: fetchCameraAction.rejected.type}))
        .toEqual({
          camera: {
            id: 0,
            name: '',
            vendorCode: '',
            type: '',
            category: '',
            description: '',
            level: '',
            rating: 0,
            price: 0,
            previewImg: '',
            previewImg2x: '',
            previewImgWebp: '',
            previewImgWebp2x: '',
            reviewCount: 0
          },
          buyedCamera: {
            id: 0,
            name: '',
            vendorCode: '',
            type: '',
            category: '',
            description: '',
            level: '',
            rating: 0,
            price: 0,
            previewImg: '',
            previewImg2x: '',
            previewImgWebp: '',
            previewImgWebp2x: '',
            reviewCount: 0
          },
          isLoaded: false,
          isLoadError: true,
        });
    });
  });
});

