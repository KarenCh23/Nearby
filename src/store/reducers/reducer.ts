import { createAction, createReducer } from '@reduxjs/toolkit';
import { setConnectionEmail, setConnectionPassword } from '../actions/actions';
import { getUserData, checkLogin } from '../thunks/user';
interface initialState {
  userData: {
    lastname: string;
    firstname: string;
    email: string;
    phone: string | null;
    password: string;
    description: string | null;
    role: [string];
    picture: string;
    house_number: string;
    street: string | null;
    postal_code: string;
    region: string;
    country: string | null;
    siren: string | null;
    city: string | null;
    products: [];
  };
  logged: boolean;
  isLoginForm: boolean;
  isLoading: boolean;
  token: string;
  user: string;
  user_id: number | null;
  role: [string];
  error: string | null;
  loginUser: {
    username: string;
    password: string;
  };
  newUser: {
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    role: [string];
    region: string;
  };
}
const initialState: initialState = {
  userData: {
    lastname: '',
    firstname: '',
    email: '',
    phone: '',
    password: '',
    description: '',
    role: [''],
    picture: '',
    house_number: '',
    street: '',
    postal_code: '',
    region: '',
    country: '',
    siren: '',
    city: '',
    products: [],
  },
  isLoginForm: true,
  isLoading: false,
  logged: false,
  token: '',
  user: '',
  role: [''],
  user_id: null,
  error: '',
  loginUser: {
    username: '',
    password: '',
  },
  newUser: {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    role: [''],
    region: '',
  },
};

export const logOut = createAction('user/LOGOUT');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setConnectionEmail, (state, action) => {
      state.loginUser.username = action.payload;
    })
    .addCase(setConnectionPassword, (state, action) => {
      state.loginUser.password = action.payload;
    })
    .addCase(checkLogin.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(checkLogin.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.error = null;
      state.isLoading = false;
      state.logged = true;
      state.user_id = action.payload.user_id;
      state.user = action.payload.username;
      state.role = action.payload.role;
      console.log('données reçues, vous êtes connecté');
    })
    .addCase(checkLogin.rejected, (state, action) => {
      state.error =
        'La connexion a échoué : mauvais mot de passe ou mauvais email.';
      state.isLoading = false;
    })
    .addCase(logOut, (state) => {
      state.logged = false;
      state.user = '';
      state.token = '';
    })
    .addCase(getUserData.fulfilled, (state, action) => {
      state.userData = action.payload.userData;
      console.log('données utilisateur reçues');
    });
});

export default userReducer;
