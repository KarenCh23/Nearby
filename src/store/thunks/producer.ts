import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';
import { RootState } from '../store';

export const actionFetchProducer = createAsyncThunk(
  'producer/FETCH_PRODUCER',
  async () => {
    // est dispatchée l'action recipes/FETCH_PRODUCTS/pending

    const result = await axiosInstance.get('api/v1/users/makers');
    return result.data;

    // est dispatchée l'action recipes/FETCH_PRODUCTS/fulfilled
  }
);

export const actionSliderProducer = createAsyncThunk(
  'producer/FETCH_SLIDER',
  async () => {
    // est dispatchée l'action recipes/FETCH_PRODUCTS/pending

    const result = await axiosInstance.get('api/v1/users/home/slider');
    return result.data;

    // est dispatchée l'action recipes/FETCH_PRODUCTS/fulfilled
  }
);

export const getProducerData = createAsyncThunk(
  'producer/GET_DATA',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const id = state.producerListReducer.producerId;

    try {
      const response = await axiosInstance.get(`api/v1/users/${id}/show`);

      return {
        producerData: response.data,
      };
    } catch (error) {
      // Handle error if needed
      throw error;
    }
  }
);
