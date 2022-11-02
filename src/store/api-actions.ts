import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants';
import { Camera } from '../types/camera';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Promo } from '../types/promo';
import { Review } from '../types/review';
import { ReviewPost } from '../types/review-post';

const ApiAction = {
  FetchCameras: 'data/fetchCameras',
  FetchCamera: 'data/fetchCamera',
  FetchPromo:'data/fetchPromo',
  FetchPaginateCameras:'data/fetchPaginateCamera',
  FetchSimilar: 'data/fetchSimilar',
  FetchReviews: 'data/fetchReviews',
  PostReviews: 'user/postReviews'
};

export const fetchCamerasAction = createAsyncThunk<Camera[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ApiAction.FetchCameras,
  async (_arg, { extra: api}) => {
    const { data } = await api.get<Camera[]>(APIRoute.Cameras);
    return data;
  }
);

export const fetchCameraAction = createAsyncThunk<Camera, number, {
  extra: AxiosInstance;
}>(
  ApiAction.FetchCamera,
  async (id: number, {extra: api}) => {
    const {data} = await api.get<Camera>(`${ APIRoute.Cameras }/${ id }`);
    return data;
  }
);

export const fetchPromoAction = createAsyncThunk<Promo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ApiAction.FetchPromo,
  async (_arg, { extra: api}) => {
    const { data } = await api.get<Promo>(APIRoute.Promo);
    return data;
  }
);

export const fetchSimilarAction = createAsyncThunk<Camera[], number,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ApiAction.FetchSimilar,
  async (id, { extra: api}) => {
    const { data } = await api.get<Camera[]>(`${APIRoute.Cameras}/${id}/similar`);
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<Review[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ApiAction.FetchReviews,
  async(id, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Cameras}/${id}/reviews`);
    return data;
  },
);

export const postReviewAction = createAsyncThunk<void, ReviewPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/send-review',
  async (reviewPost: ReviewPost, { extra: api}) => {
    await api.post<ReviewPost>(APIRoute.Reviews, reviewPost);
  }
);
