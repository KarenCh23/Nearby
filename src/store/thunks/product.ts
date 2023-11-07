import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';

export const actionFetchProducts = createAsyncThunk(
  'products/FETCH_PRODUCTS',
  async () => {
    // est dispatchée l'action products/FETCH_PRODUCTS/pending

    const result = await axiosInstance.get('api/v1/products/list');
    return result.data;

    // est dispatchée l'action products/FETCH_PRODUCTS/fulfilled
  }
);

export const actionFetchProductsSheet = createAsyncThunk(
  'products/FETCH_PRODUCTS_SHEET',
  async (productId: string | undefined) => {
    // est dispatchée l'action products/FETCH_PRODUCTS_SHEETpending

    const result = await axiosInstance.get(`api/v1/products/${productId}/show`);
    return result.data;

    // est dispatchée l'action recipes/FETCH_PRODUCTS/fulfilled
  }
);

export const actionFetchLatestProduct = createAsyncThunk(
  'products/FETCH_PRODUCTS_LATEST',
  async () => {
    // est dispatchée l'action products/FETCH_PRODUCTS_SHEETpending

    const result = await axiosInstance.get(`api/v1/products/latest`);
    return result.data;

    // est dispatchée l'action recipes/FETCH_PRODUCTS/fulfilled
  }
);