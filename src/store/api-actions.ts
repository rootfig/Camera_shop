import { AxiosInstance } from 'axios';
import { RouteName } from '../constants';
import { Camera } from '../types/camera';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';

const ApiAction = {
  FetchCameras: 'data/fetchCameras',
  FetchCamera: 'data/fetchCamera',
};

export const fetchCamerasAction = createAsyncThunk<Camera[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ApiAction.FetchCameras,
  async (_arg, { extra: api}) => {
    const { data } = await api.get<Camera[]>(RouteName.Cameras);
    return data;
  }
);

export const fetchCameraAction = createAsyncThunk<Camera, string, {
  extra: AxiosInstance;
}>(
  ApiAction.FetchCamera,
  async (id: string, {extra: api}) => {
    const {data} = await api.get<Camera>(`${ RouteName.CamerasDetailed.name }/${ id }`);
    return data;
  }
);
