import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants';
import { Camera } from '../types/camera';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Promo } from '../types/promo';

const ApiAction = {
  FetchCameras: 'data/fetchCameras',
  FetchCamera: 'data/fetchCamera',
  FetchPromo:'data/fetchPromo',
  FetchPaginateCameras:'data/fetchPaginateCamera'
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
