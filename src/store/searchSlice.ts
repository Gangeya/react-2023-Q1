import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: 'Start',
  },
  reducers: {
    searchText(state, action) {
      console.log(state);
      console.log(action);
      state.searchValue = action.payload;
    },
  },
});

export const { searchText } = searchSlice.actions;

export default searchSlice.reducer;
