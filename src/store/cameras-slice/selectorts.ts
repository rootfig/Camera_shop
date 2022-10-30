import { NameSpace } from '../../constants';
import { State } from '../../types/state';

export const selectCameras = (state: State) => state[NameSpace.Cameras].cameras;
export const selectIsLoadedError = (state: State) => state[NameSpace.Cameras].isLoadError;
