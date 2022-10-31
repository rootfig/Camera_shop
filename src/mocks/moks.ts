import { commerce, datatype, image, name } from 'faker';
import { Camera } from '../types/camera';
import { Promo } from '../types/promo';
import { Review } from '../types/review';
import { ReviewPost } from '../types/review-post';


export const DEFAULT_CAMERAS_TOTAL_COUNT = 0;
export const CAMERAS_TOTAL_COUNT = 30;
let fakeCameraId = 1;

export const makeFakeCamera = (): Camera => ({
  id: fakeCameraId++,
  name: commerce.productName(),
  vendorCode: datatype.string(),
  type: datatype.string(),
  category: datatype.string(),
  description: commerce.productDescription(),
  level: datatype.string(),
  rating: datatype.number({min: 1, max: 5}),
  price: datatype.number(),
  previewImg: image.imageUrl(),
  previewImg2x: image.imageUrl(),
  previewImgWebp: image.imageUrl(),
  previewImgWebp2x: image.imageUrl(),
  reviewCount: datatype.number(),
});

export const makeFakeCameras = (): Camera[] => (new Array(4).fill(null).map(makeFakeCamera));

export const makeFakePromoCamera = (): Promo => ({
  id: datatype.number({min: 1, max: 4}),
  name: commerce.productName(),
  previewImg: image.imageUrl(),
  previewImg2x: image.imageUrl(),
  previewImgWebp: image.imageUrl(),
  previewImgWebp2x: image.imageUrl(),
});

export const makeFakeReview = (): Review => ({
  id: datatype.number(),
  userName: name.firstName(),
  advantage: datatype.string(),
  disadvantage: datatype.string(),
  review: datatype.string(),
  rating: datatype.number({min: 1, max: 5}),
  createAt: String(datatype.datetime()),
  cameraId: datatype.number({min: 1, max: 4}),
});

export const makeFakeReviews = (): Review[] => (new Array(10).fill(null).map(makeFakeReview));

export const makeFakeAddReview = (): ReviewPost => ({
  cameraId: datatype.number({min: 1, max: 4}),
  userName: name.firstName(),
  advantage: datatype.string(),
  disadvantage: datatype.string(),
  review: datatype.string(),
  rating: datatype.number({min: 1, max: 5}),
});
