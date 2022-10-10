import { store } from '../store';
import { Camera } from './camera';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CamerasSliceState = {
  cameras: Camera[];
  isLoaded: boolean;
  isLoadError: boolean;
}

export type CameraSliceState = {
  camera: Camera;
  isLoaded: boolean;
  isLoadError: boolean;
}
