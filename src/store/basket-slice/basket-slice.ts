import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { Camera } from '../../types/camera';
import { OrderPost } from '../../types/order-post';
import { postCouponAction, postOrderAction } from '../api-actions';

type initialStateType = {
  itemsInBasket: Camera[];
  itemInGarbage: Camera;
  isCameraInBasket: boolean;
  isAddSuccessItemStatus: boolean;
  isRemoveItemStatus: boolean;
  isLoaded: boolean;
  isLoadError: boolean;
  order: OrderPost;
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
  isLoaded: false,
  isLoadError: false,
  order: {
    camerasIds: [],
    coupon: null
  }
};

export const basketSlice = createSlice({
  name: NameSpace.Basket,
  initialState,
  reducers: {
    addItemInBasket: (state, action) => {
      state.itemsInBasket.push(action.payload as Camera);
    },
    setItemsInBasket: (state, action) => {
      state.itemsInBasket = action.payload as Camera[];
    },
    setItemInGarbage: (state, action) => {
      state.itemInGarbage = action.payload as Camera;
    },
    deleteItemFromBasket: (state, action) => {
      const index = state.itemsInBasket.findIndex((item) => item.id === action.payload);
      state.itemsInBasket.splice(index, 1);
    },
    deleteItemsFromBasket: (state, action) => {
      state.itemsInBasket = state.itemsInBasket.filter((camera) => camera.id !== action.payload);
    },
    changeIsAddSuccessItemStatus: (state, action) => {
      state.isAddSuccessItemStatus = action.payload as boolean;
    },
    changeIsRemoveItemStatus: (state, action) => {
      state.isRemoveItemStatus = action.payload as boolean;
    },
    setOrderPost: (state, action) => {
      state.order.camerasIds = action.payload as [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCouponAction.pending, (state) => {
        state.isLoaded = true;
        state.isLoadError = false;
      })
      .addCase(postCouponAction.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.isLoadError = false;
      })
      .addCase(postCouponAction.rejected, (state) => {
        state.isLoaded = false;
        state.isLoadError = true;
      })
      .addCase(postOrderAction.pending, (state) => {
        state.isLoaded = true;
        state.isLoadError = false;
      })
      .addCase(postOrderAction.fulfilled, (state) => {
        state.isLoaded = false;
        state.isLoadError = false;
      })
      .addCase(postOrderAction.rejected, (state) => {
        state.isLoaded = true;
        state.isLoadError = false;
      });
  }
});

export const { deleteItemFromBasket, addItemInBasket, setOrderPost, setItemInGarbage, changeIsRemoveItemStatus, changeIsAddSuccessItemStatus, setItemsInBasket, deleteItemsFromBasket } = basketSlice.actions;
