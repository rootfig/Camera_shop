import { store } from '../store';
import { Camera } from './camera';
import { Promo } from './promo';
import { Review } from './review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ProductPriceRange = {
  minPrice: number;
  maxPrice: number;
}
export type CamerasSliceState = {
  allCameras: Camera [];
  cameras: Camera[];
  isLoaded: boolean;
  isLoadError: boolean;
  productsTotalCount: number;
  productsPriceRange: ProductPriceRange;
  isFilterReset: boolean;
}

export type SimilarSliceState = {
  similars: Camera[];
  isLoaded: boolean;
  isLoadError: boolean;
}

export type CameraSliceState = {
  camera: Camera;
  isLoaded: boolean;
  isLoadError: boolean;
}

export type PromoSliceState = {
  promo: Promo;
  isLoaded: boolean;
  isLoadError: boolean;
}

export type ReviewsSliceState = {
  reviews: Review[];
  isLoaded: boolean;
  isLoadError: boolean;
  isReviewSuccessOpen: boolean;
};
