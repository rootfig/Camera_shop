import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { State } from '../types/state';
import { APIRoute } from '../constants';
import { CAMERAS_TOTAL_COUNT, DEFAULT_CAMERAS_TOTAL_COUNT, makeFakeAddReview, makeFakeCamera, makeFakeCameras, makeFakePromoCamera, makeFakeReviews } from '../mocks/moks';
import { fetchCameraAction, fetchCamerasByParamsAction, fetchPromoAction, fetchReviewsAction, fetchSimilarAction, postReviewAction } from './api-actions';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);
  it('should dispatch fetchCamerasByParamsAction when GET /cameras', async () => {
    const mockCameras = makeFakeCameras();
    mockAPI
      .onGet(APIRoute.Cameras)
      .reply(200, {data: mockCameras, camerasTotalCount: DEFAULT_CAMERAS_TOTAL_COUNT }, { 'x-total-count': CAMERAS_TOTAL_COUNT });

    const store = mockStore();

    await store.dispatch(fetchCamerasByParamsAction());

    const actions = store.getActions().map(({ type }:Action<string>) => type);

    expect(actions).toEqual([
      fetchCamerasByParamsAction.pending.type,
      fetchCamerasByParamsAction.fulfilled.type,
    ]);
  });

  it('should dispatch fetchPromoCameraAction when GET /promo', async () => {
    const mockPromo = makeFakePromoCamera();
    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, mockPromo);

    const store = mockStore();

    await store.dispatch(fetchPromoAction());

    const actions = store.getActions().map(({ type }:Action<string>) => type);

    expect(actions).toEqual([
      fetchPromoAction.pending.type,
      fetchPromoAction.fulfilled.type,
    ]);
  });

  it('should dispatch fetchCameraAction when GET /cameras/id', async () => {
    const mockCamera = makeFakeCamera();
    const id = Number(mockCamera.id);
    mockAPI
      .onGet(`${APIRoute.Cameras}/${id}`)
      .reply(200, mockCamera);

    const store = mockStore();

    await store.dispatch(fetchCameraAction(id));

    const actions = store.getActions().map(({ type }:Action<string>) => type);

    expect(actions).toEqual([
      fetchCameraAction.pending.type,
      fetchCameraAction.fulfilled.type,
    ]);
  });

  it('should dispatch fetchSimilarCamerasAction when GET /cameras/id/similar', async () => {
    const mockCamera = makeFakeCamera();
    const id = Number(mockCamera.id);
    const mockSimilarCameras = makeFakeCameras();
    mockAPI
      .onGet(`${APIRoute.Cameras}/${id}/similar`)
      .reply(200, mockSimilarCameras);

    const store = mockStore();

    await store.dispatch(fetchSimilarAction(id));

    const actions = store.getActions().map(({ type }:Action<string>) => type);

    expect(actions).toEqual([
      fetchSimilarAction.pending.type,
      fetchSimilarAction.fulfilled.type,
    ]);
  });

  it('should dispatch fetchReviewsAction when GET /cameras/id/reviews', async () => {
    const mockCamera = makeFakeCamera();
    const id = Number(mockCamera.id);
    const mockReviews = makeFakeReviews();
    mockAPI
      .onGet(`${APIRoute.Cameras}/${id}/reviews`)
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(fetchReviewsAction(id));

    const actions = store.getActions().map(({ type }:Action<string>) => type);

    expect(actions).toEqual([
      fetchReviewsAction.pending.type,
      fetchReviewsAction.fulfilled.type,
    ]);
  });
  it('should dispatch postReviewAction when POST /reviews', async () => {
    const mockReview = makeFakeAddReview();

    mockAPI
      .onPost(APIRoute.Reviews)
      .reply(200, []);

    const store = mockStore();

    await store.dispatch(postReviewAction(mockReview));

    const actions = store.getActions().map(({ type }:Action<string>) => type);

    expect(actions).toEqual([
      postReviewAction.pending.type,
      postReviewAction.fulfilled.type,
    ]);
  });
});
