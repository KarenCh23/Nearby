import { createReducer } from '@reduxjs/toolkit';
import { actionFetchCategories } from '../thunks/category';

interface initialState {
  categoriesList: [];
}

const initialState: initialState = {
  categoriesList: [],
};

const categoryReducer = createReducer(initialState, (builder) => {
  builder.addCase(actionFetchCategories.fulfilled, (state, action) => {
    state.categoriesList = action.payload;
  });
});

export default categoryReducer;
