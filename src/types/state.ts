import { store } from '../store';
import { Camera } from './camera';
import { Promo } from './promo';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CamerasSliceState = {
  cameras: Camera[];
  isLoaded: boolean;
  isLoadError: boolean;
}

export type SimilarSliceState = {
  similars: Camera[];
  isLoaded: boolean;
  isLoadError: boolean;
  isLoading: boolean;
}

export type CameraSliceState = {
  camera: Camera;
  isLoaded: boolean;
  isLoadError: boolean;
  isLoading: boolean;
}

export type PromoSliceState = {
  promo: Promo;
  isLoaded: boolean;
  isLoadError: boolean;
  isLoading: boolean;
}
