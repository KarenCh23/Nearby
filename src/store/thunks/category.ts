import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';
import { RootState } from '../store';

export const actionFetchCategories = createAsyncThunk(
  'category/GET_CATEGORIES',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const result = await axiosInstance.get('api/v1/categories');
    return result.data;
  }
);
