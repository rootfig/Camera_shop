import { NameSpace } from '../../constants';
import { State } from '../../types/state';

export const selectCamera = (state: State) => state[NameSpace.Camera].camera;
