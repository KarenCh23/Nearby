import { Action, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';
import { RootState } from '../store';

export const checkLogin = createAsyncThunk(
  'user/CHECKLOGIN',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const { username, password } = state.userReducer.loginUser;
    const result = await axiosInstance.post('api/login', {
      username,
      password,
    });
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${result.data.token}`;
    return {
      username: result.data.user,
      token: result.data.token,
      user_id: result.data.user_id,
      role: result.data.role,
    };
  }
);

export const getUserData = createAsyncThunk(
  'user/GET_DATA',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const id = state.userReducer.user_id;

    try {
      const response = await axiosInstance.get(`api/v1/users/${id}/show`);

      return {
        userData: response.data,
      };
    } catch (error) {
      // Handle error if needed
      throw error;
    }
  }
);

export const logAndGetUserData = createAsyncThunk(
  'user/CHECK_LOG_AND_DATA',
  async (_, thunkAPI) => {
    await thunkAPI.dispatch(checkLogin());
    await thunkAPI.dispatch(getUserData());
  }
);
