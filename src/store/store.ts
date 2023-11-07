import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/reducer';
import productListReducer from './reducers/product';
import producerListReducer from './reducers/producer';
import categoryReducer from './reducers/category';

const store = configureStore({
  reducer: {
    userReducer,
    productListReducer,
    producerListReducer,
    categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
