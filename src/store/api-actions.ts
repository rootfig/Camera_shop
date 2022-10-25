import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants';
import { Camera } from '../types/camera';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Promo } from '../types/promo';
import { Review } from '../types/review';

const ApiAction = {
  FetchCameras: 'data/fetchCameras',
  FetchCamera: 'data/fetchCamera',
  FetchPromo:'data/fetchPromo',
  FetchPaginateCameras:'data/fetchPaginateCamera',
  FetchSimilar: 'data/fetchSimilar',
  FetchReviews: 'data/fetchReviews',
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

// export const fetchPaginateCamerasAction = createAsyncThunk<Camera[], string[], {

//   extra: AxiosInstance;
// }>(
//   ApiAction.FetchPaginateCameras,
//   async ([start, end], { extra: api}) => {
//     const { data } = await api.get<Camera[]>(`${RouteName.Cameras}?_start=${ start }&_limit=${ end }`);
//     return data;
//   }
// );

export const fetchCameraAction = createAsyncThunk<Camera, string, {
  extra: AxiosInstance;
}>(
  ApiAction.FetchCamera,
  async (id: string, {extra: api}) => {
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

export const fetchSimilarAction = createAsyncThunk<Camera[], undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ApiAction.FetchSimilar,
  async (_arg, { extra: api}) => {
    const { data } = await api.get<Camera[]>(`${APIRoute.Cameras}?name_like=Shot`);
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
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
