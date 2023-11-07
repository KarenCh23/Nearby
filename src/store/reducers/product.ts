import { createReducer } from '@reduxjs/toolkit';
import { Products } from '../../@types/product';
import { setCurrentProductId } from '../actions/actions';
import {
  actionFetchLatestProduct,
  actionFetchProducts,
  actionFetchProductsSheet,
} from '../thunks/product';

interface initialState {
  list: Products[];
  detail: Products | null;
  currentProductId: number | null;
}

const initialState: initialState = {
  list: [],
  currentProductId: null,
  detail: null,
};

const productListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionFetchProducts.fulfilled, (state, action) => {
      state.list = action.payload;
    })
    .addCase(actionFetchProductsSheet.fulfilled, (state, action) => {
      state.detail = action.payload;
    })
    .addCase(actionFetchLatestProduct.fulfilled, (state, action) => {
      state.list = action.payload;
    })
    .addCase(setCurrentProductId, (state, action) => {
      state.currentProductId = action.payload;
    });
});

export default productListReducer;
