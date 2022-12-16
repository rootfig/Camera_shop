import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { Camera } from '../../types/camera';

type initialStateType = {
  itemsInBasket: Camera[];
  itemInGarbage: Camera;
  isCameraInBasket: boolean;
  isAddSuccessItemStatus: boolean;
  isRemoveItemStatus: boolean;
}
const initialState: initialStateType = {
  itemsInBasket: [],
  itemInGarbage:{
    id: 0,
    name: '',
    vendorCode: '',
    type: '',
    category: '',
    description: '',
    level: '',
    rating: 0,
    price: 0,
    previewImg: '',
    previewImg2x: '',
    previewImgWebp: '',
    previewImgWebp2x: '',
    reviewCount: 0
  },
  isCameraInBasket: false,
  isAddSuccessItemStatus: false,
  isRemoveItemStatus: false,
};

export const basketSlice = createSlice({
  name: NameSpace.Basket,
  initialState,
  reducers: {
    setItemInBasket: (state, action) => {
      state.itemsInBasket = action.payload as Camera[];
    },
    setItemInGarbage: (state, action) => {
      state.itemInGarbage = action.payload as Camera;
    },
    deleteItemFromBasket: (state, action) => {
      state.itemsInBasket = state.itemsInBasket.filter((camera) => camera.id !== action.payload);
    },
    changeIsAddSuccessItemStatus: (state, action) => {
      state.isAddSuccessItemStatus = action.payload as boolean;
    },
    changeIsRemoveItemStatus: (state, action) => {
      state.isRemoveItemStatus = action.payload as boolean;
    },
  }
});

export const {setItemInGarbage, changeIsRemoveItemStatus, changeIsAddSuccessItemStatus, setItemInBasket, deleteItemFromBasket } = basketSlice.actions;
