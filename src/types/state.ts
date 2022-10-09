import { store } from '../store';
import { Camera } from './camera';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CamerasSliceState = {
  cameras: Camera[] | undefined;
  isLoaded: boolean;
  isLoadError: boolean;
  type: string;
}
