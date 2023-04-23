import { createSlice } from '@reduxjs/toolkit';
import { TProduct } from '../types';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formCards: [] as TProduct[],
  },
  reducers: {
    addCards(state, action) {
      console.log(state);
      console.log(action);
      state.formCards.push(action.payload)
    }
  }
});

export const { addCards } = formSlice.actions;

export default formSlice.reducer;