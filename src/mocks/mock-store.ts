import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { REVIEWS_COUNT } from '../constants';
import { makeFakeCamera, makeFakeCameras, makeFakePromoCamera, makeFakeReviews } from './moks';

const middlewares = [thunk];

const promo = makeFakePromoCamera();
const cameras = makeFakeCameras();
const camera = makeFakeCamera();
const reviews = makeFakeReviews();

const mockStore = configureMockStore(middlewares);
export const store = mockStore({
  CAMERAS: {
    cameras: cameras,
    isLoaded: false,
  },
  CAMERA: {
    camera: camera,
    isLoaded: false,
  },
  REVIEWS: {
    reviews: reviews,
    isReviewLoading: false,
    reviewsCounter: REVIEWS_COUNT,
    isReviewSending: false,
  },
  PROMO : {
    promo: promo,
  },
  SIMILAR: {
    similars: cameras,
    isLoaded: false,
    isLoadError: false,
  }
});
