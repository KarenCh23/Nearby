import { createAction } from '@reduxjs/toolkit';

// actions for Contact Form //
export const setContactFirstName = createAction<string>(
  'reducer/SET_CONTACTUSER_FIRSTNAME'
);

export const setContactLastName = createAction<string>(
  'reducer/SET_CONTACTUSER_LASTNAME'
);

export const setContactEmail = createAction<string>(
  'reducer/SET_CONTACTUSER_EMAIL'
);

export const setContactMessage = createAction<string>(
  'reducer/SET_CONTACTUSER_MESSAGE'
);

// action to check is this is the LoginForm or not
export const setIsLoginForm = createAction<boolean>('reducer/SET_ISLOGINFORM');

// actions for LoginForm values
export const setConnectionEmail = createAction<string>(
  'reducer/SET_CONNECTION_EMAIL'
);

export const setConnectionPassword = createAction<string>(
  'reducer/SET_CONNECTION_PASSWORD'
);

// actions for Login
export const setCheckLogin = createAction<boolean>('reducer/CHECKLOGIN');
export const setUser = createAction<string>('reducer/SET_USER');
export const setToken = createAction<string>('reducer/SET_TOKEN');

//action to log out
export const logOut = createAction('user/LOGOUT');

//current product id
export const setCurrentProductId = createAction<number>(
  'product/SET_PRODUCT_ID'
);

//current producer id
export const setCurrentProducerId = createAction<number>(
  'producer/SET_PRODUCER_ID'
);
