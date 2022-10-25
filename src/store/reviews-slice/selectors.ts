import { NameSpace } from '../../constants';
import { State } from '../../types/state';
import { Review } from '../../types/review';

export const selectReviews = (state: State): Review[] => state[NameSpace.Reviews].reviews;
