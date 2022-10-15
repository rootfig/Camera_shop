import { NameSpace } from '../../constants';
import { State } from '../../types/state';

export const selectSimilar = (state: State) => state[NameSpace.Similar].similars;
