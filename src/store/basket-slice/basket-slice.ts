import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CAMERAS_COUNT_DEFAULT, ITEM_IN_GARBAGE_DEFAULT, NameSpace } from '../../constants';
import { Camera } from '../../types/camera';
import { OrderPost } from '../../types/order-post';
import { postCouponAction, postOrderAction } from '../api-actions';

export type initialStateType = {
  itemsInBasket: {
    camera: Camera;
    count: number;
    }[];
  itemInGarbage: Camera;
  isCameraInBasket: boolean;
  isAddSuccessItemStatus: boolean;
  isRemoveItemStatus: boolean;
  isCouponLoaded: boolean;
  isCouponLoadError: boolean;
  isLoaded: boolean;
  isLoadError: boolean;
  order: OrderPost;
  discount: number;
  isOrderPostStatus: boolean;
  isLoadDone: boolean;
  itemsCount: number;
}
export const initialState: initialStateType = {
  itemsInBasket: [],
  itemInGarbage: ITEM_IN_GARBAGE_DEFAULT,
  isCameraInBasket: false,
  isAddSuccessItemStatus: false,
  isRemoveItemStatus: false,
  isLoaded: false,
  isLoadError: false,
  isCouponLoaded: true,
  isCouponLoadError: false,
  isOrderPostStatus: false,
  isLoadDone: false,
  order: {
    camerasIds: [],
    coupon: null
  },
  discount: 0,
  itemsCount: 1,
};

export const basketSlice = createSlice({
  name: NameSpace.Basket,
  initialState,
  reducers: {
    addItemInBasket: (state, action: PayloadAction<Camera>) => {
      const index = (state.itemsInBasket || []).findIndex(({camera}) => camera.id === action.payload.id);
      if (index >= 0 || null) {
        state.itemsInBasket[index].count++;
        return;
      }
      state.itemsInBasket.push({
        camera: action.payload,
        count: CAMERAS_COUNT_DEFAULT,
      });
    },
    setCameraCount: (state, action: PayloadAction<{id: number; value: number}>) => {
      const index = state.itemsInBasket?.findIndex(({camera}) => camera.id === action.payload.id);
      state.itemsInBasket[index].count = action.payload.value;
    },
    setItemsInBasket: (state, action) => {
      state.itemsInBasket = action.payload as {camera: Camera; count: number}[];
    },
    setItemInGarbage: (state, action) => {
      state.itemInGarbage = action.payload as Camera;
    },
    deleteItemFromBasket: (state, action) => {
      const index = state.itemsInBasket.findIndex((item) => item.camera.id === action.payload);
      state.itemsInBasket.splice(index, 1);
    },
    deleteItemsFromBasket: (state, action) => {
      state.itemsInBasket = state.itemsInBasket.filter((item) => item.camera.id !== action.payload);
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
    setOrderPostCoupon: (state, action) => {
      state.order.coupon = action.payload as '' | null;
    },
    changeIsOrderPostStatus: (state, action) => {
      state.isOrderPostStatus = action.payload as boolean;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCouponAction.pending, (state) => {
        state.isCouponLoaded = true;
        state.isCouponLoadError = false;
      })
      .addCase(postCouponAction.fulfilled, (state, action) => {
        state.discount = action.payload;
        state.isCouponLoaded = false;
        state.isCouponLoadError = false;
      })
      .addCase(postCouponAction.rejected, (state) => {
        state.isCouponLoaded = false;
        state.isCouponLoadError = true;
      })
      .addCase(postOrderAction.pending, (state) => {
        state.isLoaded = true;
        state.isLoadError = false;
      })
      .addCase(postOrderAction.fulfilled, (state) => {
        state.isLoaded = false;
        state.isLoadError = false;
        state.isLoadDone = true;
      })
      .addCase(postOrderAction.rejected, (state) => {
        state.isLoaded = false;
        state.isLoadError = true;
      });
  }
});

export const {setItemsInBasket, setCameraCount, changeIsOrderPostStatus, setOrderPostCoupon, deleteItemFromBasket, addItemInBasket, setOrderPost, setItemInGarbage, changeIsRemoveItemStatus, changeIsAddSuccessItemStatus, deleteItemsFromBasket } = basketSlice.actions;
